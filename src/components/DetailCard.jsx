import React from 'react'
import { Link } from 'react-router-dom'


const DetailCard = ({ details }) => {
    console.log(details.genres)
  return (
      <>
          <h2>{details.title}</h2>
          <img src={details.image} alt={details.title} /> <br />
          <p><b>Genres:</b> {details.genres + ' '}</p>
          <h4>No. of Episodes: {details.episodes}</h4>
          <h5>Breakdown: </h5>
          <p>{details.synopsis}</p>
          <footer>Credit: <Link to={details.link}>MyAnimeList</Link></footer>
      </>
  )
}

export default DetailCard