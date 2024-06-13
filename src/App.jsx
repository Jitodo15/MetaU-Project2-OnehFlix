import React, { useState, useEffect } from 'react'
import './App.css'
import Header from '/src/Header'
import MovieList from '/src/MovieList'
import Footer from '/src/Footer'
import SearchBar from '/src/SearchBar'
import Modal from './Modal'
import SideBar from './SideBar'


const App = () => {
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [input, setInput] = useState('');
  const [search, setSearch] = useState(false);
  const [nowPlaying, setNowPlaying] = useState(true);
  const [url, setUrl] = useState(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNumber}`)
  const [displayModal, setDisplayModal] = useState(false);
  const [movieID, setMovieID] = useState();
  const [sortOption, setSortOption] = useState('');
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
      }
    };

    if(pageNumber === 1){
      fetch(  url, options)
      .then(response => response.json())
      .then(response => setMovies(response.results))
      .catch(err => console.error(err))
    } else{
      fetch(  url, options)
      .then(response => response.json())
      .then(response => setMovies(prevMovies => [...prevMovies, ...response.results]))
      .catch(err => console.error(err))

    }



  }, [pageNumber, url]);

  function handleNowPlaying(){
    setPageNumber(1)
    setUrl(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNumber}`)
    setNowPlaying(true);
    setSearch(false);
  }


  function handleLoadMore(){
    setPageNumber(prevPageNumber => prevPageNumber + 1);
    setUrl(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNumber+1}`)

  }

  function handleSearchOption(){
    setMovies([])
    setSearch(true);
    setNowPlaying(false);


  }

  function handleInputSearch(event){

    setInput(event.target.value);
    setUrl(`https://api.themoviedb.org/3/search/movie?query=${input}&include_adult=false&language=en-US&page=1`)
    setMovies([]);
    setSearch(true);
    setNowPlaying(false);
  }

  function handleCardClick(id){
     setDisplayModal(true);
     setMovieID(id);
  }

  function handleCloseModal(){
    setDisplayModal(false);
  }

  function handleSortOption(event){
    setSortOption(event.target.value);
    let sortedMovies;

    if(event.target.value === 'Popular Descending'){
      sortedMovies = [...movies].sort((a,b) => (b.popularity - a.popularity))
    } else if(event.target.value === 'Release Date Descending'){
      sortedMovies = [...movies].sort((a,b) => (new Date(b.release_date) - new Date(a.release_date)))
    } else if(event.target.value === 'Rating Descending'){
      sortedMovies = [...movies].sort((a,b) => (b.vote_average - a.vote_average))
    } else {
      sortedMovies = [...movies]
    }

    setMovies(sortedMovies);
  }

  function handleWatchedMovies(id){

    setWatchedMovies(prevIds => [...prevIds, id]);
    console.log(watchedMovies)
  }


  return (
    <div className="App">

        <Header input={input} handleSort={handleSortOption} handleNowPlaying={handleNowPlaying} handleSearchOption={handleSearchOption}/>



        <main>
        <SideBar watchedMovies={watchedMovies} data={movies}/>

          {nowPlaying ?
           <>
              {displayModal ? <Modal closeModal={handleCloseModal} id={movieID} data={movies} />: null}

              <MovieList data={movies} displayModal={handleCardClick} watched={handleWatchedMovies}/>
              <button className='load-button' onClick={handleLoadMore}>Load More</button>
           </> :
           <>

              {displayModal ? <Modal closeModal={handleCloseModal} id={movieID} data={movies} />: null}
              <SearchBar input={input} search={handleInputSearch}/>
              <MovieList data={movies} displayModal={handleCardClick} watched={handleWatchedMovies}/>
           </>
            }

        </main>

        <Footer/>
    </div>

  )

}

export default App
