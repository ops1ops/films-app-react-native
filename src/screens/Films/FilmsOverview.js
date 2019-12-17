import React, { useEffect, useState } from 'react';
import {ScrollView, RefreshControl, StyleSheet} from 'react-native';
import {setAllCinematograph} from "../../api";
import Loader from "../../components/Loader";
import FilmsCarousel from '../../components/FilmsCarousel/FilmsCarousel';
import Section from '../../components/Section';
import HorizontalFilmsList from '../../components/FilmsList/HorizontalFilmsList';

const FilmsOverview = ({ navigation }) => {
  const [films, setFilms] = useState();
  const [tvs, setTvs] = useState();
  const [isRefreshing, setRefreshing] = useState(false);

  useEffect(() => {
    setAllCinematograph(setFilms, setTvs);
  }, []);

  const handleRefresh = () => {
    setAllCinematograph(setFilms, setTvs);
    console.log(1)
  };

  if (!films) return <Loader/>;

  const sortedByDateFilms = films.slice().sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));

  return (
    <ScrollView
      style={styles.container}
      refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh}/>}
    >
      <FilmsCarousel films={films} navigation={navigation} />
      <Section title="Films Overview" onSeeAllPress={() => navigation.navigate('All', { type: 'film' })}>
        <HorizontalFilmsList films={films} navigation={navigation} navigateTo="FilmDetails" />
      </Section>
      <Section title="TV's Overview" onSeeAllPress={() => navigation.navigate('All', { type: 'TV' })}>
        <HorizontalFilmsList films={tvs} navigation={navigation} navigateTo="FilmDetails" />
      </Section>
      <Section title="Last Released Films">
        <HorizontalFilmsList films={sortedByDateFilms} navigation={navigation} useAdditionalText navigateTo="FilmDetails" />
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
