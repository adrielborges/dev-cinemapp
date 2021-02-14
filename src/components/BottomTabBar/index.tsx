/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import * as S from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {Text} from 'react-native';

export default function BottomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <S.Container>
      <S.NavigateOptionsContainer>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <S.NavigateOption
              isFocused={isFocused}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}>
              {label === 'Procurar' && (
                <Icon
                  name="search"
                  color="#fafafa"
                  size={20}
                  style={{marginRight: 8}}
                />
              )}
              {label === 'Favoritos' && (
                <Icon
                  name="star"
                  color="#fafafa"
                  size={20}
                  style={{marginRight: 8}}
                />
              )}
              <S.OptionName>{label}</S.OptionName>
            </S.NavigateOption>
          );
        })}
      </S.NavigateOptionsContainer>
    </S.Container>
  );
}
