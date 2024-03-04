import React from "react";
import MainImage from "../images/camera-front.webp";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="bg-white mt-12">
      <div className="px-3 mx-auto max-w-full pb-10 text-center md:pb-16 ">
        <h1 className="leading-tighter font-heading mb-6 text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl pt-14 pb-12">
          Ali Blogs
        </h1>
        <div className="mx-auto max-w-7xl">
          {/* <p className="mb-6 text-xl font-normal text-gray-600 dark:text-slate-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse,
            aperiam in. Veritatis dicta delectus facilis eligendi, eum optio
            dignissimos iste reiciendis repellendus ad ut asperiores autem harum
            labore eveniet. Architecto!
          </p> */}
        </div>
        <div className="relative m-auto max-w-5xl">
          <Image
            className="mx-auto h-auto w-full rounded-md bg-gray-400 dark:bg-slate-700"
            src={MainImage.src}
            alt=""
            width={1024}
            height={607}
            sizes="(max-width: 64rem) 100vw, 1024px"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
