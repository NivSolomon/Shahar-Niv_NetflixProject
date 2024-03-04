import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Store } from '../../store';
import { USER_SIGNIN, USER_SIGNOUT } from '../../actions'
import { BsSearch } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import SearchBoxInput from './SearchBoxInput';



const Navbar = () => {

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const [searchToggle, setSearchToggle] = useState(false)
    const [inputText, setInputText] = useState("")
    
    const navigate = useNavigate();

    const searchToggleHangdler = () => {
      setSearchToggle(!searchToggle);
    }
    const setInputTextHandler = (e) => {
      setInputText(e.target.value)
      console.log(inputText)

    }

    useEffect(()=>{
      if(searchToggle === true)
      navigate(`/search?=${inputText}`);
    },[inputText])

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img
          className="navbar__logoImg"
          src="Netflix_logo.svg"
          alt="Netflix Logo"
        />
      </div>
      <div className="navbar__links">
        <Link to="/" className="navbar__link">Home</Link>
        <Link to="/movies" className="navbar__link">Movies</Link>
        <Link to="/tv-shows" className="navbar__link">TV Shows</Link>
        <Link to="/my-list" className="navbar__link">My List</Link>
      </div>
      <div className='navbar__icons'>
         {
          searchToggle?  <div>
                         <SearchBoxInput setSearchToggle={searchToggleHangdler} setInputText={setInputTextHandler} inputText={inputText}/>
                         </div>
                         : <BsSearch onClick={()=>{setSearchToggle(!searchToggle)}} className='navbar__icon'/>



         
                 

         }
         <IoMdNotificationsOutline className='navbar__icon'/>
         <Link to={'/signin'} className='navbar__icon'><button onClick={()=>ctxDispatch({type: USER_SIGNOUT})}>Sign Out</button></Link>      
      </div>
    </nav>
        
  );
};

export default Navbar;
