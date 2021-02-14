/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {FlatList} from 'react-native';
import {ISearchMovies} from '../Home';

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

export const HeaderTitleText = styled.Text`
  margin-top: 24px;
  font-size: 24px;
  color: #ffffff;
  font-family: 'Poppins-Medium';
`;

export const ListMovies = styled(FlatList as new () => FlatList<ISearchMovies>)`
  margin-top: 24px;
  width: 100%;
  border-radius: 5px;
`;

export const Divider = styled.View`
  height: 16px;
`;
