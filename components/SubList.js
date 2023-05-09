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
      <li
        key={subreddit.data.id}
        className="bg-white w-full min-w-fit font-semibold font-mono text-center rounded-lg shadow-md mt-1 pt-1 flex flex-col text-xs items-center "
      >
        {` ${subreddit.data.display_name}`}
        <button className="h-14 w-14 p-1" type="button">
          <img
            src={
              subreddit.data.icon_img ||
              `https://robohash.org/${subreddit.data.display_name}`
            }
          />
        </button>
      </li>
    ))
  ) : null;
};

export default SubList;
