import Image from "next/image";

const Comment = ({ reply }) => {
  const { author, body, score } = reply;
  //displays comments or replies along with their score
  return (
    <div className="w-full">
      <div className="flex justify-between border border-black rounded-md ">
        <div className="flex place-items-center">
          <img
            src={`https://robohash.org/${author}`}
            className="w-8 h-8 mx-1 "
          />
          <p className="font-bold mx-1">{author}</p>
        </div>
        <div className="flex place-items-center">
          <p className="font-bold mx-1">{score}</p>
          {/* Hide the fire logo if there are not more than 50 likes */}
          {score > 50 && (
            <Image
              src={"/fire.png"}
              alt="Fire Image"
              height={20}
              width={20}
              className="mx-1"
            />
          )}
        </div>
      </div>
      <p className="flex flex-col place-items-center p-2 text-lg">{body}</p>
    </div>
  );
};

export default Comment;
