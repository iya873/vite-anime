import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'
import DetailCard from '../components/DetailCard'

const Details = () => {
  const params = useParams()
  const [details, setDetails] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getDetails()
  },[])

  const getDetails = async () => {
    const options = {
			method: 'GET',
			url: `https://anime-db.p.rapidapi.com/anime/by-id/${params.id}`,
			headers: {
				'X-RapidAPI-Key':
					'58e89cca31msh32a964d414c4115p1d8973jsnecf2d4cdd377',
				'X-RapidAPI-Host': 'anime-db.p.rapidapi.com',
			},
		};

    try {
      setLoading(true)
			const response = await axios.request(options);
      console.log(response.data);
      setDetails(response.data);
      setLoading(false)
    } catch (error) {
      setLoading(false)
			console.error(error);
		}
  }

  return (
    <div>
      {loading ? <Loading /> : <DetailCard details={details} />}
    </div>
  )
}

export default Details