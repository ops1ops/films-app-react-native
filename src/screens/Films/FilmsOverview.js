import React, { useEffect, useState } from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {setAllFilms} from "../../api";
import FilmsCarousel from "../../components/FilmsCarousel/FilmsCarousel";
import HorizontalFilmsLIst from '../../components/FilmsList/HorizontalFilmsList';
import Section from '../../components/Section';

const FilmsOverview = ({ navigation }) => {
  const [films, setFilms] = useState();

  useEffect(() => {
    setAllFilms(setFilms);
  }, [])

  if (!films) return <View style={styles.container} />;

  const sortedFilms = films.slice().sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))

  return (
    <ScrollView style={styles.container}>
      <FilmsCarousel films={films} navigation={navigation} />
      <Section title="Films Overview">
        <HorizontalFilmsLIst films={films} navigation={navigation} />
      </Section>
      <Section title="Last Released Films">
        <HorizontalFilmsLIst films={sortedFilms} navigation={navigation} useAdditionalText />
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
