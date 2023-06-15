import AboutMe from "./AboutMe";
import HeroBottomImage from "./HeroBottomImage";
import HeroTopImage from "./HeroTopImage";

type ContentSectionProps = {
  heroOpacity: number;
  image1Opacity: number;
  image1Transform: string;
  image2Opacity: number;
  image2Transform: string;
};

export default function ContentSection({
  heroOpacity,
  image1Opacity,
  image1Transform,
  image2Opacity,
  image2Transform,
}: ContentSectionProps) {
  return (
    <div className="relative h-[200vh] w-full" style={{ opacity: heroOpacity }}>
      <HeroTopImage
        imageOpacity={image1Opacity}
        imageTransform={image1Transform}
      />
      <AboutMe />
      <HeroBottomImage
        imageOpacity={image2Opacity}
        imageTransform={image2Transform}
      />
    </div>
  );
}
