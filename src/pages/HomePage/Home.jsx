import React from 'react'
import AnimeCard from '../../components/AnimeCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
const Home = ({topAnime}) => {
    return (
      <>
        <h1>Home</h1>
        <Container fluid>
          <Row className='justify-content-md-center'>
             {topAnime.map((anime, i) => {
                return <AnimeCard anime={anime} key={i} />
            })}
          </Row>
        </Container>
           
      </>
    
  )
}

export default Home