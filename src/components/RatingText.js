import { Text, StyleSheet } from 'react-native';
import React from 'react';

const RatingText = ({ rating }) => (
  <Text style={styles.count}><Text style={styles.rating}>{ rating }</Text>/10</Text>
);

const styles = StyleSheet.create({
  rating: {
    fontWeight: 'bold',
    fontSize: 17
  },
  count: {
    fontSize: 15,
    color: 'white'
  },
});

export default RatingText
