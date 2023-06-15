/* eslint-disable react/no-unescaped-entities */
export default function AboutMe() {
  const text = "mb-[1vw] mt-2 w-[596px] text-sm leading-5 text-white";
  return (
    <div className="fixed top-0 z-[21] flex h-[calc(100vh_+_2px_px_)] w-[calc(100%_+_2px)] flex-col items-center bg-transparent transition-[0.2s]">
      <div className="container-fluid fixed z-10 mt-32 max-w-4xl">
        <h2 className="w-[700px] text-3xl font-bold leading-10 text-white ">
          Providing Solutions to Your Tech Challenges with React and Node.js
        </h2>
        <p className={text}>
          I am a BSCS graduate from the Institute of Business Administration and
          an Aptech Certified Software Engineer. With a strong academic
          foundation in software development, I've always been passionate about
          building powerful and efficient web solutions.
        </p>
        <p className={text}>
          Over the course of 3 years, I've gained professional experience as a
          full-stack web developer. I've honed my skills in a variety of
          technologies, but my expertise lies in React and Node.js. This
          combination has enabled me to build highly scalable and user-friendly
          web applications.
        </p>
        <p className={text}>
          Currently, I am leveraging my skills remotely as a Full-stack web
          developer, striving to solve real-world problems and make the web a
          better place. Feel free to reach out to me on Linkedin or contact me
          directly for more about my work, or if there's a project you'd like to
          discuss.
        </p>
      </div>
    </div>
  );
}
