import React from 'react'

function Session({details, name, user, home, twit}) {
  return (
      <div>
          <div className='content'>
        <span className='header'>
          {name}
        </span>

        <div className='description'>{details}</div>
        <div className='ui divider'></div>
        <div className='meta'>
          <span>
            <i className='user icon'></i> {user}
          </span>
        </div>

        <div className='ui divider'></div>
        <span>
          <i className='home icon'></i> {home}
          
        </span>
      </div>
      <div className='extra content'>
        <span>
          <i className='bullhorn icon'></i> {twit}
         
        </span>
      </div>
    </div>
  )
}

export default Session