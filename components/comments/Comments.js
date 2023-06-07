import Reply from "./Reply";

const Comments = ({ permalink, baseUrl, replies, depth, commentList }) => {
  //replies is passed as a prop in the getReplies function.
  console.log("!!!!!!!!!", commentList);

  //getReplies function recursively fetches comments and adds depth for styling
  const getReplies = (arr) => {
    return arr.map((reply) =>
      reply.kind === "t1" ? (
        <div key={reply.data.id} className={`replies reply-depth-${depth + 1}`}>
          <Comments
            post={reply.data}
            replies={reply.data.children}
            depth={depth + 1}
          />
        </div>
      ) : (
        []
      )
    );
  };
  //End getReplies Function

  //return 6 comments(See apiSlice), along with two replies, and those replies as well.
  return (
    <div>
      {commentList !== undefined &&
        commentList.data.children.map((comment) => (
          <div key={comment.data.id}>
            <Reply reply={comment.data} key={comment.data.id} />
            <div className={`replies reply-depth-${depth}`}>
              {/*only get the list of two child elements*/}
              {(comment.data.replies
                ? getReplies(comment.data.replies.data.children)
                : []
              ).slice(0, 2)}
            </div>
          </div>
        ))}
    </div>
  );
};
export default Comments;
