import { useEffect, useState } from "react";
import axios from "axios";
import Posts from "./posts/Posts";

export default function Main({ baseUrl, searchTerm, setSearchTerm }) {
  const [reddits, setReddits] = useState("");

  useEffect(() => {
    getReddits();
  }, []);

  const getReddits = () => {
    axios
      .get(`${baseUrl}/r/${searchTerm}`)
      .then((response) => {
        const redditPosts = response.data;
        setReddits(redditPosts);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  return (
    <div className="w-9/12 min-w-min flex flex-col ">
      <p className="bg-black h-10 w-full font-black font-mono mt-1 ml-1 text-sm md:text-lg lg:text-xl text-white rounded-lg shadow-md flex flex-col text-center justify-center">
        {searchTerm} Reddit Posts
      </p>
      <Posts
        searchTerm={searchTerm}
        reddits={reddits}
        setSearchTerm={setSearchTerm}
      />
    </div>
  );
}
