import React from 'react';

import * as S from './styles';

import {useFavorites} from '../../context/FavoriteMovies';
import CardMovie from '../../components/CardMovie';
import LogoMovieList from '../../components/LogoMovieList';

interface ISearchMovies {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

const Favorites: React.FC = () => {
  const {favoriteMoviesList} = useFavorites();

  return (
    <S.Container>
      <LogoMovieList />
      <S.Header>
        <S.HeaderTitleText> Meus Filmes Favoritos</S.HeaderTitleText>
      </S.Header>

      <S.ListMovies>
        {favoriteMoviesList.map((movie) => (
          <CardMovie key={movie.imdbID} movie={movie} />
        ))}
      </S.ListMovies>
    </S.Container>
  );
};

export default Favorites;
