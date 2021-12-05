import React, { useState, useEffect } from "react";
import "./Post.css";
import { db } from "./firebase";
import Avatar from "@material-ui/core/Avatar";

const Post = (props) => {
  const { postId, username, caption, imageUrl } = props;
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }

    return () => {
      unsubscribe();
    };
  }, [postId]);

  const postComment = () => {};

  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="User2"
          src="/static/images/avatar/1.jpg"
        />
        <h3>{username}</h3>
      </div>
      <img className="post__image" src={imageUrl} alt="" />

      <h4 className="post__text">
        <strong>{username}:</strong>
        {caption}
      </h4>

      <form className="post__comment-box">
        <input
          className="post__input"
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          className="post__button"
          disabled={!comment}
          type="text"
          onClick={postComment}
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default Post;
