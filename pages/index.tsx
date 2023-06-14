import { useState, useEffect } from "react";
import Main from "../components/Main";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AsideBar from "../components/subs/AsideBar";
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
      <div className="container mx-auto max-w-screen-xl flex flex-wrap justify-around ">
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
          setReddits={setReddits}
          baseUrl={baseUrl}
        />
        <Footer />
      </div>
    </>
  );
}
