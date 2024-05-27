import moment from 'moment'
import React from 'react'
import "./Comment.scss"
const Comment = () => {
  return (
    <div className='comment p-2 d-flex'>
  <img
            src="https://avatarfiles.alphacoders.com/221/221856.jpg"
            alt=""
            className="rounder-circle mr-3"
          />
          <div className="comment__body">
            <p className='comment_header mb-1'>
                TRIS • {moment('2020-05-05').fromNow()}
            </p>
            <p className='mb-0'>
                Hay VAI lon
            </p>
          </div>
    </div>
  )
}

export default Comment