import React from 'react'

function ImageSpeaker({id}) {
  return (
    <div className='image'>
              <img alt='' src={`./images/speaker-${id}.jpg`} />
      </div>
  )
}

export default ImageSpeaker