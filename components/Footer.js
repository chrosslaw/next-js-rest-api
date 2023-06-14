import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full h-56 flex flex-col place-items-center border-t-4 p-1">
      <p className="font-bold text-center max-w-3xl m-4">
        Thank you for checking out my Next.Reddit app, which I created using the
        Reddit API and the Next.js framework. Click on the links below to see
        some of my other projects.
      </p>
      <div className="flex justify-evenly w-full">
        <a href="https://chrosstech.com">
          <Image
            src="/chrosstech_logo.png"
            alt="website logo"
            width={75}
            height={75}
          />
        </a>
        <a href="https://chrosslaw.com">
          <Image
            src="/chrosslaw.png"
            alt="website logo"
            width={75}
            height={75}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
