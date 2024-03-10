import React from 'react'
import ReactPlayer from 'react-player'
import { IContent } from '../../types/interfaces'

interface Props {
  randomContent: IContent;
}

const Billboard: React.FC<Props> = ({randomContent}) => {
  return (
    <div className='relative h-[56.35vw]'>
       <ReactPlayer
       className="pointer-events-none"
        url={randomContent.trailerSource}
        playing={true} 
        controls={false}
        height="100%"
        width="100%"
        loop={true} 
        muted={true} 
      /> 
    </div>
  )
}

export default Billboard