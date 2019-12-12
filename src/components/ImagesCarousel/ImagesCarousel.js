import React, { useEffect, useState } from 'react';
import Carousel from 'react-native-snap-carousel';
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import FastImage from "react-native-fast-image";

const ImagesCarousel = ({ images }) => {
  const renderItem = ({ item: { url } }) => <FastImage source={{ uri: url }} style={{ width: '100%', height: 220 }} />;
  const { width: viewportWidth } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <Carousel
        loop
        autoplay
        autoplayDelay={5000}
        autoplayInterval={5000}
        data={images}
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

export default ImagesCarousel;
