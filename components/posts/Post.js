import { useState, useEffect } from "react";
import DashVideoPlayer from "../DashVideoPlayer";
import Comments from "../comments/Comments";
import axios from "axios";

const Post = ({ post, setSearchTerm, baseUrl }) => {
  const {
    id,
    is_video,
    is_reddit_media_domain,
    title,
    author,
    subreddit,
    subreddit_name_prefixed,
    url,
    is_gallery,
    num_comments,
    thumbnail,
    permalink,
    secure_media,
    is_self,
    selftext,
  } = post;

  // show/hide comments bool variable
  const [commentsShowing, setCommentsShowing] = useState(false);
  const [commentList, setCommentList] = useState([]);

  const getPostComments = () => {
    axios
      .get(`${baseUrl}${post.permalink}`)
      .then((response) => {
        const newList = response.data[1].data.children
          .sort((a, b) => b.data.score - a.data.score)
          .slice(0, 20);
        setCommentList(newList);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  useEffect(() => {
    getPostComments();
  }, [permalink]);

  //returns a single post container with the author, title, media type and comments button
  return (
    <div className="container flex flex-wrap flex-col place-content-center text-center w-0.75 p-2 mb-2 border shadow-md border-black rounded-lg bg-white">
      <button
        className="m-1 p-1 text-lg underline hover:underline-offset-4 bg-black text-white rounded-sm"
        onClick={() => {
          //set search term to the clicked post name
          setSearchTerm(subreddit);
          window.scrollTo({
            top: 0,
            behavior: "smooth", // Add smooth scrolling behavior
          });
        }}
      >
        <b>{subreddit_name_prefixed}</b>
      </button>
      <div className="flex flex-row m-1 place-content-center justify-center text-center">
        <img className="h-8 w-8" src={`https://robohash.org/${author}`} />
        <p className="font-bold">Post by {author}</p>
      </div>
      <p className="text-2xl m-3">{title}</p>

      <div className="container mx-auto flex flex-wrap flex-col place-items-center text-center p-3">
        {is_video ? (
          <DashVideoPlayer videoUrl={secure_media.reddit_video.dash_url} />
        ) : is_reddit_media_domain ? (
          <a href={url}>
            <img src={url} alt={subreddit} />
          </a>
        ) : is_gallery ? (
          <a href={url}>
            <img src={thumbnail} alt={subreddit} />
          </a>
        ) : is_self ? (
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600"
          >
            {selftext.includes("http")
              ? `${selftext.slice(0, 150)}...`
              : selftext}
          </a>
        ) : (
          <a href={url} target="_blank" rel="noreferrer">
            <p className="bg-amber-200 font-bold p-1 rounded-md">
              Check it out at the source!
            </p>
          </a>
        )}
      </div>

      <button
        className="font-bold border border-black p-1 rounded-md bg-orange-200 hover:bg-orange-100"
        type="button"
        onClick={() => {
          setCommentsShowing(!commentsShowing);
        }}
      >
        {commentsShowing
          ? "^ Hide Comments ^"
          : `Click here to see the most popular comments out of ${num_comments} total comments`}
      </button>

      {
        //if commmentsShowing is false, this section below is not visible
        commentsShowing && (
          <div className="flex flex-col place-content-center place-items-center">
            <Comments
              key={id}
              baseUrl={baseUrl}
              permalink={permalink}
              depth={0}
              commentList={commentList}
            />
            <div>
              <b>
                <button
                  className="font-bold border border-black p-1 rounded-md bg-orange-200 hover:bg-orange-100"
                  href={`${baseUrl}${permalink}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Click here to reply and comment at the source.
                </button>
              </b>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default Post;
