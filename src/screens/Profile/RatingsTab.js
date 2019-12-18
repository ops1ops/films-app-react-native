import React, { useContext } from 'react';
import { View } from 'react-native';
import VerticalFilmsList from "../../components/FilmsList/VerticalFilmsList";
import {ProfileContext} from "../../store";

const RatingsTab = () => {
  const { userInfo, navigation } = useContext(ProfileContext);

  return (
    <View>
      <VerticalFilmsList films={userInfo.ratedFilms} navigation={navigation} />
    </View>
  )
};

export default RatingsTab;