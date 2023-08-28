import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const AnimeCard = ({anime}) => {
  return (
      <>
          <Card className='bg-dark text-white' style={{width: '18rem'}}>
              <Card.Img src={anime.image} />
              <Card.ImgOverlay>
                  <Card.Title>{anime.title}</Card.Title>
                  <Link to={`/details/${anime._id}`}><Button>Details</Button></Link>
              </Card.ImgOverlay>
          </Card>
      </>
  )
}

export default AnimeCard