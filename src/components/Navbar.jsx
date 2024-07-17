import React from 'react'
import Avatar from '../ui/Avatar'
import Icons from '../ui/Icons'
function Navbar(props) {
  return (
    <div>
      <div className="navbar bg-zinc-800 rounded-box mb-8">
        <div className="flex-1">
            <Avatar imgPath='src\assets\avatar.png'/>
            <a className="font-semibold font-mono ml-4 text-4xl text-white">{props.name}</a>
        </div>
            <div className="flex-none">
                <Icons/>
            </div>
        </div>
    </div>
  )
}

export default Navbar
