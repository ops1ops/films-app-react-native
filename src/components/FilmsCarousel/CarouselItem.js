import React, { useMemo } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';

const CarouselItem = ({ item: { posterUrl, backdropUrl, name, releaseDate } }) => {
  const year = new Date(releaseDate).getFullYear();

  return (
    <View style={styles.container}>
      <View style={styles.backdropContainer}>
        <FastImage source={{ uri: backdropUrl }} style={{ width: '100%', height: 220 }}/>
      </View>
      <TouchableOpacity activeOpacity={0.8} style={styles.posterContainer}>
        <FastImage source={{ uri: posterUrl }} style={styles.poster}/>
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1}>{ name }</Text>
        <Text style={styles.year} numberOfLines={1}>{ year }</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#212121',
    paddingBottom: 10
  },
  titleContainer: {
    position: 'relative',
    zIndex: 3
  },
  backdropContainer: {
    zIndex: 2,
    height: 220,
    marginBottom: 5,
  },
  posterContainer: {
    zIndex: 2,
    position: 'absolute',
    bottom: 10,
    left: 15,
  },
  poster: {
    height: 150,
    width: 100,
    zIndex: 3,
  },
  textContainer: {
    left: 130,
  },
  title: {
    color: 'white',
    width: 250,
    fontSize: 15,
  },
  year: {
    color: 'gray',
    width: 250,
    fontSize: 13,
  }
});

export default CarouselItem;
