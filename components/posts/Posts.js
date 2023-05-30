import { useState, useEffect } from "react";
import Loading from "../Loading";
import Post from "./post";
import { FaArrowUp } from "react-icons/fa";

const Posts = ({ setSearchTerm, reddits, setReddits }) => {
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
    // Popular buttons
    <div>
      <div className="flex flex-row place-content-center  border-black rounded-lg bg-white p-2 mb-2">
        <a className="hover:underline bg-gradient-to-r from-blue-600 to-gray-400 w-1/3 md:w-1/4 font-semibold font-mono text-center text-white rounded-lg shadow-lg border border-black min-w-min p-1 text-lg flex flex-col flex-wrap place-items-center">
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
        <a className="mx-1 hover:underline bg-gradient-to-r from-red-600 to-gray-400 w-1/3 md:w-1/4 font-semibold font-mono text-center text-white rounded-lg shadow-lg border border-black min-w-min p-1 text-lg flex flex-col flex-wrap">
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
        <a className="hover:underline bg-gradient-to-r from-yellow-600 to-gray-400 w-1/3 md:w-1/4 font-semibold font-mono text-center text-white rounded-lg shadow-lg border border-black min-w-min p-1 text-lg flex flex-col flex-wrap">
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
      {error ? (
        "There was an error."
      ) : isLoading ? (
        <Loading />
      ) : posts ? ( // Display the search list posts or the selected posts.
        posts.children.map((post) => (
          <Post
            key={post.data.id}
            post={post.data}
            setSearchTerm={setSearchTerm}
            setReddits={setReddits}
          />
        ))
      ) : null}
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
