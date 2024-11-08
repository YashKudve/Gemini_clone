import React, { useState } from 'react'
import './Sidebar.css'
import assets from '../../assets/assets.js'

const Sidebar = () => {

    const[extended,setExtended] = useState(false)
  return (
    <div className='sidebar'>
      <div className="top">

        {/* <div className="menu-icon">
        <img src={assets.menu_icon} alt="menu-icon" />
        </div> */}
        <img onClick={()=>setExtended(prev=>!prev)} src={assets.menu_icon} className='menu' alt="menu-icon" />

        <div className="new-chat">
            <img src={assets.plus_icon} alt="plus_icon" />
            {extended?<p>New Chat</p>:null}
        </div>

        {extended? 
        <div className="recent">
        <p className="recent-title">
            Recent
        </p>
        <div className="recent-entry">
            <img src={assets.message_icon} alt="message_icon" />
            <p>What is react...</p>
        </div>
    </div>
        :null}
      </div>

    {/*  */}

      <div className="bottom">
        <div className="bottom-item recent-entry">
            <img src={assets.question_icon} alt="" />
            {extended?<p>Help</p>:null}
        </div>

        <div className="bottom-item recent-entry">
            <img src={assets.history_icon} alt="" />
            {extended?<p>Activity</p>:null}
        </div>

        <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt="" />
            {extended?<p>Setting</p>:null}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
