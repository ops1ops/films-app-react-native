import React from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import GenresButton from './GenresButton';

const HorizontalGenresList = ({ genres, navigation }) => {
  const renderItem = ({ item: { name, id } }) => (
    <GenresButton name={name} onPress={() => navigation.navigate('Genres', { id, title: name })}/>
  );
  const keyExtractor = (({ id }) => id);

  return (
    <SafeAreaView style={{ height: 36 }}>
      <FlatList
        horizontal
        data={genres}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  )
};

export default HorizontalGenresList;
