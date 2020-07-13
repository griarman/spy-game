import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { AppContainer, CategoryName } from '../../Components';

import {
  COLORS,
  flexStyle,
  TextRegular,
} from '../../UI';

import { categories } from '../../MokeData';

export default () => {

  return (
    <AppContainer style={styles.backgroundColor}>
      <View style={[flexStyle.flex1, styles.container]}>
        <View>
          <TextRegular style={styles.categoryTitle}>Կատեգորիաներ</TextRegular>
          <FlatList
            data={Object.keys(categories)}
            keyExtractor={key => key}
            renderItem={({ item }) => (
              <CategoryName
                keyword={item}
                name={categories[item]}
              />
            )}
          />
        </View>
        <View style={styles.footer}>
          <TextRegular>Կանոններ</TextRegular>
        </View>
      </View>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  categoryTitle: {
    paddingVertical: 20,
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 18,
  },
  footer: {
    padding: 15,
  },
  backgroundColor: {
    backgroundColor: COLORS.gray4,
  },
});
