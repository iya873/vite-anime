import { useState, useEffect } from 'react'
import {Navigate, Routes, Route} from 'react-router-dom'
import axios from 'axios'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Search from './pages/Search'
import Favorites from './pages/Favorites'
import Loading from './components/Loading'
import './App.css'
import Details from './pages/Details'

function App() {

  const [topAnime, getTopAnime] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getAnime()
  }, [])
  
  const getAnime = async () => {
    const options = {
			method: 'GET',
			url: 'https://anime-db.p.rapidapi.com/anime',
			params: {
				page: '1',
				size: '10',
				sortBy: 'ranking',
				sortOrder: 'asc',
			},
			headers: {
				'X-RapidAPI-Key':
					'58e89cca31msh32a964d414c4115p1d8973jsnecf2d4cdd377',
				'X-RapidAPI-Host': 'anime-db.p.rapidapi.com',
			},
		};

    try {
      setLoading(true)
      const response = await axios.request(options);
      const animeData = response.data.data
      console.log(animeData);
      getTopAnime(animeData)
      setLoading(false)
    } catch (error) {
      setLoading(false)
			console.error(error);
		}
  }
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={loading ? <Loading /> :<Home topAnime={topAnime} />} />
        <Route path='/search' element={<Search />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path={`/details/:id`} element={<Details />} />
        <Route path='/*' element={<Navigate to='/'/>}/>git 
     </Routes>
    </>
  )
}

export default App
