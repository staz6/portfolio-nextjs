import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function ProjectContainer({
  src,
  position,
  stack,
  desc,
}: {
  src: string;
  position: string;
  stack: Array<string>;
  desc: string;
}) {
  const router = useRouter();
  return (
    <div className="relative mb-6 w-full max-w-2xl cursor-pointer">
      {/* <div className="absolute right-0 top-[-13px] flex gap-x-4 z-10">
        <Image
          src={`${router.basePath}/assets/icons/react-icon.png`}
          alt="React icon"
          width={99}
          height={99}
        />
      </div> */}
      <h4 className="mb-2.5 text-lg font-medium leading-6 text-[#87BA34]">
        {stack.join(" | ")}
      </h4>
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          alt="some alt"
          src={`${router.basePath}/assets/images/${src}`}
          layout="fill"
          objectFit="cover"
          objectPosition={position}
          className="transition-transform duration-500 hover:scale-110 hover:opacity-90"
        />
      </div>
      <p className="mt-5 flex cursor-pointer font-[bold] text-base leading-5 text-white transition-[0.2s]">
        {desc}
      </p>
    </div>
  );
}

export default ProjectContainer;
