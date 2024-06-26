import { useLocation } from "react-router-dom";
import Navbar from "../header/NavBar";

const Header = () => {
  // const { state, dispatch: ctxDispatch } = useContext(Store);
  const location = useLocation().pathname;

  return (
    <header className="header">
      {localStorage.getItem("userInfo") === null ||
      location === "/watch" ? null : (
        <Navbar />
      )}
      {/* <Link to={'/'}>
        <img id="Netflix-logo" src="/Netflix_logo.svg"/>
      </Link>
      <Link to={'/signin'} onClick={()=>ctxDispatch({type: USER_SIGNOUT})}>
        signout
      </Link> */}
    </header>
  );
};

export default Header;
