import React from 'react'
import ImageSpeaker from './ImageSpeaker'
import Session from './Session'

function SpeakerUi({img, name, details, home, user, twit}) {
  return (
      <div className='ui card' style={{ flexBasis: '300px', margin: "0 12px" }}>
      <ImageSpeaker img={img}/>
      <Session name={name} details={details} home={home} user={user} twit={twit} />
      </div>
  )
}

export default SpeakerUi