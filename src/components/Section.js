import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const Section = ({ children, title }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{ title }</Text>
    { children }
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#212121',
    paddingVertical: 25,
    marginBottom: 15,
  },
  title: {
    color: 'white',
    fontSize: 24,
    marginBottom: 25,
    marginLeft: 15,
  }
});

export default Section;
