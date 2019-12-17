import React, { useEffect, useState } from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Loader from '../../components/Loader';
import VerticalFilmsList from '../../components/FilmsList/VerticalFilmsList';
import { setCinematographWithRequest } from '../../api';

const CinematographWithType = ({ navigation }) => {
  const type = navigation.getParam('type', null);
  const [cinematograph, setCinematograph] = useState();

  useEffect(() => {
    setCinematographWithRequest(type, setCinematograph);
  }, [type]);

  if (!cinematograph) return <Loader />;

  return (
    <SafeAreaView style={styles.container}>
      <VerticalFilmsList films={cinematograph} navigation={navigation} />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191919',
    height: '100%',
  }
});

export default CinematographWithType;
