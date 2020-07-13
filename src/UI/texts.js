import React from 'react';
import { StyleSheet, Text } from 'react-native';

import COLORS, { isDark } from './colors';

export const TextRegular = ({
  children,
  style = {},
  colorType = 'primary',
  ...rest
}) => (
  <Text
    style={[
      ColorTypes[colorType],
      style,
    ]}
    {...rest}
  >
    {children}
  </Text>
);

const styles = StyleSheet.create({

});

const ColorTypes = StyleSheet.create({
  primary: {
    color: !isDark ? COLORS.navy : COLORS.navy,
  },
  secondary: {
    color: !isDark ? COLORS.lightGreen : COLORS.lightGreen,
  },
});
