import axios from 'axios';
import withErrorLogs from "./utils/withErrorLogs";

const localHost = 'localhost:8000';
const heroku = 'films-app-backend.herokuapp.com';
let baseApiUrl = `http://${localHost}/api`;

export const setAllCinematograph = (setFilms, setTvs) => withErrorLogs(async () => {
  let films;
  let tvs;
  try {
    films = await axios.get(`${baseApiUrl}/films`);
    tvs = await axios.get(`${baseApiUrl}/tvs`);
  } catch {
    baseApiUrl = `http://${heroku}/api`;
    films = await axios.get(`${baseApiUrl}/films`);
    tvs = await axios.get(`${baseApiUrl}/tvs`)
  } finally {
    setTvs(tvs.data.sort(() => 0.5 - Math.random()).slice(5, 15));
    setFilms(films.data.sort(() => 0.5 - Math.random()).slice(5, 15));
  }
});

export const setFilmById = (id, setFilm, setLoading) => withErrorLogs(async () => {
  const { data } = await axios.get(`${baseApiUrl}/film/${id}`);

  setFilm(data);
  setLoading(false);
});

export const setFilmsByGenreId = (id, setFilm) => withErrorLogs(async () => {
  const { data } = await axios.get(`${baseApiUrl}/genre/${id}`);

  setFilm(data)
});

export const setActorById = (id, setActor, setLoading) => withErrorLogs(async () => {
  const { data } = await axios.get(`${baseApiUrl}/actor/${id}`);

  setActor(data);
  setLoading(false);
});

export const signIn = async (setLoading, setUser, credentials) => {
  try {
    const { data } = await axios.post(`${baseApiUrl}/signin`, {credentials});
    setUser(data);
  } catch (e) {
  } finally {
    setLoading(false);
  }
};

export const setCinematographWithRequest = async (type, setCinematograph) => {
  const endpoint = type === 'TV' ? 'tvs' : 'films';
  const { data } = await axios.get(`${baseApiUrl}/${endpoint}`);

  setCinematograph(data);
};

export const rateCinematograph = async (id, rating, setLoading, setVisible, setUserRating) => {
  try {
    setLoading(true);
    const { data } = await axios.post(`${baseApiUrl}/film/${id}/rating`, { rating });
    console.log(data);
    if (data) {
      setUserRating(data);
    }
    setVisible(false);
  } catch (error) {
    console.log("ERROR", error);
  } finally {
    setLoading(false);
  }
};
