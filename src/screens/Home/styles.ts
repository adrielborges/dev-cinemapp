/* eslint-disable @typescript-eslint/no-unused-vars */

import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {ISearchMovies} from '.';
import Icon from 'react-native-vector-icons/FontAwesome';

interface IMovieFavoriteButton {
  favorited: boolean;
}

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: relative;

  background: #0b0b0c;
`;

export const Header = styled.View`
  width: 100%;
`;

export const HeaderTitleText = styled.Text`
  margin-top: 15px;
  text-align: center;
  font-size: 22px;
  color: #ffffff;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 24px;
  margin: 10px 0px;
`;

export const SearchInput = styled.TextInput`
  background: #171721;
  border-radius: 8px;
  width: 70%;
  color: #fafafa;
  font-size: 12px;
`;

export const SearchButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 25%;

  border-radius: 8px;
  background: #da1a37;
`;
export const SearchButtonText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #fafafa;
`;

export const LoadingView = styled.View``;
export const LoadingText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #fff;
`;

export const ListMovies = styled(FlatList as new () => FlatList<ISearchMovies>)`
  margin-top: 15px;
  padding: 0 24px;
  width: 100%;
  border-radius: 5px;
`;

export const MovieCard = styled.View`
  position: relative;
  background: #171721;
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  flex-direction: row;
  margin-bottom: 10px;
`;
export const MovieImage = styled.Image`
  width: 120px;
  height: 178px;
`;

export const MovieInfoContainer = styled.View`
  flex: 1;
  padding-left: 15px;
  justify-content: space-between;
`;
export const MovieInfoTitle = styled.Text`
  font-size: 26px;
  width: 70%;
  color: #fafafa;
`;

export const MovieFavoriteButton = styled.TouchableOpacity<IMovieFavoriteButton>`
  position: absolute;
  bottom: 0px;
  right: 0px;
  background: ${(props) => (props.favorited ? '#da1a37' : '#2b2b37')};
  height: 40px;
  width: 40px;
  border-radius: 20px;
  justify-content: center;
`;

export const MovieFavoriteButtonIcon = styled(Icon)`
  font-size: 15px;
  text-align: center;
  color: #f0f0f0;
`;
