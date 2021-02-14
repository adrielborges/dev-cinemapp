import React, {useCallback, useState} from 'react';

import * as S from './styles';
import api from './../../services/api';
import {Alert, Keyboard} from 'react-native';

import LogoMovieList from '../../components/LogoMovieList';
import CardMovie from './../../components/CardMovie/index';

export interface IRequestMovies {
  Search: ISearchMovies[];
  totalResults: string;
  Response: string;
}

export interface ISearchMovies {
  imdbID: string;
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
}

const Home: React.FC = () => {
  const [movieList, setMovieList] = useState<ISearchMovies[]>([]);
  const [searchMovie, setSearchMovie] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(2);
  const [totalPage, setTotalPage] = useState(0);

  const handleLoadingMovies = useCallback(
    async (pageNumber: number) => {
      try {
        if (totalPage && pageNumber > totalPage) {
          return;
        }
        if (searchMovie.length === 0) {
          return;
        }

        setLoading(true);
        const {data} = await api.get<IRequestMovies>(
          `${searchMovie.trim()}&page=${pageNumber}`,
        );

        if (data.Response === 'False') {
          setLoading(false);
          throw new Error();
        }

        setTotalPage(Math.ceil(Number(data.totalResults) / 10));

        if (pageNumber > 1) {
          setMovieList([...movieList, ...data.Search]);
          setLoading(false);
          return setPage(page + 1);
        }

        setMovieList(data.Search);
        setLoading(false);
      } catch (error) {
        Alert.alert(
          'Erro ao procurar o filme',
          'Por favor verifique tente mais tarde.',
        );
      }
    },
    [movieList, page, searchMovie, totalPage],
  );

  const renderMovies = ({item}: {item: ISearchMovies}) => (
    <CardMovie movie={item} />
  );

  const handleSubmit = useCallback(() => {
    Keyboard.dismiss();
    handleLoadingMovies(1);
  }, [handleLoadingMovies]);

  return (
    <S.Container>
      <LogoMovieList />

      <S.Header>
        <S.SearchContainer>
          <S.SearchInput
            onChangeText={(text) => setSearchMovie(text)}
            value={searchMovie}
            placeholder="Digite um filme"
            placeholderTextColor="#fafafa"
            returnKeyType="send"
          />
          <S.SearchButton onPress={handleSubmit}>
            <S.SearchButtonText>Procurar</S.SearchButtonText>
          </S.SearchButton>
        </S.SearchContainer>
      </S.Header>

      {loading === true ? <S.LoadingText>Carregando...</S.LoadingText> : null}

      <S.ListMovies
        data={movieList}
        keyExtractor={(movie) => movie.imdbID}
        renderItem={renderMovies}
        onEndReached={() => handleLoadingMovies(page)}
        onEndReachedThreshold={0.25}
        ItemSeparatorComponent={() => <S.Divider />}
      />
    </S.Container>
  );
};

export default Home;
