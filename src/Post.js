import { Avatar } from '@mui/material'
import React, {forwardRef} from 'react'
import './Post.css'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import InputOption from './InputOption';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';


const Post = forwardRef(({name, description, message, photoUrl}, ref) => {
  return (
    <div className='post' ref={ref}>
        <div className="post__header">
            <Avatar src={photoUrl}>{name[0]}</Avatar>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>

        <div className="post__body">
            <p>{message}</p>
        </div>

        <div className="post__buttons">
            <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray"/>
            <InputOption Icon={ChatBubbleOutlineIcon} title="Comment" color="gray"/>
            <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray"/>
            <InputOption Icon={SendOutlinedIcon} title="Send" color="gray"/>
        </div>
    </div>
  )
})

export default Post