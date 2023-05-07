import { useState, useEffect } from "react";
import PostList from "../components/PostList";
import axios from "axios";

export default function Home() {
  const [subreddits, setSubreddits] = useState("");
  const baseUrl = "https://api.reddit.com/";

  useEffect(() => {
    getSubreddits();
  }, []);

  const getSubreddits = () => {
    axios
      .get(`${baseUrl}subreddits`)
      .then((response) => {
        const allSubs = response.data;
        setSubreddits(allSubs);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };
  return (
    <div className="max-w-screen-xl m-auto flex">
      <ul className="w-40">
        <PostList subreddits={subreddits} />
      </ul>
    </div>
  );
}
