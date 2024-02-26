import axios from 'axios';
import { useContext } from 'react';
import { Store } from '../store';

const getAllContents = async(userInfo: any) => {
        const {data} = await axios.get('/api/v1/contents', {
                headers: { authorization: `Bearer ${userInfo.token}` }
        })
        console.log(data);
        return data;
}

export {getAllContents}