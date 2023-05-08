import { useState, useEffect } from "react";
import Header from "../components/Header";
import AsideBar from "../components/AsideBar";
import axios from "axios";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const baseUrl = "https://api.reddit.com/";

  return (
    <div className="max-w-screen-2xl flex">
      <Header searchTerm={searchTerm} />
      <AsideBar baseUrl={baseUrl} />
    </div>
  );
}
