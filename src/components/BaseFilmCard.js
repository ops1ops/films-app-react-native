import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import FastImage from 'react-native-fast-image';

const HorizontalFilmsLIst = ({ posterUrl, name }) => (
  <View style={styles.container}>
    <FastImage source={{ uri: posterUrl }} style={styles.image}/>
    <Text style={styles.name}>{ name }</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#393939',
    borderRadius: 4,
    marginRight: 10,
  },
  image: {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    height: 220,
    width: 130,
  },
  name: {
    color: 'white',
    fontSize: 15,
  },
});

export default HorizontalFilmsLIst;
