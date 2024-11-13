import React from 'react'
import './Main.css'
import assets from '../../assets/assets'

const Main = () => {
  return (
    <div className="main">
        <div className="nav">
           <p>Gemini</p> 
           <img src={assets.user_icon} alt="User_icon" />
        </div>

        <div className="main-container">
            <div className="greet">
                <p><span>Hello User</span></p>
                <p>How can I help you today?</p>
            </div>

            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <img src={assets.compass_icon} alt="Compass_icon" />
                </div>

                <div className="card">
                    <p>Briefly summarize this concept: Urban Planning</p>
                    <img src={assets.bulb_icon} alt="Compass_icon" />
                </div>

                <div className="card">
                    <p>Brainstorm team bonding activities for our work retreat</p>
                    <img src={assets.message_icon} alt="Compass_icon" />
                </div>

                <div className="card">
                    <p>Improve the readability of the following code</p>
                    <img src={assets.compass_icon} alt="Compass_icon" />
                </div>
            </div>
        </div>
              
    </div>
  )
}

export default Main
