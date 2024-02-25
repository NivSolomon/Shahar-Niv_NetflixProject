import { useNavigate } from 'react-router-dom';
import useTokenVerification from '../hooks/useTokenVerification';
import Carousel from '../components/homePage/Carousel';

const Home = () => {

  const { loading, isValidToken } = useTokenVerification();
  const navigate = useNavigate();

  if (loading) {
    console.log(loading);
    return <div>Loading...</div>;
  }

  if (!isValidToken) {
    console.log('invalid token')
    navigate('/signin')
    return null;
  }


  return (
    <div>

      <div className='main-content'>Home</div>   
      <Carousel/>  

    </div>

  )
}

export default Home