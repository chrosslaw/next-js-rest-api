import Loading from "../Loading";

import Post from "./post";

const Posts = ({ setSearchTerm, reddits, setReddits }) => {
  const { data: posts, error, isLoading } = reddits;

  return (
    <div>
      <div className="flex flex-row justify-around">
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
        <a className="hover:underline bg-gradient-to-r from-red-600 to-gray-400 w-1/3 md:w-1/4 font-semibold font-mono text-center text-white rounded-lg shadow-lg border border-black min-w-min p-1 text-lg flex flex-col flex-wrap">
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
    </div>
  );
};

export default Posts;
