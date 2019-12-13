import React from 'react';
import {ActivityIndicator, StyleSheet, View} from "react-native";

const Loader = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#fff" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191919',
    height: '100%',
    paddingTop: 20,
  }
});

export default Loader;