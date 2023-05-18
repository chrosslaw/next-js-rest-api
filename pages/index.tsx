import { useState, useEffect } from "react";
import Main from "../components/Main";
import Header from "../components/Header";
import AsideBar from "../components/AsideBar";
import axios from "axios";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [reddits, setReddits] = useState("Popular");
  const baseUrl = "https://api.reddit.com";

  const getReddits = () => {
    axios
      .get(`${baseUrl}/r/${searchTerm || reddits}`)
      .then((response) => {
        const redditPosts = response.data;
        setReddits(redditPosts);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  useEffect(() => {
    getReddits();
  }, []);

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
          setReddits={setReddits}
        />
      </div>
    </>
  );
}
