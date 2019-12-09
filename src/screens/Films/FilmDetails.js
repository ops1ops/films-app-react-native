import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {setAllFilms} from "../../api";
import FilmsCarousel from "../../components/FilmsCarousel/FilmsCarousel";
import HorizontalFilmsLIst from '../../components/HorizontalFilmsList/HorizontalFilmsList';
import Section from '../../components/Section';

const FilmDetails = () => {
  const [films, setFilms] = useState();

  useEffect(() => {
    setAllFilms(setFilms);
  }, [])

  if (!films) return null;

  return (
    <ScrollView>
      <View style={styles.container}>
        <FilmsCarousel films={films}/>
        <Section title="Top Rated Films">
          <HorizontalFilmsLIst films={films}/>
        </Section>
      </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191919',
    height: '100%',
  }
});

export default FilmDetails;
