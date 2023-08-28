import React from 'react'
import AnimeCard from '../components/AnimeCard'
const Home = ({topAnime}) => {
    return (
      <>
        <h1>Home</h1>
            {topAnime.map((anime, i) => {
                return <AnimeCard anime={anime} key={i} />
            })}
      </>
    
  )
}

export default Home