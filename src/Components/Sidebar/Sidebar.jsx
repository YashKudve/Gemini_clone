import React, { useContext, useState } from 'react'
import './Sidebar.css'
import assets from '../../assets/assets.js'
import { Context } from '../../Context/Context.jsx'

const Sidebar = () => {

    const[extended,setExtended] = useState(false)
    const {onSent, prevPrompts, setRecentPrompt , newChat} = useContext(Context)

    const loadPrompt = async (prompt) =>{
      setRecentPrompt(prompt)
      await onSent(prompt)
    }

  return (
    <div className='sidebar'>
      <div className="top">

        {/* <div className="menu-icon">
        <img src={assets.menu_icon} alt="menu-icon" />
        </div> */}
        <img onClick={()=>setExtended(prev=>!prev)} src={assets.menu_icon} className='menu' alt="menu-icon" />

        <div onClick={()=>newChat()} className="new-chat">
            <img src={assets.plus_icon} alt="plus_icon" />
            {extended?<p>New Chat</p>:null}
        </div>

        {extended? 
        <div className="recent">
        <p className="recent-title">
            Recent
        </p>

          {prevPrompts.map((item, index)=>{
            return (
              <div className="recent-entry" onClick={()=>loadPrompt(item)}>
            <img src={assets.message_icon} alt="message_icon" />
            <p>{item.charAt(0).toUpperCase() + item.slice(1, 18)}{item.length > 18 ? '...' : ''}</p>
          
        </div>
            )
          })}

        
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
