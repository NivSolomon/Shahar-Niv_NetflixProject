import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getContentById } from "../services/ContentService";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";
import { IoArrowBack } from "react-icons/io5";
// import { BiArrowBack } from "react-icons/bi";


const Watch = () => {
  const { search } = useLocation();
  const contentIdQuery = new URLSearchParams(search);
  const contentId = contentIdQuery.toString().substring(1);
  const userInfo = useSelector((state) => state.userAuth.userInfo);

  const [content, setContent] = useState();
  // const [backArrowOpacity, setBackArrowOpacity] = useState(0);
  // const [animationDuration, setAnimationDuration] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchContent = async () => {
      setContent(await getContentById(userInfo, contentId));
    };
    fetchContent();
  }, [contentId]);

  // const handleMouseEnter = () => {
  //   setBackArrowOpacity(100);
  //   setAnimationDuration(0);
  // };

  // const handleMouseLeave = () => {
  //   setBackArrowOpacity(0);
  //   setAnimationDuration(0);
  // };

  return (
    <div className="relative">
      <button onClick={() => navigate(-1)}>
        <IoArrowBack className="backBtn" />
        {/* <BiArrowBack
        size={25}
        onClick={() => navigate(-1)}
        className={`absolute left-0 top-0 cursor-pointer text-white my-20 mx-6 transition duration-0 ease-in-out opacity-${backArrowOpacity}`}
      /> */}
      </button>
      {content && (
        <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
        <ReactPlayer 
            url={content.contentSource}
            playing={true}
            controls={true}
            height="100%"
            width="100%"
            loop={true}
          />
        </div>
      )}
    </div>
  );
};
export default Watch;
