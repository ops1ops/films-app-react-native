import React, { useEffect, useState } from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {setAllCinematograph} from "../../api";
import FilmsCarousel from "../../components/FilmsCarousel/FilmsCarousel";
import HorizontalFilmsList from '../../components/FilmsList/HorizontalFilmsList';
import Section from '../../components/Section';
import Loader from "../../components/Loader";

const FilmsOverview = ({ navigation }) => {
  const [films, setFilms] = useState();
  const [tvs, setTvs] = useState();

  useEffect(() => {
    setAllCinematograph(setFilms, setTvs);
  }, []);

  if (!films) return <Loader/>;

  const sortedFilms = films.slice().sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))

  return (
    <ScrollView style={styles.container}>
      <FilmsCarousel films={films} navigation={navigation} />
      <Section title="Films Overview">
        <HorizontalFilmsList films={films} navigation={navigation} navigateTo="FilmDetails" />
      </Section>
      <Section title="TV's Overview">
        <HorizontalFilmsList films={tvs} navigation={navigation} navigateTo="FilmDetails" />
      </Section>
      <Section title="Last Released Films">
        <HorizontalFilmsList films={sortedFilms} navigation={navigation} useAdditionalText navigateTo="FilmDetails" />
      </Section>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191919',
    height: '100%',
  }
});

export default FilmsOverview;
