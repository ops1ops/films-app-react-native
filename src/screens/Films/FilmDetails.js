import React, { useEffect, useState, useCallback, useContext } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import {setFilmById} from "../../api";
import ImagesCarousel from "../../components/ImagesCarousel/ImagesCarousel";
import theme from "../../theme";
import FastImage from "react-native-fast-image";
import HorizontalGenresList from "../../components/HorizontalGenresList/HorizontalGenresList";
import getFilmDuration from "../../utils/getFilmDuration";
import Section from "../../components/Section";
import Loader from "../../components/Loader";
import HorizontalList from "../../components/HorizontalList";
import Icon from 'react-native-vector-icons/Ionicons';
import RatingModal from '../../components/RatingModal';
import { StoreContext } from '../../store';
import getFormattedType from '../../utils/getFormattedType';
import NumberedText from '../../components/NumberedText';

const FilmDetails = ({ navigation }) => {
  const id = navigation.getParam('id', null);
  const [film, setFilm] = useState();
  const [isVisible, setVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [user] = useContext(StoreContext);

  useEffect(() => {
    setLoading(true);
    setFilmById(id, setFilm, setLoading);
  }, [id]);

  const handleRatePress = useCallback(() => {
    if (user) {
      setVisible(true);
    } else {
      navigation.navigate('SignIn', {
        successLogin: () => {

          console.log(1111111111111111)
        },
      });
    }
  }, [user, navigation]);

  if (!film || isLoading) return <Loader />;

  const { images, name, releaseDate, posterUrl, genres, description, duration, actors, type } = film;
  const year = new Date(releaseDate).getFullYear();

  return (
    <ScrollView style={styles.container}>
      <RatingModal isVisible={isVisible} setVisible={setVisible} filmId={id}/>
      <ImagesCarousel images={images} />
      <View style={styles.titleContainer}>
        <Text style={styles.actorName}>{ name }</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.grayText}>{ getFormattedType(type) }</Text>
          <Text style={styles.year}>{ year }</Text>
          <Text style={styles.grayText}>{ getFilmDuration(duration) }</Text>
        </View>
      </View>
      <View style={styles.posterContainer}>
        <FastImage source={{ uri: posterUrl }} style={styles.poster}/>
        <View style={styles.overviewContainer}>
          <HorizontalGenresList genres={genres} navigation={navigation}/>
          <NumberedText style={styles.description} numberOfLines={5}>{ description }</NumberedText>
        </View>
      </View>
      <View style={styles.ratingContainer}>
        <TouchableOpacity style={styles.vertical} activeOpacity={1}>
          <Icon name="ios-star" color="#f1c40f" size={35}/>
          <Text style={styles.count}><Text style={{ fontWeight: 'bold', fontSize: 17 }}>5.6</Text>/10</Text>
          <Text style={styles.total}>12 000</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.vertical} onPress={handleRatePress}>
          <Icon name="ios-star-outline" color="#fff" size={35}/>
          <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold', marginTop: 2 }}>RATE THIS</Text>
        </TouchableOpacity>
      </View>
      <Section title="Actors">
        <HorizontalList data={actors} navigation={navigation}/>
      </Section>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  vertical: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  total: {
    fontSize: 12,
    color: 'gray'
  },
  count: {
    fontSize: 15,
    color: 'white'
  },
  ratingContainer: {
    backgroundColor: theme.sectionBackground,
    marginBottom: theme.sectionMarginBottom,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15
  },
  container: {
    backgroundColor: theme.screenBackground,
    height: '100%',
  },
  overviewContainer: {
    flexDirection: 'column',
    width: '63%'
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
  actorName: {
    color: 'white',
    fontSize: 30,
  },
  grayText: {
    color: 'gray',
    fontSize: 14,
  },
  year: {
    color: 'gray',
    fontSize: 14,
    marginHorizontal: 8,
  },
  posterContainer: {
    width: '100%',
    ...theme.bottomDivider,
    backgroundColor: theme.sectionBackground,
    padding: 15,
    flexDirection: 'row',
  },
  poster: {
    marginRight: 15,
    width: 110,
    height: 160
  },
  description: {
    marginTop: 8,
    lineHeight: 20,
    color: 'white',
    fontSize: 14,
  },
  firstItemStyles: {
    marginLeft: 15
  }
});

export default FilmDetails;
