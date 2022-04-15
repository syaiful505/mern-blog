import React from 'react';
import { RegisterBg } from '../../../assets';
import { Button, Gap } from '../../atoms';
import './blogitem.scss'
import { useHistory } from 'react-router-dom';

const BlogItem = () => {
  const history = useHistory();
  return (
    <div className='blog-item'>
        <img className='image-thumb' src={RegisterBg} alt="post" />
        <div className='content-detail'>
            <p className='title'>Title Blog</p>
            <p className='author'>Author - Date post</p>
            <p className='body'>lorem ipsum is blablablablabla</p>
            <Gap height={20}/>
            <Button title="View More Blog" onClick={() => history.push('/detail-blog')} />
        </div>
    </div>
  )
}

export default BlogItem