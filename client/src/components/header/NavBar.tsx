import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../../store';
import { USER_SIGNIN, USER_SIGNOUT } from '../../actions'

const Navbar = () => {

    const { state, dispatch: ctxDispatch } = useContext(Store);


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
      {/* Signout button */}
      <Link to={'/signin'}><button className="navbar__signoutBtn" onClick={()=>ctxDispatch({type: USER_SIGNOUT})}>Sign Out</button></Link>
    </nav>
  );
};

export default Navbar;
