import React from 'react';
import { FlatList } from 'react-native';
import VerticalFilmCard from "../VerticalFilmCard";
import getYearByReleaseDate from "../../utils/getYearByReleaseDate";

const HorizontalFilmsLIst = ({ films, navigation, useAdditionalText, useAdditionalCharacter }) => {
  const renderItem = ({ item: { posterUrl, name, id, releaseDate = null, pivot = {} } }) => (
    <VerticalFilmCard
      posterUrl={posterUrl}
      name={name}
      onPress={() => !useAdditionalCharacter && navigation.navigate('FilmDetails', { id })}
      additionalText={useAdditionalText && getYearByReleaseDate(releaseDate)}
      additionalCharacter={useAdditionalCharacter && pivot.character}
    />
  );
  const keyExtractor = (({ id }) => id);

  return (
    <FlatList
      horizontal
      data={films}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      showsHorizontalScrollIndicator={false}
    />
  )
};

export default HorizontalFilmsLIst;
