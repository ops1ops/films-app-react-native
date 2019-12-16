import React, { useEffect, useState } from 'react';
import Carousel from 'react-native-snap-carousel';
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import CarouselItem from './CarouselItem';

const FilmsCarousel = ({ films, navigation }) => {
  const renderItem = ({ item }) => (
    <CarouselItem item={item} onPress={() => navigation.navigate('FilmDetails', { id: item.id })} />
  );
  const { width: viewportWidth } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <Carousel
        loop
        autoplay
        autoplayDelay={2000}
        autoplayInterval={5000}
        data={films}
        renderItem={renderItem}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth}
        layout="default"
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#212121',
    marginBottom: 15,
  }
});

export default FilmsCarousel;
