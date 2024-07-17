import React from 'react'

function Avatar(props) {
  return (
    <div>
        <div className="avatar">
            <div className="w-16 ml-4 items-center rounded-full border-stone-950">
                <img src={props.imgPath} />
            </div>
        </div>
    </div>
  )
}

export default Avatar
