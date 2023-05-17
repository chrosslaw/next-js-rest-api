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
      .get(`${baseUrl}/subreddits`)
      .then((response) => {
        const allSubs = response.data;
        setSubreddits(allSubs);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  return (
    <div className=" w-full md:w-2/12 flex flex-col flex-wrap  mt-5 gap-1 place-items-center relative">
      <p className="bg-gradient-to-r from-gray-600 to-gray-400 w-full font-bold font-mono text-white text-xl rounded-lg shadow-md flex items-center justify-center">
        Subreddits
      </p>

      <SubList subreddits={subreddits} />
    </div>
  );
}
