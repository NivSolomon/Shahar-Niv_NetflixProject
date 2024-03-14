import React, { useEffect, useState } from 'react'
import { getAllSeries } from '../services/ContentService'
import Carousel from '../components/homePage/Carousel'
import useUserInfo from '../hooks/useUserInfo'


const Series = () => {

    const userInfo = useUserInfo();
    const [allSeries, setAllSeries] = useState([])

    useEffect(() => {
        const fetchData = async () => {
             const series = await getAllSeries(userInfo);
             setAllSeries(series);
        }
        
        fetchData();
        
    }, [])

  return (
    <div>Movies

           <Carousel contents={allSeries} />
    </div>
 

  )
}
export default Series