const PostList = ({ subreddits }) => {
  const { data: subs, error, isLoading } = subreddits;

  console.log(subs, error, isLoading);

  return subs.children.map((subreddit) => {
    return (
      <li
        key={subreddit.data.id}
        className="bg-white rounded-lg shadow-md m-1 flex justify-center items-center"
      >
        <button className="h-2- w-20" type="button">
          <img
            src={subreddit.data.icon_img}
            alt={`${subreddit.data.display_name}`}
          />
          {` ${subreddit.data.display_name}`}
        </button>
      </li>
    );
  });
};

export default PostList;
