import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const HeaderTitle = () => (
  <TouchableOpacity
    style={styles.container}
    activeOpacity={1}
  >
    <Text style={styles.text}>Films & TV</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    borderColor: 'white',
    borderWidth: 2,
    padding: 5,
    borderRadius: 4,
    marginLeft: 15,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default HeaderTitle;
