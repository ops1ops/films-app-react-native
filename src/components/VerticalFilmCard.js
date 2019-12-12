import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import theme from "../theme";

const renderAdditionalText = (additional) => additional && <Text style={styles.additional}>{ additional }</Text>;

const VerticalFilmCard = ({ posterUrl, name, additionalText, onPress, additionalCharacter }) => (
  <View style={styles.container}>
    <TouchableOpacity activeOpacity={theme.cardTouchOpacity} onPress={onPress}>
      <FastImage source={{ uri: posterUrl }} style={styles.image}/>
      <View style={styles.textContainer}>
        <Text style={styles.name} numberOfLines={2}>{ name }</Text>
        { renderAdditionalText(additionalText) }
        { renderAdditionalText(additionalCharacter) }
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  //move to upper styles if will be reused
  container: {
    backgroundColor: '#2A2A2A',
    borderRadius: 4,
    marginRight: 12,
    width: 130,
  },
  image: {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    height: 190,
  },
  textContainer: {
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  name: {
    color: 'white',
    fontSize: 15,
    minHeight: 38
  },
  additional: {
    color: 'gray',
    fontSize: 13
  }
});

export default VerticalFilmCard;
