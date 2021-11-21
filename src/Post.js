import React from "react";
import "./Post.css";
import Avatar from "@mui/material/Avatar";

const Post = () => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="User2"
          src="/static/images/avatar/1.jpg"
        />
        <h3>Username</h3>
      </div>
      <img
        className="post__image"
        src="https://images6.alphacoders.com/337/337780.jpg"
        alt=""
      />

      <h4 className="post__text">
        <strong>User1:</strong>this photo is amazing!
      </h4>
    </div>
  );
};

export default Post;
