import React from 'react'

function ContactMe() {
  return (
    <div>
        <div> 
            <div className="chat chat-start m-2 my-4">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                <img
                    alt="Tailwind CSS chat bubble component"
                    src="src\assets\avatar.png" />
                </div>
            </div>
            <div className="chat-bubble">You think this page looks cool? Let's Make one for you!</div>
            </div>
            <div className="chat chat-start m-2 my-4">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                <img
                    alt="Tailwind CSS chat bubble component"
                    src="src\assets\avatar.png" />
                </div>
            </div>
            <div className="chat-bubble">Click on "Connect with me" or call +91 9811-613-361</div>
            </div>
            <div className="chat chat-start m-2 my-4">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                <img
                    alt="Tailwind CSS chat bubble component"
                    src="src\assets\avatar.png" />
                </div>
            </div>
            <div className="chat-bubble">Click below to view my Resume!</div>
            </div>
        </div>    
    </div>
  )
}

export default ContactMe
