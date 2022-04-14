import React from "react";
import { Button, Gap, Input, TextArea, Upload } from "../../components";
import "./CreateBlog.scss";

const CreateBlog = () => {
  return (
    <div className="blog-post">
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
