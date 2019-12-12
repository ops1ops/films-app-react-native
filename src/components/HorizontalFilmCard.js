import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import theme from "../theme";

const HorizontalFilmCard = ({ posterUrl, name, onPress, description, year, containerStyles }) => (
  <TouchableOpacity activeOpacity={theme.cardTouchOpacity} onPress={onPress}>
    <View style={{ ...styles.container, ...containerStyles}}>
      <FastImage source={{ uri: posterUrl }} style={styles.image}/>
      <View style={styles.textContainer}>
        <Text style={styles.name} numberOfLines={2}>{ `${name} (${year})` }</Text>
        <Text style={styles.description} numberOfLines={2}>{ description }</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  //move to upper styles if will be reused
  container: {
    backgroundColor: 'transparent',
    marginHorizontal: 7,
    paddingVertical: 10,
    flexDirection: 'row'
  },
  image: {
    marginLeft: 8,
    width: 90,
    height: 135,
  },
  textContainer: {
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  name: {
    color: 'white',
    fontSize: 15,
    width: '100%',
  },
});

export default HorizontalFilmCard;
