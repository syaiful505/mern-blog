import React from 'react';
import { RegisterBg } from '../../../assets';
import './blogitem.scss'

const BlogItem = () => {
  return (
    <div className='blog-item'>
        <img className='image-thumb' src={RegisterBg} alt="post" />
        <div className='content-detail'>
            <p className='title'>Title Blog</p>
            <p className='author'>Author - Date post</p>
            <p className='body'>lorem ipsum is blablablablabla</p>
        </div>
    </div>
  )
}

export default BlogItem