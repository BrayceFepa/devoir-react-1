import React from 'react'
import ImageSpeaker from './ImageSpeaker'
import Session from './Session'

function SpeakerUi({id, first, bio, last, company, twitterHandle, sessions }) {
  return (
      <div className='ui card' style={{ flexBasis: '300px', margin: "0 12px" }}>
      <ImageSpeaker id={id} />
       <div className='content'>
        <span className='header'>
          {first} {last}
        </span>

        <div className='description'>{bio}</div>
        <div className='ui divider'></div>
        <div className='meta'>
          <span>
            <i className='user icon'></i> {twitterHandle}
          </span>
        </div>

        <div className='ui divider'></div>
        <span>
          <i className='home icon'></i> {company}
          
        </span>
      </div>
      <Session sessions={sessions.length}/>
      </div>
  )
}

export default SpeakerUi