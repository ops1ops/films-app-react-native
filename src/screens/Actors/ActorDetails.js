import React, { useEffect, useState, useCallback } from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {setActorById} from "../../api";
import theme from "../../theme";
import FastImage from "react-native-fast-image";
import Section from "../../components/Section";
import HorizontalFilmsList from "../../components/FilmsList/HorizontalFilmsList";
import Loader from "../../components/Loader";
import formatActorByGender from "../../utils/formatActorByGender";
import HorizontalList from "../../components/HorizontalList";
import VerticalActorCard from "../../components/VerticalActorCard";
import ImagesList from "../../components/ImagesList";

const ActorDetails = ({ navigation }) => {
  const id = navigation.getParam('id', null);
  const [actor, setActor] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setActorById(id, setActor, setLoading);
  }, [id]);

  const renderImageItem = useCallback(({ item: { url} }) => (
    <FastImage source={{ uri: url.replace('original', 'w200') }} a=  {console.log(url.replace('original', 'w130'))}
               style={styles.galleryImage}/>
  ), []);

  if (!actor || isLoading) return <Loader />;

  const { name, posterUrl, images, biography, bornDate, films, gender } = actor;
  console.log(bornDate)
  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.actorName}>{ name }</Text>
        <Text style={styles.year}>{ formatActorByGender(gender) }</Text>
      </View>
      <View style={styles.posterContainer}>
        <FastImage source={{ uri: posterUrl }} style={styles.poster}/>
        <View style={styles.overviewContainer}>
          <Text style={styles.description} numberOfLines={6}>{ biography }</Text>
          <Text style={styles.description}>{ `Born: ${new Date(bornDate).toISOString()}` }</Text>
        </View>
      </View>
      <Section title="Filmography">
        <HorizontalFilmsList films={films} navigation={navigation} useAdditionalCharacter />
      </Section>
      <Section title="Images">
        <ImagesList data={images} />
      </Section>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
    paddingHorizontal: 15,
    paddingTop: 5,
    paddingBottom: 15,
    elevation: 5,
  },
  actorName: {
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
  },
  galleryImage: {
    borderRadius: 4,
    width: 130,
    height: 200,
    marginRight: 12,
  }
});

export default ActorDetails;
