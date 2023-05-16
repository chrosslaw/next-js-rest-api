import { useState, useEffect } from "react";
import Main from "../components/Main";
import Header from "../components/Header";
import AsideBar from "../components/AsideBar";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("Popular");
  const baseUrl = "https://api.reddit.com";

  return (
    <>
      <div className="max-w-screen-xl m-auto flex flex-wrap flex-row">
        <Header setSearchTerm={setSearchTerm} />
        <AsideBar baseUrl={baseUrl} />
        <Main
          baseUrl={baseUrl}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>
    </>
  );
}
