import { Route, Routes } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import SearchResults from './components/shared/SearchResults'

function App() {

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
