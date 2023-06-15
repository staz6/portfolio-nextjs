import BannerVideo from "./BannerVideo";

export default function BannerSection() {
  return (
    <div className="visible relative top-0 z-[22] flex h-[calc(100vh-_94px)] w-full items-center justify-center bg-black px-[30px] opacity-100 transition-[1.8s] duration-[linear]">
      <BannerVideo />
      <div className="z-10 text-center">
        <h1 className="mb-3 text-[45px] font-normal uppercase leading-10 tracking-[14px] text-white">
          Muhammad Aahad
        </h1>
        <h2 className="mb-7 mt-4 text-[25px] leading-7 text-white">
          Full-stack web developer & DevOps Engineer
        </h2>
      </div>
    </div>
  );
}
