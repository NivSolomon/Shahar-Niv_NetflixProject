import { CiCircleInfo } from "react-icons/ci";

const MoreInfoBtn = ({setisInfoBoxOpen}) => {
  return (
    <button className="flex items-center bg-gray-500 text-white rounded pt-2 pb-2 pr-3 pl-3 " onClick={()=> {setisInfoBoxOpen(true)}}><CiCircleInfo /> More Info</button>
)
}

export default MoreInfoBtn