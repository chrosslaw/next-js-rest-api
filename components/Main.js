import { useState, useEffect } from "react";
import Posts from "./posts/Posts";
import { FaArrowUp } from "react-icons/fa";

export default function Main({
  searchTerm,
  setSearchTerm,
  setReddits,
  reddits,
  getReddits,
}) {
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
    <div className=" w-full md:basis-9/12 flex flex-col mt-5 gap-2 relative">
      <p className="h-10 bg-gradient-to-r from-gray-600 to-gray-400 font-black font-mono text-xl text-white rounded-lg shadow-md flex flex-col text-center place-content-center">
        {searchTerm} Reddit Posts
      </p>
      <Posts
        searchTerm={searchTerm}
        reddits={reddits}
        setSearchTerm={setSearchTerm}
        getReddits={getReddits}
        setReddits={setReddits}
      />
      <button
        className="fixed bg-blue-500 hover:bg-red-400 bottom-10 left-10 p-4 border rounded-lg"
        onClick={scrollToTop}
      >
        <FaArrowUp />
      </button>
    </div>
  );
}
