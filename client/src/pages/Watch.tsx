import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getContentById } from "../services/ContentService";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";
import { IoArrowBack } from "react-icons/io5";

const Watch = () => {
  const { search } = useLocation();
  const contentIdQuery = new URLSearchParams(search);
  const contentId = contentIdQuery.toString().substring(1);
  const userInfo = useSelector((state) => state.userAuth.userInfo);

  const [content, setContent] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchContent = async () => {
      setContent(await getContentById(userInfo, contentId));
    };
    fetchContent();
  }, [contentId]);

  return (
    <div className="watchContainer">
      <button onClick={() => navigate(-1)}>
        <IoArrowBack className="backBtn" />
      </button>
      {content && (
        <div className="videoContainer">
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
