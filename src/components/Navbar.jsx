import React from 'react'
import Avatar from '../ui/Avatar'
import Icons from '../ui/Icons'
import ThemeButton from '../ui/ThemeButton'
function Navbar(props) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-zinc-800 bg-opacity-60 backdrop-blur-md shadow-lg rounded-b-lg mb-8 ">
    <div className="navbar rounded-box">
      <div className="flex-1 flex items-center">
        <Avatar imgPath='/assets/avatar.png'/>
        <a className="font-semibold font-mono ml-4 text-4xl text-white">{props.name}</a>
      </div>
      <div className="flex-none px-4 flex items-center">               
        {/* <ThemeButton />  will see later */}
        <Icons />
      </div>
    </div>
  </div>
  )
}

export default Navbar
