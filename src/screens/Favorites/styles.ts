import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/FontAwesome';

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
  font-size: 25px;
  color: #ffffff;
`;

export const ListMovies = styled.ScrollView`
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

export const MovieInfoWrap = styled.View`
  padding-left: 15px;
  justify-content: space-between;
`;
export const MovieInfoTitle = styled.Text`
  font-size: 30px;
  width: 200px;
`;

export const MovieFavoriteButton = styled.TouchableOpacity`
  background: #e9193a;
  margin-bottom: 5px;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  justify-content: center;
  align-self: flex-end;
`;
export const MovieFavoriteButtonText = styled.Text`
  font-size: 15px;
  text-align: center;
  color: #f0f0f0;
`;

export const MovieFavoriteButtonIcon = styled(Icon)`
  font-size: 15px;
  text-align: center;
  color: #f0f0f0;
`;
