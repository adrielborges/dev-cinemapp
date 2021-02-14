import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

interface IMovieFavoriteButton {
  favorited: boolean;
}

export const MovieCard = styled.View`
  background: #171721;
  width: 100%;
  padding: 4px;
  border-radius: 16px;
  flex-direction: row;
`;
export const MovieImage = styled.Image`
  width: 78px;
  height: 116px;
  border-radius: 12px;
`;

export const MovieInfoContainer = styled.View`
  flex: 1;
  margin-left: 15px;
  justify-content: space-between;
`;

export const MovieInfoTitle = styled.Text`
  margin-top: 16px;
  font-size: 16px;
  color: #fafafa;
  font-family: 'Poppins-SemiBold';
`;

export const Footer = styled.View`
  padding-top: 4px;
  border-top-width: 1px;
  border-color: rgba(196, 196, 196, 0.1);
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Year = styled.View`
  flex-direction: row;
  align-items: center;
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
  font-family: 'Poppins-Regular';
`;

export const MovieFavoriteButton = styled.TouchableOpacity<IMovieFavoriteButton>`
  background: ${(props) => (props.favorited ? '#da1a37' : '#2d2d3e')};
  height: 32px;
  width: 32px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;

export const MovieFavoriteButtonIcon = styled(Icon)`
  font-size: 16px;
  color: #fafafa;
`;
