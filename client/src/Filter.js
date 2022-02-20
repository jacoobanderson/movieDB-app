import React from 'react'
import { useEffect } from 'react'
import { Button, Container } from 'react-bootstrap'

export const Filter = ({setActiveGenre, activeGenre, setFiltered, popular}) => {
  
  useEffect(() => {
    if (activeGenre === 0) {
        setFiltered(popular)
        return
    }
    const filtered = popular.filter((movie) => movie.genre_ids.includes(activeGenre))
    setFiltered(filtered)
  }, [activeGenre])
  return (
    <Container style={{display: 'flex', justifyContent: 'center'}} className="mt-10">
        <Button style={{width: '6rem'}} className="m-2" onClick={() => setActiveGenre(0)}>All</Button>
        <Button style={{width: '6rem'}} className="m-2"onClick={() => setActiveGenre(28)}>Action</Button>
        <Button style={{width: '6rem'}} className="m-2"onClick={() => setActiveGenre(35)}>Comedy</Button>
        <Button style={{width: '6rem'}} className="m-2">Drama</Button>
    </Container>
  )
}

export default Filter