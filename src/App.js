import React, { useState } from "react";
import "./App.css";
import Post from "./Post";

const App = () => {
  const [posts, setPosts] = useState([
    {
      username: "User1",
      caption: "This photo is amazing",
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-photos-of-cats-kissing-1593184779.jpg?crop=0.7108081791626095xw:1xh;center,top&resize=768:*",
    },
    {
      username: "User2",
      caption: "This photo is awesome",
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-photos-of-cats-curled-up-sleeping-1593184773.jpg?crop=0.9137115839243499xw:1xh;center,top&resize=768:*",
    },
    {
      username: "User3",
      caption: "This photo is fantastic",
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-photos-of-cats-in-grass-1593184777.jpg?crop=0.6655808903365906xw:1xh;center,top&resize=768:*",
    },
  ]);

  return (
    <div className="app">
      <div className="app__header">
        <h3>PhotoApp</h3>
      </div>
      <h1>Hello PhotoApp</h1>

      {posts.map((post) => (
        <Post
          username={post.username}
          cation={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
};

export default App;
