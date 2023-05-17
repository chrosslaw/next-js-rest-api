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
    <div className="w-full md:w-9/12 flex flex-col mt-5 gap-1 relative place-content-center">
      <p className="bg-gradient-to-r from-gray-600 to-gray-400 font-black font-mono text-xl text-white rounded-lg shadow-md flex flex-col text-center place-content-center">
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
