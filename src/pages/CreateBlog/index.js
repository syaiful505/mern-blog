import React from "react";
import { Button, Gap, Input, Link, TextArea, Upload } from "../../components";
import "./CreateBlog.scss";
import {useHistory} from 'react-router-dom';

const CreateBlog = () => {
  const history = useHistory();
  return (
    <div className="blog-post">
      <Link title="Back To Blog" onClick={() => history.push('/')} />
      <p className="title">Create new Blog</p>
      <Input title="Post Title" />
      <Upload />
      <TextArea />
      <Gap height={20} />
      <div className="button-action">
        <Button title="Save" />
      </div>
      <Gap height={30} />
    </div>
  );
};

export default CreateBlog;
