import Loading from "../Loading";

import Post from "./post";

const Posts = ({ getReddits, setSearchTerm, reddits, setReddits }) => {
  const { data: posts, error, isLoading } = reddits;

  return error ? (
    "There was an error."
  ) : isLoading ? (
    <Loading />
  ) : posts ? (
    // Display the search list posts or the selected posts.
    posts.children.map((post) => (
      <Post
        key={post.data.id}
        post={post.data}
        setSearchTerm={setSearchTerm}
        setReddits={setReddits}
      />
    ))
  ) : null;
};

export default Posts;
