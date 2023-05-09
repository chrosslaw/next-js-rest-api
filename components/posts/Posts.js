import Loading from "../Loading";
import { useEffect, useState } from "react";
import axios from "axios";
import Post from "./post";

const Posts = ({ baseUrl, searchTerm, setSearchTerm }) => {
  const [redditPosts, setRedditPosts] = useState("");
  const { data: posts, error, isLoading } = redditPosts;
  console.log(posts, error, isLoading);

  useEffect(() => {
    getReddits();
  }, []);

  const getReddits = () => {
    axios
      .get(`${baseUrl}r/${searchTerm}`)
      .then((response) => {
        const allPosts = response.data;
        setRedditPosts(allPosts);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  return (
    <div>
      {error ? (
        "There was an error."
      ) : isLoading ? (
        <Loading />
      ) : (
        // Display the search list posts or the selected posts.
        posts.map((post) => (
          <Post
            key={post.data.id}
            post={post.data}
            setSearchTerm={setSearchTerm}
          />
        ))
      )}
    </div>
  );
};

export default Posts;
