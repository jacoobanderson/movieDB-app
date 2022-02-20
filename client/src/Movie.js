import React from 'react'
import { Card } from 'react-bootstrap'
import { motion } from 'framer-motion'

export const Movie = ({ movie }) => {
  return (
    <motion.div animate={{ opacity: 1}} initial={{ opacity: 0 }} className="card" layout>
    <Card style={{width: '15rem'}} bg="light" className="card" >
        <Card.Header style={{fontSize: '0.8rem'}}>{movie.title}</Card.Header>
        <Card.Img src={'https://image.tmdb.org/t/p/w400/' + movie.backdrop_path} alt="" className="img"/>
    </Card>
    </motion.div>
  )
}

export default Movie