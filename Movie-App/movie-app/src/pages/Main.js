import React, { useEffect, useState  } from 'react'

const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?api_key=d6278b3dc3e6f8f8376a89851c3f8c8f'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=d6278b3dc3e6f8f8376a89851c3f8c8f&query='



const Main = () => {

  const [ movies, setMovies ] = useState([])

  useEffect(() => {
    getMovies(FEATURED_API)
}, [])

const getMovies = (API) => {
    fetch(API)
    .then(res => res.json())
    .then(res => setMovies(res.results))
}


  return (
    <div>
      {movies.map((movie) => <p>{movie.title}</p>)}
    </div>
  )
}

export default Main;