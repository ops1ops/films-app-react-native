import React, { useEffect, useState } from 'react';
import {View, StyleSheet, ScrollView, Text, SafeAreaView, ActivityIndicator} from 'react-native';
import {setFilmsByGenreId} from "../api";
import VerticalFilmsList from "../components/FilmsList/VerticalFilmsList";
import Loader from "../components/Loader";

const Genre = ({ navigation }) => {
  const id = navigation.getParam('id', null);
  const [films, setFilms] = useState();

  useEffect(() => {
    setFilmsByGenreId(id, setFilms);
  }, [id]);

  if (!films) return <Loader />;

  return (
    <SafeAreaView style={styles.container}>
      <VerticalFilmsList films={films} navigation={navigation} />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191919',
    height: '100%',
  }
});

export default Genre;
