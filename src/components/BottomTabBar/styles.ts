import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  bottom: 24px;
  width: 100%;
  padding: 0 24px;
`;

export const NavigateOptionsContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  border-radius: 32px;
  background: #da1a37;
  padding: 12px;
`;

type NavigateTypeProp = {
  isFocused: boolean;
};

export const NavigateOption = styled.TouchableOpacity<NavigateTypeProp>`
  flex-direction: row;
  background: ${({isFocused}) => (isFocused ? '#b1152d' : 'transparent')};
  padding: 10px;
  margin: 0 8px;
  border-radius: 20px;
`;
export const OptionName = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 12px;
  color: #fafafa;
`;
