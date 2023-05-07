import { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "https://api.reddit.com/subreddits";

export default function getPosts() {
  const [posts, setPosts] = useState("");
  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = () => {
    axios
      .get(`${baseUrl}`)
      .then((response) => {
        const allPosts = response.data;
        setPosts(allPosts);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };
}
