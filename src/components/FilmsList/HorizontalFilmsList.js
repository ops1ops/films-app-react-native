import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import VerticalFilmCard from "../VerticalFilmCard";
import getYearByReleaseDate from "../../utils/getYearByReleaseDate";

const HorizontalFilmsList = ({ films, navigation, useAdditionalText, useAdditionalCharacter }) => {
  const renderItem = ({ item: { posterUrl, name, id, releaseDate = null, pivot = {} }, index }) => (
    <VerticalFilmCard
      posterUrl={posterUrl}
      name={name}
      onPress={() => navigation.navigate('FilmDetails', { id })}
      additionalText={useAdditionalText && getYearByReleaseDate(releaseDate)}
      additionalCharacter={useAdditionalCharacter && pivot.character}
      firstItemStyles={index === 0 && styles.cardLeftMargin}
    />
  );
  const keyExtractor = (({ id }) => id.toString());

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

const styles = StyleSheet.create({
  cardLeftMargin: {
    marginLeft: 15,
  }
});

export default HorizontalFilmsList;
