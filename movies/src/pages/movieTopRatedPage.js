import React from "react";
import { getMoviesTopRated} from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

const MoviesTopRatedPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('top_rated', getMoviesTopRated)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movietoprated = data.results;

  return (
    <PageTemplate
      title="Top Rated Movies"
      movies={movietoprated}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
);
};
export default MoviesTopRatedPage;