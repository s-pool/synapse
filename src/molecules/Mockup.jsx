import '../assets/static/devices.min.css'

import React from 'react'

const Mockup = (props) => {
  return (
    <div className='device device-macbook-pro device-spacegray'>
      <div className='device-frame'>
        {props.children}
      </div>
      <div className='device-stripe'></div>
      <div className='device-header'></div>
      <div className='device-sensors'></div>
      <div className='device-btns'></div>
      <div className='device-power'></div>
    </div>
  )
}

export { Mockup }
