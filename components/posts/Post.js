import { useState } from "react";
import DashVideoPlayer from "../DashVideoPlayer";
import Comments from "../comments/Comments";

const Post = ({ post, setSearchTerm }) => {
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
    replies,
    permalink,
    secure_media,
  } = post;
  //show/hide comments bool variable
  const [commentsShowing, setCommentsShowing] = useState(false);
  //returns a single post container with the author, title, media type and comments button
  return (
    <div className="container flex flex-wrap flex-col place-content-center text-center w-0.75 p-2 mb-2 border shadow-md border-black rounded-lg bg-white">
      <p className="text-2xl m-3">{title}</p>
      <div className="flex flex-row m-1 place-content-center justify-center text-center">
        <img className="h-8 w-8" src={`https://robohash.org/${author}`} />
        <p>Post by: {author}</p>
      </div>

      <button
        className="m-1 text-lg underline hover:underline-offset-4"
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
        ) : (
          <a href={url} target="_blank" rel="noreferrer">
            <b>Check it out here </b>
          </a>
        )}
      </div>

      <button
        type="button"
        onClick={() => {
          setCommentsShowing(!commentsShowing);
        }}
      >
        <b>
          {commentsShowing
            ? "^ Hide Comments ^"
            : `${num_comments} Total Comments`}
        </b>
      </button>

      {
        //if commmentsShowing is false, this section below is not visible
        commentsShowing && (
          <div>
            <Comments key={id} post={post} replies={replies} depth={0} />
            <div>
              <b>
                <a
                  href={`https://reddit.com${permalink}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Click here to comment or see the full list of comments at the
                  source.
                </a>
              </b>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default Post;
