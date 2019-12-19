import axios from 'axios';
import withErrorLogs from "./utils/withErrorLogs";
import reformattedRatedBy from "./utils/reformattedRatedBy";

const localHost = '192.168.0.104:8000';
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

export const setFilmById = (id, user, setFilm, setLoading, setTotalInfo, setUserRating, setInWatchlist) => withErrorLogs(async () => {
  const userId = user && user.id;
  const { data } = await axios.get(`${baseApiUrl}/film/${id}?userId=${userId}`);
  const watchlist = data.data.toWatchedBy.find(({ id }) => id === userId);
  setFilm(data);
  setTotalInfo(data.ratingInfo);
  setUserRating(reformattedRatedBy(data.data.ratedBy, user));
  setInWatchlist(!!watchlist);
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

export const rateCinematograph = async (id, rating, setLoading, setVisible, setUserRating, setTotalInfo) => {
  try {
    setLoading(true);
    const { data: { rating: confirmedRating, ratingInfo } } = await axios.post(`${baseApiUrl}/film/${id}/rating`, { rating });

    if (confirmedRating) {
      setUserRating(confirmedRating);
      setTotalInfo(ratingInfo);
    }
    setVisible(false);
  } catch (error) {
    console.log("ERROR", error);
  } finally {
    setLoading(false);
  }
};

export const setUserInfoFromRequest = async (id, setUserInfo, setLoading) => {
  const { data } = await axios.get(`${baseApiUrl}/user/${id}`);

  console.log(data);
  setUserInfo(data);
  setLoading(false);
};

export const addToWatchList = async (id) => {
  await axios.put(`${baseApiUrl}/film/${id}/watchlist`);
};

export const deleteFromWatchList = async (id) => {
  await axios.delete(`${baseApiUrl}/film/${id}/watchlist`);
};

export const searchRequest = async (query, setLoading, setFilms) => {
  const { data } = await axios.get(`${baseApiUrl}/search?name=${query}`);
  console.log(data)
  setFilms(data);
  setLoading(false);
};
