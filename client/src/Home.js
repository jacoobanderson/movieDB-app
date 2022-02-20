import React from 'react'
import { useEffect, useState } from 'react'
import { Movie } from './Movie.js'

const Home = () => {
    const [popular, setPopular] = useState([])

  useEffect(() => {
    fetchPopularMovies()
  }, [])
  
  const fetchPopularMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=50614ff1ef8cf5b1b07dd60c61a6694b&language=en-US&page=1')
    const movies = await data.json()
    console.log(movies)
    setPopular(movies.results)
  }
  return (
    <div>
        {popular.map((movie) => {
            return <Movie key={movie.id} movie={movie}/>
        })}
    </div>
  )
}

export default Home