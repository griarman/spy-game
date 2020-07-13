import React from 'react';
import { StyleSheet } from 'react-native';

import { AppButton, Card, TextRegular } from '../UI';

const CategoryName = ({ name, keyword }) => (
  <Card>
    <AppButton
      type="unfilled"
      colorType="secondary"
    >
      <TextRegular colorType="secondary">
        {name}
      </TextRegular>
    </AppButton>
  </Card>
);

export default CategoryName;