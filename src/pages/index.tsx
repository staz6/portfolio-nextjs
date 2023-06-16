import { useEffect, useState } from "react";

import PortfolioBackgroundIcon from "@/components/icons/PortfolioBackgroundIcon";
import PortfolioSpinIcon from "@/components/icons/PortfolioSpinIcon";
import BannerSection from "@/components/Panel/BannerSection";
import ContentSection from "@/components/Panel/ContentSection";
import NebulaBackground from "@/components/Panel/NebulaBackground";
import ProjectContainer from "@/components/PortfolioSection/ProjectContainer";
import SkillDescriptionSection from "@/components/SkillsDescriptionSection";
import SkillsSection from "@/components/SkillSection";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";

const Index = () => {
  const [heroOpacity, setHeroOpacity] = useState(1);
  const [heroTransform, setHeroTransform] = useState("scale(1.05)");
  const [image1Opacity, setImage1Opacity] = useState(1);
  const [image2Opacity, setImage2Opacity] = useState(1);
  const [image2Transform, setImage2Transform] = useState("scale(1)");
  const [nebulaScale, setNebulaScale] = useState(1);
  const [skillSetOpacity, setSkillSetOpacity] = useState(0);

  const resetStyles = () => {
    setHeroOpacity(1);
    setHeroTransform("scale(1.05)");
    setImage1Opacity(1);
    setImage2Opacity(1);
    setImage2Transform("scale(1)");
    setNebulaScale(1);
    setSkillSetOpacity(0);
  };

  useEffect(() => {
    const threshold = window.innerHeight;

    const handleScroll = () => {
      const scale = 1 + ((window.scrollY / threshold) * 1 - 1);
      const opacityScale = 1 - (window.scrollY / threshold) * 0.4;

      // adjust the scale and opacity of hero, image1, and image2
      if (window.scrollY > threshold) {
        setHeroOpacity(opacityScale);
        setHeroTransform(`scale(${scale ** 2})`);
        setImage1Opacity(opacityScale);
        setImage2Opacity(window.scrollY / threshold);
        setImage2Transform(`scale(${scale ** 0.5})`);
      } else {
        resetStyles();
      }

      // Once the opacity of ContentSection hits 0 (i.e., window.scrollY = 2.5 * threshold),
      // make the Skill Set visible and scale up the nebula background
      if (window.scrollY > 2.5 * threshold) {
        setSkillSetOpacity(1);
        setNebulaScale(scale ** 0.6);
      }

      // Once the threshold is hit again (i.e., window.scrollY = 3 * threshold),
      // make the Skill Set invisible
      if (window.scrollY > 3 * threshold) {
        setSkillSetOpacity(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pageTitle = "Muhammad Aahad";
  const pageDescription =
    "Muhammad Aahad Full-stack web developer & DevOps Engineer";

  return (
    <Main meta={<Meta title={pageTitle} description={pageDescription} />}>
      <div className="relative z-[2] bg-[#071231] transition-[1.5s]">
        <NebulaBackground transform={`scale(${nebulaScale})`} />
        <div className="h-[480vh] w-full">
          <div className="relative z-[30]">
            <BannerSection />
          </div>

          <div className="absolute top-0 z-[20] h-[480vh] w-full">
            <ContentSection
              heroOpacity={heroOpacity}
              image1Transform={heroTransform}
              image1Opacity={image1Opacity}
              image2Opacity={image2Opacity}
              image2Transform={image2Transform}
            />
          </div>

          <div className="fixed top-0 z-[10] h-screen w-full bg-transparent bg-cover text-sm leading-[1.42857143]  transition-[0.2s]">
            <div
              className="relative mx-auto flex min-h-screen w-full max-w-[690px] items-center justify-center text-[#ffff]"
              style={{ opacity: skillSetOpacity }}
            >
              <SkillsSection />
            </div>
          </div>
        </div>
        <SkillDescriptionSection />
      </div>
      <div className="relative z-[2] bg-black bg-cover bg-no-repeat leading-[1.42857143] text-[#333]">
        <PortfolioBackgroundIcon />
        <PortfolioSpinIcon />
        <div className="container-fluid">
          <h2 className="m-0 mb-[15px] mt-[126px] p-0 font-[bold] text-2xl leading-6 text-[#87BA34]">
            Portfolio
          </h2>
          <div className="gap-4 lg:grid lg:grid-cols-12">
            <div className=" lg:col-span-4">
              <p className="m-0 p-0 text-lg leading-6 text-white">
                Some of my most memorable projects highlight
              </p>
            </div>
            <div className="flex flex-col items-end gap-10 lg:col-span-8">
              <ProjectContainer
                src="ih-1.webp"
                position="center"
                stack={["React", "Nodejs", "Firebase", "AWS"]}
                desc="Loren ipsum"
              />
              <ProjectContainer
                src="sc-1.webp"
                position="center"
                stack={["React", ".Net", "Azure Function"]}
                desc="Loren ipsum"
              />
              <ProjectContainer
                src="cd-1.webp"
                position="top"
                stack={["React", "Nestjs", "Shopify"]}
                desc="Loren ipsum"
              />
              <ProjectContainer
                src="occu-1.webp"
                position="top"
                stack={["React", "Lambda Function", "AWS Cognito"]}
                desc="Loren ipsum"
              />
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Index;
