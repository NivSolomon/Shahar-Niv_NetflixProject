import { BsSearch } from "react-icons/bs";

const SearchBoxInput = ({setSearchToggle, setInputText, inputText}) => {
  return (
    <>
    <BsSearch onClick={setSearchToggle} className='navbar__icon'/>
    <input className='searchBoxInput' type='text' placeholder="Search Titles..." value={inputText} onChange={setInputText}/>
    </>
  )
}

export default SearchBoxInput