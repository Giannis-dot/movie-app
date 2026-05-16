import Search from "./components/Search";
import { useState,useEffect } from "react";
import Spinner from "./components/Spinner";


const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
console.log('API KEY:', import.meta.env.VITE_TMDB_API_KEY);
console.log('KEY:', import.meta.env.VITE_TMDB_API_KEY?.slice(0, 20));


const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  },
};

const App = () => {
const [searchTerm, setSearchTerm]=useState('');
const [errorMessage, setErrorMessage]=useState('');
const [movieList, setMovieList]=useState([]);
const [isLoading, setIsLoading]=useState(false);



useEffect(() => {
  async function fetchMovies() {
    setIsLoading(true);
    setErrorMessage('');
  try {
    const endpoint=`${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
    const response = await fetch(endpoint, API_OPTIONS);
    if (!response.ok) {
      throw new Error(`Failed to fetch movies`);
    }
      const data = await response.json();

      if (data.Response==='False') {
        setErrorMessage(data.Error || 'Failed to fetch movies');
        setMovieList([]);
        return;
      }
      setMovieList(data.results);

      console.log(data.results);
  } catch (error) {
    setErrorMessage('An error occurred while fetching movies. Please try again later.');
  }
  finally {
    setIsLoading(false);
  }
}

  fetchMovies();
},[]);

  return (
    <main>
      <div className='pattern'/>

      <div className='wrapper'>
        <header>
          <img src="/assets/hero-img.png" alt="Hero Banner" />
          <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without The Hustle</h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>
          <section className="all-movies">
            <h2 className="mt-10">All Movies</h2>
            {isLoading ? (
              <Spinner />
            ) : errorMessage ? (
              <p className='text-red-500'>{errorMessage}</p>
            ) : (
              <ul>
                {movieList.map(movie => (
                  <p key={movie.id} className='text-white'>{movie.title}</p>
                ))}
              </ul>
            )}
          </section>
      </div>

      
    </main>
  );
}

export default App;