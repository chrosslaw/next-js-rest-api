import React from "react";

const Comment = ({ reply }) => {
  const { author, body, score } = reply;
  //displays comments or replies along with their score
  return (
    <div>
      <div className="flex place-content-center border border-black rounded-md ">
        <img src={`https://robohash.org/${author}`} className="w-8 h-8 mr-1 " />

        <p className="font-bold">{author}</p>
      </div>
      <p className="font-bold justify-self-end mt-3">{score}</p>

      <p className="flex flex-col place-items-center p-2 min-w-full text-lg  max-w-md">
        {body}
      </p>
    </div>
  );
};

export default Comment;
