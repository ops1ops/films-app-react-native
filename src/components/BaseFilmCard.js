import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

const HorizontalFilmsLIst = ({ posterUrl, name }) => (
  <View style={styles.container}>
    <FastImage source={{ uri: posterUrl }} style={styles.image}/>
    <View style={styles.textContainer}>
      <Text style={styles.name} numberOfLines={2}>{ name }</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  //move to upper styles if will be reused
  container: {
    backgroundColor: '#2A2A2A',
    borderRadius: 4,
    marginRight: 10,
    width: 130,

  },
  image: {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    height: 220,
  },
  textContainer: {
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  name: {
    color: 'white',
    fontSize: 15,
  },
});

export default HorizontalFilmsLIst;
