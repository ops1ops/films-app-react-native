import axios from 'axios';
import withErrorLogs from "./utils/withErrorLogs";

const localHost = '172.20.10.8:8000';
const heroku = 'films-app-backend.herokuapp.com';
let baseApiUrl = `http://${localHost}/api`;

export const setAllFilms = (setFilms) => withErrorLogs(async () => {
  let response;
  try {
    response = await axios.get(`${baseApiUrl}/films`);
  } catch {
    baseApiUrl = `http://${heroku}/api`;
    response = await axios.get(`${baseApiUrl}/films`);
  } finally {
    setFilms(response.data.slice(5, 15))
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
    const {data} = await axios.post(`${baseApiUrl}/signin`, {credentials});
    console.log(data)
    setUser(data);
  } catch (e) {
    console.log(e)
  } finally {
    setLoading(false);
  }
};
