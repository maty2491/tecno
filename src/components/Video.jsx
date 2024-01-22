import React from 'react'

const Video = ({src}) => {
  return (
    <video src={src} autoPlay loop controls={false} width="100%">
      Your browser does not support the video tag.
    </video>
  )
}

export default Video