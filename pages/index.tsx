import { useState, useEffect } from "react";
import Main from "../components/Main";
import Header from "../components/Header";
import AsideBar from "../components/AsideBar";
import axios from "axios";
import ScrollToTopButton from "../components/ScrollToTopButton";

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
      <div className="container mx-auto max-w-screen-xl flex flex-wrap justify-around relative">
        <Header setSearchTerm={setSearchTerm} />
        <AsideBar
          baseUrl={baseUrl}
          setSearchTerm={setSearchTerm}
          setReddits={setReddits}
        />
        <Main
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          reddits={reddits}
          getReddits={getReddits}
          setReddits={setReddits}
        />
        <ScrollToTopButton />
      </div>
    </>
  );
}
