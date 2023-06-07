import { useState, useEffect } from "react";
import SubList from "./SubList";
import axios from "axios";

export default function AsideBar({ baseUrl, setSearchTerm, setReddits }) {
  const [subreddits, setSubreddits] = useState([]);
  const [showMore, setShowMore] = useState(false);
  let urls = [
    `${baseUrl}/subreddits`,
    `${baseUrl}/subreddits?count=25&after=t5_2th52`,
  ];
  const requests = urls.map((url) => axios.get(url));
  useEffect(() => {
    getSubreddits();
  }, []);

  const getSubreddits = () => {
    let allSubs = [];
    axios.all(requests).then((responses) => {
      responses.forEach((response) => {
        allSubs.push(response.data);
      });
    });
    setSubreddits(allSubs);
  };

  return (
    <div className="w-full md:basis-2/12 flex flex-col mt-5 place-items-center m-1 relative">
      <p className="bg-gradient-to-r from-gray-600 to-gray-400 w-full h-10 font-bold font-mono border border-double border-black text-white text-xl rounded-lg shadow-md flex items-center justify-center">
        Subreddits
      </p>
      {/* First 25 subreddits */}
      <SubList
        subreddits={subreddits[0]}
        setSearchTerm={setSearchTerm}
        setReddits={setReddits}
      />
      {/* Second set of 25 subreddits, hidden by default */}
      {showMore && (
        <SubList
          subreddits={subreddits[1]}
          setSearchTerm={setSearchTerm}
          setReddits={setReddits}
        />
      )}
      {/* load more subreddits button*/}
      <button
        onClick={() => setShowMore(!showMore)}
        className="hover:underline"
      >
        <b>{showMore ? "Show less..." : "Show more..."}</b>
      </button>
    </div>
  );
}
