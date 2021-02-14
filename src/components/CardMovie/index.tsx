import React from 'react';
import * as S from './styles';
import {useFavorites} from '../../context/FavoriteMovies';
import {noPicture} from '../../assets/images';

interface ICardMovies {
  movie: ISearchMovies;
}

interface ISearchMovies {
  imdbID: string;
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
}

const CardMovie = ({movie}: ICardMovies) => {
  const {favoriteMoviesList, favoriteMovie} = useFavorites();

  return (
    <S.MovieCard key={movie.imdbID}>
      <S.MovieImage
        source={movie.Poster === 'N/A' ? noPicture : {uri: movie.Poster}}
      />
      <S.MovieInfoContainer>
        <S.MovieInfoTitle numberOfLines={2}>{movie.Title}</S.MovieInfoTitle>
        <S.Year>
          <S.Dot />
          <S.YearText>{movie.Year}</S.YearText>
        </S.Year>
        <S.MovieFavoriteButton
          favorited={favoriteMoviesList.some(
            (favoritedMovie) => favoritedMovie.imdbID === movie.imdbID,
          )}
          onPress={() => favoriteMovie(movie)}>
          <S.MovieFavoriteButtonIcon name="heart" size={15} color="#fff" />
        </S.MovieFavoriteButton>
      </S.MovieInfoContainer>
    </S.MovieCard>
  );
};

export default CardMovie;
