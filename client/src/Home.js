import React from 'react'
import { useEffect, useState } from 'react'
import { Movie } from './Movie.js'
import { Filter } from './Filter.js'
import { motion } from 'framer-motion'
import { Container } from 'react-bootstrap'

const Home = () => {
    const [popular, setPopular] = useState([])
    const [filtered, setFiltered] = useState([])
    const [activeGenre, setActiveGenre] = useState(0)

  useEffect(() => {
    fetchPopularMovies()
  }, [])
  
  const fetchPopularMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=50614ff1ef8cf5b1b07dd60c61a6694b&language=en-US&page=1')
    const movies = await data.json()
    console.log(movies)
    setPopular(movies.results)
    setFiltered(movies.results)
  }
  return (
    <Container className="container">
        <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre}/>
        <motion.div layout className="popular-movies">
            {filtered.map((movie) => {
                return <Movie key={movie.id} movie={movie}/>
            })}
        </motion.div>
    </Container>
  )
}

export default Home