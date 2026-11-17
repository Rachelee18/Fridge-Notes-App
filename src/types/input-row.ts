import type { ComponentProps, ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import type { MaterialCommunityIcons } from '@expo/vector-icons';

export type IconName = ComponentProps<typeof MaterialCommunityIcons>['name'];

export type InputRowProps = {
  icon: IconName;
  children: ReactNode;
  iconSize?: number;
  iconColor?: string;
  style?: StyleProp<ViewStyle>;
};
