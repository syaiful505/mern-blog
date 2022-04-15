import React from "react";
import { RegisterBg } from '../../assets' ;
import './detailblog.scss';

const DetailBlog = () => {
  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={RegisterBg} alt="thumb" />
      <p className="blog-title">Title Blog</p>
      <p className="blog-author">Author - Date Post</p>
      <p className="blog-body">Ini adalah detail Blog Page</p>
    </div>
  )
};

export default DetailBlog;
