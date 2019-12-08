import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import BaseFilmCard from '../BaseFilmCard';

const HorizontalFilmsLIst = ({ films }) => {
  const renderItem = ({ item: { posterUrl, name } }) => <BaseFilmCard posterUrl={posterUrl} name={name} />;
  const keyExtractor = (({ id }) => id + Math.random());

  return (
    <FlatList
      horizontal
      data={films}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  )
};

export default HorizontalFilmsLIst;
