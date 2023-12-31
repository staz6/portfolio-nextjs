import PortfolioBackgroundIcon from "../icons/PortfolioBackgroundIcon";
import PortfolioSpinIcon from "../icons/PortfolioSpinIcon";
import ProjectContainer from "./ProjectContainer";

export default function PortfolioSection() {
  const projects = [
    {
      src: "ih-1.webp",
      position: "center",
      stack: ["React", "Nodejs", "Firebase", "AWS"],
      desc: "Directing the engineering of an advanced e-learning platform.",
    },
    {
      src: "sc-1.webp",
      position: "center",
      stack: ["React", ".Net", "Azure Function"],
      desc: "Crafting a low-cost, impactful solution for Toronto’s “Storage Connect” charity initiative.",
    },
    {
      src: "cd-1.webp",
      position: "top",
      stack: ["React", "Nestjs", "Shopify"],
      desc: "Streamlining and optimizing the website and infrastructure for enhanced performance.",
    },
    {
      src: "occu-1.webp",
      position: "top",
      stack: ["React", "Lambda Function", "AWS Cognito"],
      desc: "Delivered an insurance claim solution for Quality Claims, now in use by 300+ employees.",
    },
  ];

  return (
    <>
      <PortfolioBackgroundIcon />
      <PortfolioSpinIcon />
      <div className="container-fluid relative z-10">
        <h2
          className="m-0 mb-[15px] mt-[126px] p-0 font-[bold] text-[30px] leading-6 text-[#87BA34]"
          id="portfolio"
        >
          Portfolio
        </h2>
        <div className="gap-4 lg:grid lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="m-0 pb-6 text-lg leading-6 text-white lg:p-0">
              Some of my most memorable projects highlight
            </p>
          </div>
          <div className="flex flex-col  gap-10 lg:col-span-8 lg:items-end">
            {projects.map((project, index) => (
              <ProjectContainer
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                src={project.src}
                position={project.position}
                stack={project.stack}
                desc={project.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
