import ReactPlayer from "react-player";
import { IoCloseOutline } from "react-icons/io5";

const MoreInfo = ({ content, setIsOpen  }) => {
  return (
    <div>
      <button
        onClick={() => {
          setIsOpen(false);
        }}
      >
        {/* <IoCloseOutline className=" absolute border h-7 w-7 justify-self-end ml-96 rounded-md" /> */}
      </button>
      <div className="aspect-[16/9]">
        <ReactPlayer
          className="pointer-events-none"
          url={content.trailerSource}
          playing={true}
          controls={false}
          height="100%"
          width="100%"
          loop={true}
          muted={true}
        />
      </div>

      <div className="pl-4 pr-4">
        <h2 className="text-white font-bold text-xl">{content.title}</h2>
        <span className="text-green-500">{content.year}</span>
        <br />
        <h2 className="text-white text-lg">{content.duration}</h2>
        <p className="text-white">{content.description}</p>
      </div>
    </div>
  );
};

export default MoreInfo;
