import React from 'react';
import { StyleSheet, StatusBar, View, ImageBackground, Dimensions, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

import { flexStyle } from '../../UI';

const { width, height } = Dimensions.get('window');

export default ({
  children,
  style = {},
  translucent = false,
  imageBackground = false,
  barStyle = 'dark-content',
  barBackgroundColor = 'transparent',
}) => (
  <View style={[styles.container, flexStyle.flex1, style]}>
    <StatusBar
      barStyle={barStyle}
      translucent={translucent}
      backgroundColor={barBackgroundColor}
    />
    {imageBackground && (
      <ImageBackground
        style={styles.imageBackground}
        source={{ uri: imageBackground }}
      />
      )}
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
  },
  imageBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width,
    height: height + StatusBar.currentHeight,
  },
});
