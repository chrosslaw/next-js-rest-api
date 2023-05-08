import { useState, useEffect } from "react";
import SubList from "./SubList";
import axios from "axios";

export default function AsideBar({ baseUrl }) {
  const [subreddits, setSubreddits] = useState("");
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
    <aside className="w-1/6 min-w-min">
      <p className="bg-white h-10 font-bold font-mono text-lg rounded-lg shadow-md m-1 flex flex-col justify-center items-center p-1">
        Subreddits
      </p>
      <SubList subreddits={subreddits} />
    </aside>
  );
}
