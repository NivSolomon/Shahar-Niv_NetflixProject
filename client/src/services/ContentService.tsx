import axios from 'axios';
import { useContext } from 'react';
import { Store } from '../store';

const getAllContents = async(userInfo: any) => {
        const {data} = await axios.get('/api/v1/contents', {
                headers: { authorization: `Bearer ${userInfo.token}` }
        })
        // console.log(data);
        return data;
}

const getByListNames = async(userInfo) => {
        try{
         const {data} = await axios.get('http://localhost:8080/api/v1/contents/listnames', {
          headers: { authorization: `Bearer ${userInfo.token}` }})
        //    console.log(data);
          // setContents(data);
          return data;
          
        } catch (err) {
          console.log(err);
        }
}

export {getAllContents, getByListNames}