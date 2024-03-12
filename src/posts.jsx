import { useEffect } from "react";
import { useState } from "react";
import "./post";
import Post from "./post";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      <h3>Posts :{posts.length}</h3>
      {posts.map((post) => (
        <Post post={post}></Post>
      ))}
    </div>
  );
}

/**
 * 1.create a state to store the data
 * 2. create useEffect with no dependencies
 * use fetch to load data
 */
