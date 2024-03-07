import { BsSearch } from "react-icons/bs";

interface SearchBoxInputProps {
  setSearchToggle: () => void;
  setInputText: (text: string) => void;
  inputText: string;
}

const SearchBoxInput: React.FC<SearchBoxInputProps> = ({ setSearchToggle, setInputText, inputText }) => {
  return (
    <>
    <BsSearch onClick={setSearchToggle} className='navbar__icon'/>
    <input className='searchBoxInput' type='text' placeholder="Search Titles..." value={inputText} onChange={setInputText}/>
    </>
  )
}

export default SearchBoxInput