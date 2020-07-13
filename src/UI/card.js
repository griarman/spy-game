import React from 'react';
import { View, StyleSheet } from 'react-native';

export default ({
  children,
  style = {},
  ...rest
}) => (
  <View
    style={[
      styles.card,
      style,
    ]}
    {...rest}
  >
    {children}
  </View>
);

const styles = StyleSheet.create({
  card: {
    marginVertical: 2.5,
    marginHorizontal: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
