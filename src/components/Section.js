import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import FastImage from 'react-native-fast-image';

const Section = ({ children }) => (
  <View style={styles.container}>
    { children }
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#212121',
    paddingHorizontal: 15,
    paddingVertical: 30,
  }
});

export default Section;
