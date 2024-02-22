import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Store } from '../../store';
import { USER_SIGNIN, USER_SIGNOUT } from '../../actions'
import Navbar from '../header/NavBar';

const Header = () => {

  const { state, dispatch: ctxDispatch } = useContext(Store);

  return (
    <header className='header'>
      {localStorage.getItem('userInfo') === null?
      null:
      <Navbar/>
       }
      {/* <Link to={'/'}>
        <img id="Netflix-logo" src="/Netflix_logo.svg"/>
      </Link>
      <Link to={'/signin'} onClick={()=>ctxDispatch({type: USER_SIGNOUT})}>
        signout
      </Link> */}
    </header>
  )
}

export default Header