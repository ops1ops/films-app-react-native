import React, { useEffect, useState } from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {setAllFilms, setFilmById} from "../../api";
import FilmsCarousel from "../../components/FilmsCarousel/FilmsCarousel";
import ImagesCarousel from "../../components/ImagesCarousel/ImagesCarousel";
import theme from "../../theme";
import LinearGradient from "react-native-linear-gradient";
import FastImage from "react-native-fast-image";
import HorizontalGenresList from "../../components/HorizontalGenresList/HorizontalGenresList";
import getFilmDuration from "../../utils/getFilmDuration";
import Section from "../../components/Section";
import HorizontalFilmsList from "../../components/FilmsList/HorizontalFilmsList";

const FilmDetails = ({ navigation }) => {
  const id = navigation.getParam('id', null);
  const [film, setFilm] = useState();

  useEffect(() => {
    setFilmById(id, setFilm);
  }, [id]);

  if (!film) return <View style={styles.container} />;

  const { images, name, releaseDate, posterUrl, genres, description, duration, actors } = film;
  const year = new Date(releaseDate).getFullYear();

  return (
    <ScrollView style={styles.container}>
      <ImagesCarousel images={images} />
      <View style={styles.titleContainer}>
        <Text style={styles.filmName}>{ name }</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.year}>{ year }</Text>
          <Text style={styles.duration}>{ getFilmDuration(duration) }</Text>
        </View>
      </View>
      <View style={styles.posterContainer}>
        <FastImage source={{ uri: posterUrl }} style={styles.poster}/>
        <View style={styles.overviewContainer}>
          <HorizontalGenresList genres={genres} navigation={navigation}/>
          <Text style={styles.description} numberOfLines={5}>{ description }</Text>
        </View>
      </View>
      <Section title="Actors">
        <HorizontalFilmsList films={actors} useAdditionalCharacter />
      </Section>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.screenBackground,
    height: '100%',
  },
  overviewContainer: {
    flexDirection: 'column',
    width: '62%'
  },
  titleContainer: {
    ...theme.bottomDivider,
    backgroundColor: theme.sectionBackground,
    marginTop: -20,
    paddingHorizontal: 15,
    paddingTop: 5,
    paddingBottom: 15,
    elevation: 5,
  },
  filmName: {
    color: 'white',
    fontSize: 30,
  },
  year: {
    color: 'gray',
    fontSize: 14,
  },
  duration: {
    color: 'gray',
    fontSize: 14,
    marginLeft: 8
  },
  posterContainer: {
    width: '100%',
    backgroundColor: theme.sectionBackground,
    padding: 15,
    flexDirection: 'row',
    marginBottom: theme.sectionMarginBottom
  },
  poster: {
    marginRight: 15,
    width: 120,
    height: 160
  },
  description: {
    marginTop: 8,
    lineHeight: 20,
    color: 'white',
    fontSize: 14,
  }
});

export default FilmDetails;
