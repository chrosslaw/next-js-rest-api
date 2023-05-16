import Loading from "../Loading";

import Post from "./post";

const Posts = ({ searchTerm, setSearchTerm, reddits }) => {
  const { data: posts, error, isLoading } = reddits;
  console.log(posts, error, isLoading);

  return error ? (
    "There was an error."
  ) : isLoading ? (
    <Loading />
  ) : posts ? (
    // Display the search list posts or the selected posts.
    posts.children.map((post) => (
      <Post key={post.data.id} post={post.data} setSearchTerm={setSearchTerm} />
    ))
  ) : null;
};

export default Posts;
