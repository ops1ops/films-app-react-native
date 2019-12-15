import React, { useCallback } from 'react';
import {FlatList, StyleSheet} from 'react-native';
import HorizontalFilmCard from "../HorizontalFilmCard";
import getYearByReleaseDate from "../../utils/getYearByReleaseDate";
import theme from "../../theme";

const VerticalFilmsList = ({ films, navigation }) => {
  const renderItem = useCallback(({ item: { posterUrl, name, id, releaseDate, description }, index }) => (
    <HorizontalFilmCard
      index={index}
      posterUrl={posterUrl}
      name={name}
      description={description}
      year={getYearByReleaseDate(releaseDate)}
      onPress={() => navigation.navigate('FilmDetails', { id })}
      containerStyles={index !== films.length - 1 && theme.bottomDivider}
    />
  ), []);
  const keyExtractor = (({ id }) => id.toString());

  return (
    <FlatList
      data={films}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  )
};

export default VerticalFilmsList;
