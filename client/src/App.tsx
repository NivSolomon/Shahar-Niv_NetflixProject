import { Route, Routes } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import SearchResults from './components/shared/SearchResults'
import { useContext, useEffect } from 'react'
import { getByListNames } from './services/ContentService'
import { Store } from './store'
import axios from 'axios'

function App() {

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo, contents } = state;

useEffect(() => {
  const fetchData = async () => {
        try {
          if (userInfo) {
            const {data} = await axios.get('http://localhost:8080/api/v1/contents/listnames', {
              headers: { authorization: `Bearer ${userInfo.token}` }})
            console.log("data from app.tsx:", data);
            await ctxDispatch({ type: "SET_CONTENTS", payload: data }); 
          }
        } catch (err) {
          console.log(err);
        }
  };
        fetchData();
    
}, [])

  return (
    <>
    <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/search' element={<SearchResults/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
