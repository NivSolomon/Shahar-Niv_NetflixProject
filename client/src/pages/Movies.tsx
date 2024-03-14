import React, { useEffect, useState } from 'react'
import { getAllMovies } from '../services/ContentService'
import Carousel from '../components/homePage/Carousel'
import useUserInfo from '../hooks/useUserInfo'

const Movies = () => {

    const userInfo = useUserInfo();
    const [allMovies, setAllMovies] = useState([])

    useEffect(() => {
        console.log(userInfo);
        const fetchData = async () => {
             const movies = await getAllMovies(userInfo);
             setAllMovies(movies);
           
        }
        
        fetchData();
        console.log(allMovies)
        
    }, [])

  return (
    <div>Movies

           <Carousel contents={allMovies} />
    </div>
 

  )
}

export default Movies