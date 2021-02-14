/* eslint-disable @typescript-eslint/no-unused-vars */

import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {ISearchMovies} from '.';
import CardMovie from './../../components/CardMovie';

interface IMovieFavoriteButton {
  favorited: boolean;
}

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 24px;

  background: #0b0b0c;
`;

export const Header = styled.View`
  width: 100%;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 24px;
  width: 100%;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  margin-right: 8px;
  padding: 14px 16px;
  border-radius: 8px;
  background: #171721;
  color: #fafafa;
  font-family: 'Poppins-Regular';
  font-size: 14px;
`;

export const SearchButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  border-radius: 8px;
  background: #da1a37;
`;
export const SearchButtonText = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 16px;
  color: #fafafa;
`;

export const LoadingText = styled.Text`
  margin-top: 8px;
  font-size: 16px;
  text-align: center;
  color: #fff;
  font-family: 'Poppins-Regular';
`;

export const ListMovies = styled(FlatList as new () => FlatList<ISearchMovies>)`
  margin-top: 24px;
  width: 100%;
  border-radius: 5px;
`;

export const Divider = styled.View`
  height: 16px;
`;
