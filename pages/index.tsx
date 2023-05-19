import { useState, useEffect } from "react";
import Main from "../components/Main";
import Header from "../components/Header";
import AsideBar from "../components/AsideBar";
import axios from "axios";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("Popular");
  const [reddits, setReddits] = useState([]);
  const baseUrl = "https://api.reddit.com";

  const getReddits = () => {
    axios
      .get(`${baseUrl}/r/${searchTerm}`)
      .then((response) => {
        const redditPosts = response.data;
        setReddits(redditPosts);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  useEffect(() => {
    getReddits();
  }, [searchTerm]);

  return (
    <>
      <div className="container mx-auto max-w-screen-xl flex flex-wrap flex-column justify-around">
        <Header setSearchTerm={setSearchTerm} />
        <AsideBar
          baseUrl={baseUrl}
          setSearchTerm={setSearchTerm}
          setReddits={setReddits}
        />
        <Main
          baseUrl={baseUrl}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          reddits={reddits}
          getReddits={getReddits}
        />
      </div>
    </>
  );
}
