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
    <div className="w-2/12 min-w-min flex flex-row flex-wrap">
      <p className="bg-black h-10 w-full font-bold font-mono text-white text-sm md:text-lg lg:text-xl rounded-lg shadow-md mt-1 flex items-center justify-center">
        Subreddits
      </p>

      <SubList subreddits={subreddits} />
    </div>
  );
}
