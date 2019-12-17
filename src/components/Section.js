import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Section = ({ children, title, onSeeAllPress }) => (
  <View style={styles.container}>
    <View style={styles.topContainer}>
      <Text style={styles.title}>{ title }</Text>
      { onSeeAllPress && <Text style={styles.seeAll} onPress={onSeeAllPress}>See all</Text> }
    </View>
    { children }
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#212121',
    paddingVertical: 25,
    marginBottom: 15,
  },
  topContainer: {
    marginHorizontal: 15,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,

  },
  seeAll: {
    color: '#20A0DD',
    textTransform: 'uppercase',
    fontSize: 15,
    paddingTop: 7
  },
  title: {
    color: 'white',
    fontSize: 24,
  }
});

export default Section;
