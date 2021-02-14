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
`;

type NavigateTypeProp = {
  isFocused: boolean;
};

export const NavigateOption = styled.TouchableOpacity<NavigateTypeProp>`
  background: #b1152d;
  padding: 10px;
  border-radius: 20px;
`;
export const OptionName = styled.Text`
  color: #fafafa;
`;
