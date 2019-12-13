import axios from 'axios';
import withErrorLogs from "./utils/withErrorLogs";

const localHost = 'localhost:8000';
const heroku = 'films-app-backend.herokuapp.com';
let baseApiUrl = `http://${localHost}/api`;

export const setAllFilms = (setFilms) => withErrorLogs(async () => {
  let response;
  try {
    response = await axios.get(`${baseApiUrl}/films`);
  } catch (e) {
    baseApiUrl = `http://${heroku}/api`;
    response = await axios.get(`${baseApiUrl}/films`);
  } finally {
    setFilms(response.data)
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
