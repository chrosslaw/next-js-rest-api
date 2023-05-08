import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
import AsideBar from "../components/AsideBar";
import axios from "axios";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const baseUrl = "https://api.reddit.com/";

  return (
    <div className="max-w-screen-xl m-auto flex flex-col">
      <Header setSearchTerm={setSearchTerm} />
      <AsideBar baseUrl={baseUrl} />
    </div>
  );
}
