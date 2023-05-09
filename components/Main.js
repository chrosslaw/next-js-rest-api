import Posts from "./posts/Posts";

export default function Main({ baseUrl, searchTerm, setSearchTerm }) {
  return (
    <div className="w-9/12 min-w-min flex flex-col">
      <p className="bg-black h-10 w-full font-black font-mono mt-1 ml-1 text-sm md:text-lg lg:text-xl text-white rounded-lg shadow-md flex flex-col items-center justify-center">
        {searchTerm} Reddit Posts
      </p>
      <Posts
        searchTerm={searchTerm}
        baseUrl={baseUrl}
        setSearchTerm={setSearchTerm}
      />
    </div>
  );
}
