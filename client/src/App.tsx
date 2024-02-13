import { Route, Routes } from 'react-router-dom'
import SignIn from './pages/SignIn'
import Home from './pages/Home'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signin' element={<SignIn/>}/>
     </Routes>
    </>
  )
}

export default App
