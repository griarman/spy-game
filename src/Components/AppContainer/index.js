import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';

export default ({
  children,
  translucent = false,
  barStyle = 'dark-content',
  barBackgroundColor = 'transparent'
}) => (
  <View style={styles.container}>
   <StatusBar
     barStyle={barStyle}
     translucent={translucent}
     backgroundColor={barBackgroundColor}
   />
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
