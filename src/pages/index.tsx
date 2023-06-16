import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import PortfolioBackgroundIcon from "@/components/icons/PortfolioBackgroundIcon";
import PortfolioSpinIcon from "@/components/icons/PortfolioSpinIcon";
import BannerSection from "@/components/Panel/BannerSection";
import ContentSection from "@/components/Panel/ContentSection";
import NebulaBackground from "@/components/Panel/NebulaBackground";
import PortfolioSection from "@/components/PortfolioSection";
import SkillDescriptionSection from "@/components/SkillsDescriptionSection";
import SkillsSection from "@/components/SkillSection";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";

const Index = () => {
  const router = useRouter();
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
        <PortfolioSection />

        <div className="container-fluid relative z-10 mt-10">
          <h2 className="m-0 mb-[15px] p-0 font-[bold] text-2xl leading-6 text-[#87BA34]">
            Comapnies who helped me grow
          </h2>
          <div className="tems-center flex w-full flex-row gap-x-6 border-t border-solid border-t-[#87BA34] pb-9">
            <div>
              <h3 className="mx-0 mb-2.5 mt-2 box-border text-[1.4rem] font-light leading-10 text-white">
                Upwork
              </h3>
              <p className="mx-0 mb-2.5 mt-[15px] box-border w-[580px] text-base font-normal not-italic leading-6 text-slate-50">
                While working full time as a freelance Software developer on
                Upwork, I provided vendor services to enterprise-level
                organizations at MK-Consulting and GR-Digital. This included
                working on several React-based applications, writing unit and
                integration tests, end-to-end testing with Cypress, creating new
                endpoints for backend services, and developing the front end of
                a Crypto exchange platform.
              </p>
            </div>
            <img
              src={`${router.basePath}/assets/icons/upwork-logo.svg`}
              alt="upwork logo"
              width={248}
              height={88}
            />
          </div>

          <div className="flex w-full flex-row items-center gap-x-6 border-t border-solid border-t-[#87BA34] pb-9">
            <div>
              <h3 className="mx-0 mb-2.5 mt-2 box-border text-[1.4rem] font-light leading-10 text-white">
                Quantum-hub
              </h3>
              <p className="mx-0 mb-2.5 mt-[15px] box-border w-[650px] text-base font-normal not-italic leading-6 text-slate-50">
                Serving as a Full-stack developer for QuantumHub, I worked on
                various MERN stack projects, from AI modeling for news feed
                generation to insurance claim solutions, website and
                infrastructure optimization, and a .NET backend for a charity
                initiative. Currently, I am working on a mobile app using React
                Native, a serverless backend for an IoT initiative, and an oauth
                gateway using AWS Cognito and dynamodb fine-grained access
                control.
              </p>
            </div>
            <img
              src={`${router.basePath}/assets/icons/qh-logo.webp`}
              alt="upwork logo"
              height={88}
            />
          </div>

          <div className="tems-center flex w-full flex-row gap-x-6 border-t border-solid border-t-[#87BA34] pb-9">
            <div>
              <h3 className="mx-0 mb-2.5 mt-2 box-border text-[1.4rem] font-light leading-10 text-white">
                Nastech LTD
              </h3>
              <p className="mx-0 mb-2.5 mt-[15px] box-border w-[740px] text-base font-normal not-italic leading-6 text-slate-50">
                As a part of the team at NASTECH, a leading IT solutions and
                services provider, I contributed to the development of an office
                ERP based on microservices architecture and led the development
                and project management of a B2B e-commerce platform.
              </p>
            </div>
            <img
              src={`${router.basePath}/assets/icons/nastech-logo.svg`}
              alt="upwork logo"
              width={248}
              height={88}
            />
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Index;
