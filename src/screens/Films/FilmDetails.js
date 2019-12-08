import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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
    <View style={styles.container}>
      <FilmsCarousel films={films}/>
      <Section>
        <HorizontalFilmsLIst films={films}/>
      </Section>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191919',
    height: '100%',
  }
});

export default FilmDetails;
