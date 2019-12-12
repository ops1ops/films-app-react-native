import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import HorizontalFilmCard from "../HorizontalFilmCard";
import getYearByReleaseDate from "../../utils/getYearByReleaseDate";
import theme from "../../theme";
import {View} from "react-native-reanimated";

const VerticalFilmsList = ({ films, navigation }) => {
  const renderItem = useCallback(({ item: { posterUrl, name, id, releaseDate }, index }) => (
    <HorizontalFilmCard
      index={index}
      posterUrl={posterUrl}
      name={name}
      year={getYearByReleaseDate(releaseDate)}
      onPress={() => navigation.navigate('FilmDetails', { id })}
      containerStyles={index !== films.length - 1 && theme.bottomDivider}
    />
  ), []);
  const keyExtractor = (({ id }) => id);

  return (
    <FlatList
      data={films}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  )
};

export default VerticalFilmsList;
