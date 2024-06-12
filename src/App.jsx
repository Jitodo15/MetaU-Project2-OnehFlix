import React, { useState, useEffect } from 'react'
import './App.css'
import Header from '/src/Header'
import MovieList from '/src/MovieList'
import Footer from '/src/Footer'
import SearchBar from '/src/SearchBar'
import Modal from './Modal'


const App = () => {
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [input, setInput] = useState('');
  const [search, setSearch] = useState(false);
  const [nowPlaying, setNowPlaying] = useState(true);
  const [url, setUrl] = useState(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNumber}`)
  const [displayModal, setDisplayModal] = useState(false);
  const [movieID, setMovieID] = useState();

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
    // setMovies([]);
    setUrl(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNumber}`)
    setNowPlaying(true);
    setSearch(false);

  }


  function handleLoadMore(){

    // setMovies([])
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

  function handleSort(){

      setUrl(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNumber}`)
      setMovies(movies.sort((a, b) => a.popularity - b.popularity))




  }


  return (
    <div className="App">
        <Header input={input} sort={handleSort} handleNowPlaying={handleNowPlaying} handleSearchOption={handleSearchOption}/>

        <main>

          {nowPlaying ?
           <>
              {displayModal ? <Modal closeModal={handleCloseModal} id={movieID} data={movies} />: null}

              <MovieList data={movies} displayModal={handleCardClick}/>
              <button className='load-button' onClick={handleLoadMore}>Load More</button>
           </> :
           <>

              {displayModal ? <Modal closeModal={handleCloseModal} id={movieID} data={movies} />: null}
              <SearchBar input={input} search={handleInputSearch}/>
              <MovieList data={movies} displayModal={handleCardClick}/>
           </>
            }

        </main>

        <Footer/>
    </div>

  )

}

export default App
