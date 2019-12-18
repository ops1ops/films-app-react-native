import React, { useEffect, useState, useCallback, useContext } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import {addToWatchList, deleteFromWatchList, setFilmById} from "../../api";
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
import RatingText from '../../components/RatingText';
import reformatRatedBy from "../../utils/reformattedRatedBy";
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';

const FilmDetails = ({ navigation }) => {
  const id = navigation.getParam('id', null);
  const [film, setFilm] = useState();
  const [isVisible, setVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [userRating, setUserRating] = useState();
  const [totalInfo, setTotalInfo] = useState();
  const [isInWatchlist, setInWatchlist] = useState(false);
  const [user] = useContext(StoreContext);

  useEffect(() => {
    setLoading(true);
    setFilmById(id, user, setFilm, setLoading, setTotalInfo, setUserRating, setInWatchlist);
  }, [id]);

  const handleWatchlist = useCallback(async () => {
    try {
      console.log(isInWatchlist)
      if (isInWatchlist) {
        await deleteFromWatchList(id);
      } else {
        await addToWatchList(id);
      }
    } catch (e) {
      console.log(e)
    } finally {
      if (user) {
        setInWatchlist(!isInWatchlist);
      }
    }
  }, [isInWatchlist, id, setInWatchlist, user]);

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

  const {
    data: { images, name, releaseDate, posterUrl, genres, description, duration, actors, type, ratedBy },
  } = film;
  const { count, average } = totalInfo;

  const year = new Date(releaseDate).getFullYear();
  const newRatedBy = reformatRatedBy(ratedBy, user);
  console.log("INFO", totalInfo)
  return (
    <ScrollView style={styles.container}>
      <RatingModal
        startRating={userRating}
        isVisible={isVisible}
        setVisible={setVisible}
        filmId={id}
        setFilm={setFilm}
        setTotalInfo={setTotalInfo}
        setUserRating={setUserRating}
      />
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
      <View style={styles.watchListButtonContainer}>
        <TouchableOpacity style={styles.watchListButton} onPress={handleWatchlist}>
          { !isInWatchlist ? <Entypo name="plus" color="#fff" size={25}/> : <MaterialIcons name="done" color="#fff" size={25}/> }
          <Text style={styles.watchListText}>{ !isInWatchlist ? 'Add to Watchlist' : 'Added to Watchlist' }</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ratingContainer}>
        <TouchableOpacity style={styles.vertical} activeOpacity={1}>
          <Icon name="ios-star" color="#f1c40f" size={35}/>
          { count && average.length ? (
              <>
                <RatingText rating={Number(average[0].avgRating).toFixed(1)} />
                <Text style={styles.total}>{ count }</Text>
              </>
            ) : (
              <Text style={styles.rateThis}>NO RATES YET</Text>
            )
          }
        </TouchableOpacity>
        <TouchableOpacity style={styles.vertical} onPress={handleRatePress}>
          <Icon name="ios-star-outline" color="#fff" size={35}/>
          { !userRating ? (
              <Text style={styles.rateThis}>RATE THIS</Text>
            ) : (
              <>
                <RatingText rating={userRating} />
                <Text style={styles.total}>You</Text>
              </>
          ) }
        </TouchableOpacity>
      </View>
      <Section title="Actors">
        <HorizontalList data={actors} navigation={navigation}/>
      </Section>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  watchListText: {
    fontSize: 15,
    color: 'white',
    paddingVertical: 15,
    marginLeft: 10,
  },
  watchListButton: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0277BD',
    borderColor: '#0277BD',
    borderRadius: 4,
    margin: 15,
    flex: 1,
  },
  watchListButtonContainer: {
    ...theme.bottomDivider,
    backgroundColor: theme.sectionBackground,
    borderRadius: 4,
  },
  rateThis: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 2,
    textTransform: 'uppercase'
  },
  vertical: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  total: {
    fontSize: 12,
    color: 'gray'
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
