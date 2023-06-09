import Comment from "./Comment";

const Comments = ({ commentList }) => {
  //replies is passed as a prop in the getReplies function.
  console.log("!!!!!!!!!", commentList);
  commentList.data.children.sort((a, b) => b.data.score - a.data.score);
  //return 6 comments(See apiSlice), along with two replies, and those replies as well.
  return (
    <div className="flex flex-col place-items-center border p-1 rounded-md bg-black max-w-md relative">
      {commentList !== undefined &&
        commentList.data.children.map((comment) => (
          <div
            key={comment.data.id}
            className="flex flex-col min-w-full place-items-center rounded-md bg-white m-2 p-2"
          >
            <Comment reply={comment.data} key={comment.data.id} />
          </div>
        ))}
    </div>
  );
};
export default Comments;
