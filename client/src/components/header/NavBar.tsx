import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { USER_SIGNIN, USER_SIGNOUT } from '../../actions'
import { BsSearch } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import SearchBoxInput from './SearchBoxInput';
import { useDispatch, useSelector } from 'react-redux';


const Navbar = () => {

    // const { state, dispatch: ctxDispatch } = useContext(Store);
    const [searchToggle, setSearchToggle] = useState(false)
    const [inputText, setInputText] = useState("")
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const searchToggleHandler = () => {
      setSearchToggle(!searchToggle);
    }
    const setInputTextHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
      setInputText(e.target.value)
      console.log(inputText)

    }

    useEffect(()=>{
      console.log(inputText);
      if(searchToggle === true){
      navigate(`/search?=${inputText}`)
      }
      console.log(inputText);
    
      if(inputText === ""){
        navigate("/");
      }

      
    },[inputText])

  return (
    <nav className="navbar nav-gradient z-10 fixed w-full">
      <div className="navbar__logo">
        <img
          className="navbar__logoImg"
          src="Netflix_logo.svg"
          alt="Netflix Logo"
          onClick={() => navigate('/')}
        />
      </div>
      <div className="navbar__links">
        <Link to="/" className="navbar__link">Home</Link>
        <Link to="/movies" className="navbar__link">Movies</Link>
        <Link to="/series" className="navbar__link">TV Shows</Link>
        <Link to="/my-list" className="navbar__link">My List</Link>
      </div>
      <div className='navbar__icons'>
         {
          searchToggle?  <div>
                         <SearchBoxInput setSearchToggle={searchToggleHandler} setInputText={setInputTextHandler} inputText={inputText}/>
                         </div>
                         : <BsSearch onClick={()=>{setSearchToggle(!searchToggle)}} className='navbar__icon'/>



         
                 

         }
         <IoMdNotificationsOutline className='navbar__icon'/>
         <Link to={'/signin'} className='signOutBtn'><button onClick={()=>dispatch({type: USER_SIGNOUT})}>Sign Out</button></Link>      
      </div>
    </nav>
        
  );
};

export default Navbar;
