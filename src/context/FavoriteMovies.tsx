import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

interface ISearchMovies {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface IFavoritesContext {
  favoriteMoviesList: ISearchMovies[];
  favoriteMovie: (favoritedMovie: ISearchMovies) => Promise<void>;
}

const FavoriteContext = createContext({} as IFavoritesContext);

export const FavoriteListProvider: React.FC = ({children}: any) => {
  const [favoriteMoviesList, setFavoriteMoviesList] = useState<ISearchMovies[]>(
    [],
  );

  useEffect(() => {
    (async function loadFavorites() {
      const savedFavorites = await AsyncStorage.getItem(
        '@MovieList:FavoritedMovies',
      );

      if (savedFavorites) {
        setFavoriteMoviesList(JSON.parse(savedFavorites));
      }
    })();
  }, []);

  const favoriteMovie = useCallback(
    async (favoritedMovie: ISearchMovies) => {
      const findMovie = favoriteMoviesList.find(
        (movie) => movie.imdbID === favoritedMovie.imdbID,
      );

      if (findMovie) {
        const removeMovie = favoriteMoviesList.filter(
          (movie) => movie.imdbID !== favoritedMovie.imdbID,
        );

        setFavoriteMoviesList(removeMovie);
      } else {
        setFavoriteMoviesList([...favoriteMoviesList, favoritedMovie]);
      }

      await AsyncStorage.setItem(
        '@MovieList:FavoritedMovies',
        JSON.stringify(favoriteMoviesList),
      );
    },
    [favoriteMoviesList],
  );

  return (
    <FavoriteContext.Provider value={{favoriteMoviesList, favoriteMovie}}>
      {children}
    </FavoriteContext.Provider>
  );
};

export function useFavorites(): IFavoritesContext {
  const context = useContext(FavoriteContext);

  if (!context) {
    throw new Error('useFavorite must be used with an FavoriteProvider');
  }

  return context;
}
