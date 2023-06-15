import { useEffect, useState } from "react";

import BannerSection from "@/components/Panel/BannerSection";
import ContentSection from "@/components/Panel/ContentSection";
import NebulaBackground from "@/components/Panel/NebulaBackground";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";

const Index = () => {
  const [heroOpacity, setHeroOpacity] = useState(1);
  const [heroTransform, setHeroTransform] = useState("scale(1.05)");
  const [image1Opacity, setImage1Opacity] = useState(1);
  const [image2Opacity, setImage2Opacity] = useState(1);
  const [image2Transform, setImage2Transform] = useState("scale(1)");

  const resetStyles = () => {
    setHeroOpacity(1);
    setHeroTransform("scale(1.05)");
    setImage1Opacity(1);
    setImage2Opacity(1);
    setImage2Transform("scale(1)");
  };
  useEffect(() => {
    const threshold = window.innerHeight;
    const handleScroll = () => {
      const scale = 1 + ((window.scrollY / threshold) * 1 - 1);
      if (window.scrollY > threshold) {
        const opacityScale = 1 - (window.scrollY / threshold) * 0.4;
        setHeroOpacity(opacityScale);
        setHeroTransform(`scale(${scale ** 2})`);
        setImage1Opacity(opacityScale);
        setImage2Opacity(window.scrollY / threshold);
        setImage2Transform(`scale(${scale ** 0.5})`);
      } else {
        resetStyles();
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
        <NebulaBackground />
        <div className="h-[480vh] w-full">
          <BannerSection />
          <ContentSection
            heroOpacity={heroOpacity}
            image1Transform={heroTransform}
            image1Opacity={image1Opacity}
            image2Opacity={image2Opacity}
            image2Transform={image2Transform}
          />
        </div>
      </div>
    </Main>
  );
};

export default Index;
