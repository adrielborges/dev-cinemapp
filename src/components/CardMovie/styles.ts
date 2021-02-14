import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface IMovieFavoriteButton {
  favorited: boolean;
}

export const MovieCard = styled.View`
  position: relative;
  background: #171721;
  width: 100%;
  padding: 5px;
  border-radius: 15px;
  flex-direction: row;
  margin-bottom: 10px;
`;
export const MovieImage = styled.Image`
  width: 78px;
  height: 116px;
  border-radius: 10px;
`;

export const MovieInfoContainer = styled.View`
  flex: 1;
  padding-left: 15px;
  justify-content: space-between;
`;
export const MovieInfoTitle = styled.Text`
  margin-top: 16px;
  font-size: 16px;
  width: 70%;
  color: #fafafa;
`;

export const Year = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 8px;
  border-top-width: 1px;
  border-color: rgba(196, 196, 196, 0.1);
`;

export const Dot = styled.View`
  background: #fafafa;
  height: 5px;
  width: 5px;
  border-radius: 2.5px;
  margin-right: 8px;
`;

export const YearText = styled.Text`
  font-size: 16px;
  color: #fafafa;
`;

export const MovieFavoriteButton = styled.TouchableOpacity<IMovieFavoriteButton>`
  position: absolute;
  bottom: 0px;
  right: 0px;
  background: ${(props) => (props.favorited ? '#da1a37' : '#2b2b37')};
  height: 32px;
  width: 32px;
  border-radius: 16px;
  justify-content: center;
`;

export const MovieFavoriteButtonIcon = styled(Icon)`
  font-size: 15px;
  text-align: center;
  color: #f0f0f0;
`;
