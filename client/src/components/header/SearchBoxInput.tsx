import { BsSearch } from "react-icons/bs";

interface SearchBoxInputProps {
  setSearchToggle: () => void;
  setInputText: (text: string) => void;
  inputText: string;
}

const SearchBoxInput: React.FC<SearchBoxInputProps> = ({ setSearchToggle, setInputText, inputText }) => {
  return (
    <>
<div>
{/* <BsSearch onClick={setSearchToggle} className='navbar_icon  fixed ml-0.7 mt-0.6 m-1'/>
  <input className='searchBoxInput' type='text' placeholder="        Search Titles..." value={inputText} onChange={setInputText}/> */}

  <form>   
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 ">
            {/* <svg onClick={setSearchToggle}  className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg> */}
            <BsSearch onClick={setSearchToggle} className='navbar_icon  fixed ml-0.7 mt-0.6 m-1'/>

        </div>

        <input type="search" id="search" placeholder="Search Titles..." value={inputText} onChange={setInputText} className='searchBoxInput block w-full h-11 p-4 ps-10 text-sm text-black-900 border border-black-300 rounded-lg bg-black focus:ring-black-500 focus:border-black-500 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-white dark:focus:ring-black-500 dark:focus:border-black-500'/>

        {/* <input type="search" id="search"  placeholder="Search" required /> */}
    </div>
</form>

</div>
    
    </>
  )
}

export default SearchBoxInput