import React, { useEffect, useState } from 'react'
import { getAllContents, getAllSeries, getRandomContent } from '../services/ContentService'
import Carousel from '../components/homePage/Carousel'
import useUserInfo from '../hooks/useUserInfo'
import Billboard from '../components/homePage/Billboard'


const Series = () => {

    const userInfo = useUserInfo();
    const [allSeries, setAllSeries] = useState([])
    const [randomContent, setRandomContent] = useState();

    useEffect(() => {
      allSeries && setRandomContent(getRandomContent(allSeries));
    }, [allSeries])


    useEffect(() => {
        const fetchData = async () => {
             const series = await getAllSeries(userInfo);
             setAllSeries(series);
        }
        
        fetchData();
        
    }, [])

  return (
    <div>
               {randomContent&&<div className="z-10">
      <Billboard randomContent={randomContent}/>
     </div> } 


           <Carousel contents={allSeries} />
    </div>
 

  )
}
export default Series