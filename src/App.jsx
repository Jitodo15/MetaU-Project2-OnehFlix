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
  const [filterOption, setFilterOption] = useState('');
  const [favMovies, setFavMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [displaySidebar, setDisplaySidebar] = useState(true);

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
    setWatchedMovies([]);
    setDisplaySidebar(true);
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
    setDisplaySidebar(false)
    setSearch(true);
    setNowPlaying(false);
  }

  function handleInputSearch(searchValue){
    setMovies([]);
    setSearch(true);
    setNowPlaying(false);
    setUrl(`https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=1`)
  }

  function handleSearchBarEmpty(){
    setMovies([]);
    setUrl(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`)
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
    setUrl(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=${sortOption}`)
  }

  function handleFilterOption(event){
    setFilterOption(event.target.value);
    setUrl(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&without_genres=${filterOption}`)

  }


  function handleFavMovies(id){
    if(favMovies.includes(id)){
      setFavMovies(prevIds => prevIds.filter(prevId => prevId !== id));
    } else{
      setFavMovies(prevIds => [...prevIds, id]);
    }
  }



  function handleWatchedMovies(id){
    if(watchedMovies.includes(id)){
      setWatchedMovies(prevIds => prevIds.filter(prevId => prevId !== id));
    } else{
      setWatchedMovies(prevIds => [...prevIds, id]);
    }
  }

  function handleDisplaySideBar(){
    setDisplaySidebar(!displaySidebar);
  }



  return (
    <div className="App">

        <Header
          handleSideBar={handleDisplaySideBar}
          input={input} handleSort={handleSortOption}
          handleFilter={handleFilterOption}
          handleNowPlaying={handleNowPlaying}
          handleSearchOption={handleSearchOption}
        />
        <main>
            {displaySidebar ? <SideBar watchedMovies={watchedMovies} favMovies={favMovies} data={movies}/> : null}
            {nowPlaying ?
            <>
                {displayModal ? <Modal closeModal={handleCloseModal} id={movieID} data={movies} />: null}

                <MovieList data={movies} displayModal={handleCardClick} watched={handleWatchedMovies} favorites={handleFavMovies}/>
                <button className='load-button' onClick={handleLoadMore}>Load More</button>
            </> :
            <>
                {displayModal ? <Modal closeModal={handleCloseModal} id={movieID} data={movies} />: null}
                <SearchBar input={input} search={handleInputSearch} searchBarEmpty={handleSearchBarEmpty}/>
                <MovieList data={movies} displayModal={handleCardClick} watched={handleWatchedMovies} favorites={handleFavMovies}/>
            </>
            }
        </main>
        <Footer/>
    </div>
  )
}

export default App
