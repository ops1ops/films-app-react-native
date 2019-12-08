import axios from 'axios';
import withErrorLogs from "./utils/withErrorLogs";

const localHost = '192.168.0.104:8000';
const heroku = 'films-app-backend.herokuapp.com';
const baseApiUrl = `http://${heroku}/api`;

export const setAllFilms = (setFilms) => withErrorLogs(async () => {
  const { data } = await axios.get(`${baseApiUrl}/films`);

  setFilms(data)
});
