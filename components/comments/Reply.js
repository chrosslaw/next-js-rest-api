import React from "react";

const Reply = ({ reply }) => {
  const { author, body, score } = reply;
  //displays comments or replies along with their score
  return (
    <div>
      <div className="score">
        <h4>
          <b className="author">{author}</b>
        </h4>

        {score}
      </div>
      <p className="flex flex-col place-items-center border border-black p-2 min-w-full">
        {body}
      </p>
    </div>
  );
};

export default Reply;
