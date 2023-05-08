import Loading from "./Loading";

const SubList = ({ subreddits }) => {
  const { data: subs, error, isLoading } = subreddits;

  console.log(subs, error, isLoading);
  return isLoading ? (
    <Loading />
  ) : error ? (
    "There was an error"
  ) : subs ? (
    subs.children.map((subreddit) => (
      <a
        key={subreddit.data.id}
        className="bg-white h-20 font-semibold font-mono rounded-lg shadow-md m-1 p-1 flex flex-col text-xs justify-center items-center "
      >
        {` ${subreddit.data.display_name}`}
        <button className="h-16 w-16 p-1" type="button">
          <img
            src={
              subreddit.data.icon_img ||
              `https://robohash.org/${subreddit.data.display_name}`
            }
          />
        </button>
      </a>
    ))
  ) : null;
};

export default SubList;
