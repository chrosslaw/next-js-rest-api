import Link from "next/link";
import Image from "next/image";

const Post = ({ data }) => {
  console.log("one", data);
  return (
    <button
      className="bg-white rounded-lg shadow-md p-4 "
      type="button"
      href={`reddit.com${data.url}`}
    >
      <img src={data.icon_img} alt={`${data.display_name}`} />
      {` ${data.display_name}`}
    </button>
  );
};

export default Post;
