import React, { useEffect, useState, useRef } from 'react';
import {View, StyleSheet, ScrollView, Text, SafeAreaView, ActivityIndicator} from 'react-native';
import {searchRequest, setFilmsBySearchId} from "../api";
import VerticalFilmsList from "../components/FilmsList/VerticalFilmsList";
import Loader from "../components/Loader";
import Input from "../components/Input";
import {from, fromEvent, of} from "rxjs";
import {debounceTime, distinctUntilChanged, switchMap, map, catchError} from "rxjs/operators";
import {ajax} from "rxjs/ajax";

const url = 'http://192.168.0.104:8000/api/search?name=';

const Search = ({ navigation }) => {
  const [isLoading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [films, setFilms] = useState([]);
  const refInput = useRef(null);

  useEffect(() => {
    console.log(search)
    const obs$ = ajax.getJSON(`${url}${search}`).pipe(
      debounceTime(1000),
      map(userResponse => userResponse),
      catchError(error => {
        console.log('error: ', error);
        return of(error);
      })
    )
    const stream$ = obs$.subscribe(v => setFilms(v))
  }, [search]);

  // if (isLoading ) return <Loader />;

  return (
    <SafeAreaView style={styles.container}>
      <Input placeholder="Eg: Star wars" onChangeText={setSearch} ref={refInput} style={styles.search}/>
      <VerticalFilmsList films={films} navigation={navigation} />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  search: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  container: {
    backgroundColor: '#191919',
    height: '100%',
  }
});

export default Search;
