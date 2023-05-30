import Posts from "./posts/Posts";

export default function Main({
  searchTerm,
  setSearchTerm,
  setReddits,
  reddits,
  getReddits,
}) {
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
    </div>
  );
}
