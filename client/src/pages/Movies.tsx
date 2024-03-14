import React, { useEffect, useState } from 'react'
import { getAllMovies, getRandomContent } from '../services/ContentService'
import Carousel from '../components/homePage/Carousel'
import useUserInfo from '../hooks/useUserInfo'
import Billboard from '../components/homePage/Billboard'

const Movies = () => {

    const userInfo = useUserInfo();
    const [allMovies, setAllMovies] = useState([])
    const [randomContent, setRandomContent] = useState();

    useEffect(() => {
      allMovies && setRandomContent(getRandomContent(allMovies));
    }, [allMovies])

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
    <div>
         {randomContent&&<div className="z-10">
      <Billboard randomContent={randomContent}/>
     </div> } 

           <Carousel contents={allMovies} />
    </div>
 

  )
}

export default Movies