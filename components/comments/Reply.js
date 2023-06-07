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
      <p>{body}</p>
    </div>
  );
};

export default Reply;
