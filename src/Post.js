import React from "react";
import "./Post.css";

const Post = () => {
  return (
    <div className="post">
      <h3>Username</h3>

      <img
        className="post__image"
        src="https://images6.alphacoders.com/337/337780.jpg"
        alt=""
      />

      <h4 className="post__text">User1: this photo is amazing!</h4>
    </div>
  );
};

export default Post;
