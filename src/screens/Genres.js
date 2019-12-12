import React, { useEffect, useState } from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {setFilmsByGenreId} from "../api";
import VerticalFilmsList from "../components/FilmsList/VerticalFilmsList";

const Genres = ({ navigation }) => {
  const id = navigation.getParam('id', null);
  const [films, setFilms] = useState();

  useEffect(() => {
    setFilmsByGenreId(id, setFilms);
  }, [id]);

  if (!films) return <View style={styles.container} />;

  return (
    <ScrollView style={styles.container}>
      <VerticalFilmsList films={films} navigation={navigation} />
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191919',
    height: '100%',
  }
});

export default Genres;
