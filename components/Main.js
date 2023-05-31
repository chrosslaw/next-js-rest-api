import Posts from "./posts/Posts";

export default function Main({
  searchTerm,
  setSearchTerm,
  setReddits,
  reddits,
  getReddits,
}) {
  return (
    <div className=" w-full md:basis-9/12 flex flex-col mt-5 m-1 relative place-items-center ">
      <p className="h-10 bg-gradient-to-r from-gray-600 to-gray-400 font-mono font-bold text-xl text-white border border-double border-black rounded-lg shadow-md flex flex-col text-center place-content-center w-full">
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
