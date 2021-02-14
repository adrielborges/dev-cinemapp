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

  const renderMovies = ({item}: {item: ISearchMovies}) => (
    <CardMovie movie={item} />
  );

  return (
    <S.Container>
      <LogoMovieList />
      <S.Header>
        <S.HeaderTitleText>Meus Favoritos</S.HeaderTitleText>
      </S.Header>

      <S.ListMovies
        data={favoriteMoviesList}
        keyExtractor={(movie) => movie.imdbID}
        renderItem={renderMovies}
        ItemSeparatorComponent={() => <S.Divider />}
      />
    </S.Container>
  );
};

export default Favorites;
