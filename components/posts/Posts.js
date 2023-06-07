import { useState, useEffect } from "react";
import Loading from "../Loading";
import Post from "./post";
import { FaArrowUp } from "react-icons/fa";
import axios from "axios";

const Posts = ({ setSearchTerm, reddits, setReddits, baseUrl }) => {
  const { data: posts, error, isLoading } = reddits;
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    if (!isBrowser()) return;
    isVisible && window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col place-items-center m-1 p-1">
      <div className="flex place-content-center justify-around border-black rounded-lg bg-white p-2 mb-2 w-full">
        <a className="hover:underline bg-gradient-to-r from-blue-600 to-gray-400 w-1/3 font-semibold font-mono text-center text-white text-xl rounded-lg shadow-lg border border-black min-w-min p-1 flex flex-col flex-wrap">
          <button
            className="w-full"
            type="button"
            onClick={() => {
              setSearchTerm("Popular");
            }}
          >
            Popular
          </button>
        </a>
        <a className="hover:underline bg-gradient-to-r mx-1 from-red-600 to-gray-400 w-1/3 font-semibold font-mono text-center text-white rounded-lg shadow-lg border border-black min-w-min p-1 text-xl flex flex-col flex-wrap">
          <button
            className="w-full"
            type="button"
            onClick={() => {
              setSearchTerm("Popular/hot");
            }}
          >
            Hot
          </button>
        </a>
        <a className="hover:underline bg-gradient-to-r from-yellow-600 to-gray-400 w-1/3 font-semibold font-mono text-center text-white rounded-lg shadow-lg border border-black min-w-min p-1 text-xl flex flex-col flex-wrap">
          <button
            className="w-full"
            type="button"
            onClick={() => {
              setSearchTerm("Popular/top");
            }}
          >
            Top
          </button>
        </a>
      </div>
      {isLoading
        ? "Loading.."
        : posts // Display the search list posts or the selected posts.
        ? posts.children.map((post) => (
            <Post
              key={post.data.id}
              post={post.data}
              setSearchTerm={setSearchTerm}
              setReddits={setReddits}
              baseUrl={baseUrl}
            />
          ))
        : null}
      {isVisible && (
        <button
          className="fixed bg-blue-500 hover:bg-red-400 bottom-10 left-10 p-2 md:p-4 border rounded-lg"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default Posts;
