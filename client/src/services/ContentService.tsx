import axios from 'axios';

interface UserInfo {
        id: string;
        username: string;
        token: string;
        // Add more properties as needed
      }

const getAllContents = async(userInfo: UserInfo) => {
        const {data} = await axios.get('/api/v1/contents', {
                headers: { authorization: `Bearer ${userInfo.token}` }
        })
        // console.log(data);
        return data;
}

const getByListNames = async(userInfo: UserInfo) => {
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