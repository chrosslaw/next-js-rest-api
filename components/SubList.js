import Loading from "./Loading";

const SubList = ({ subreddits, setSearchTerm, setReddits }) => {
  const { data: subs, error, isLoading } = subreddits;

  console.log(subs, error, isLoading);
  return (
    <ul className="w-full flex flex-row flex-wrap md:flex-col place-content-evenly">
      {isLoading ? (
        <Loading />
      ) : error ? (
        "There was an error"
      ) : subs ? (
        subs.children.map((subreddit) => (
          <li
            key={subreddit.data.id}
            className="bg-white w-1/3 sm:w-1/5 md:w-full font-semibold font-mono text-center rounded-lg shadow-lg border border-black  md:m-1 sm:p-1 text-xs flex flex-col justify-center items-center"
          >
            <p className="tracking-tighter">{` ${subreddit.data.display_name}`}</p>
            <button
              className="w-6 md:w-14"
              type="button"
              onClick={() => {
                setSearchTerm(subreddit.data.display_name);
                setReddits("");
              }}
            >
              <img
                src={
                  subreddit.data.icon_img ||
                  `https://robohash.org/${subreddit.data.display_name}`
                }
              />
            </button>
          </li>
        ))
      ) : null}
    </ul>
  );
};

export default SubList;
