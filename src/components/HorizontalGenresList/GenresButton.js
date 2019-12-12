import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import theme from "../../theme";

const GenresButton = ({ name, onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity activeOpacity={theme.cardTouchOpacity} onPress={onPress}>
      <Text style={styles.name}>{ name }</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    borderRadius: 4,
    marginRight: 10,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  name: {
    color: 'white',
    fontSize: 14
  }
});

export default GenresButton;
