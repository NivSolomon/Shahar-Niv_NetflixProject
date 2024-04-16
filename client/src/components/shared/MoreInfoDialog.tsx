import { Dialog, DialogContent } from "@material-ui/core";
import ReactPlayer from "react-player";
import { IoCloseOutline } from "react-icons/io5";
import MoreInfo from "./MoreInfo";

const MoreInfoDialog = ({ isOpen, onClose, content }) => {
  return (
    <Dialog className="w-screen h-screen"open={isOpen} onClose={() => setIsOpen(false)}>
      <DialogContent className="bg-black relative border-[0.5px] rounded">
        <button onClick={onClose} className="absolute top-2 right-2">
          <IoCloseOutline className="text-white border h-7 w-7 rounded-md" />
        </button>
        <MoreInfo onClose={onClose} content={content} />
      </DialogContent>
    </Dialog>
  );
};

export default MoreInfoDialog;
