import React from "react";
import { getPopularMovies } from "../api/tmdb-api"; // Importing function to fetch popular movies
import PageTemplate from '../components/templateMovieListPage'; // Importing template for movie list page
import { useQuery } from 'react-query'; // Importing useQuery hook from react-query library
import Spinner from '../components/spinner'; // Importing spinner component for loading state
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'; // Importing component to add movies to favorites

const PopularMoviesPage = (props) => {
  // Fetching popular movies data using useQuery hook
  const { data, error, isLoading, isError } = useQuery('popular', getPopularMovies);

  // Render spinner while fetching data
  if (isLoading) {
    return <Spinner />;
  }

  // Render error message if there's an error
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  // Extracting popular movies from fetched data
  const popularMovies = data.results;

  // Rendering the page template with popular movies and add to favorites action
  return (
    <PageTemplate
      title="Popular Movies"
      movies={popularMovies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />;
      }}
    />
  );
};

export default PopularMoviesPage;