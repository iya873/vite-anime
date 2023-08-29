import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const AnimeCard = ({anime}) => {
  return (
      <>
          <Card className='bg-dark text-white mx-auto' style={{width: '18rem'}}>
              <Card.Img variant='top' src={anime.image} />
              <Card.Title>{anime.title}</Card.Title>
              <Card.Body>
                  <Card.Text>
                      Click 'Details' for more!
                  </Card.Text>
              </Card.Body>
                  <Link to={`/details/${anime._id}`}><Button>Details</Button></Link>
              
          </Card>
      </>
  )
}

export default AnimeCard