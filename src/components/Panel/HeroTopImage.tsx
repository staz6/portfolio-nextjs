import Image from "next/image";
import { useRouter } from "next/router";

type HeroTopImageProps = {
  imageOpacity: number;
  imageTransform: string;
};

export default function HeroTopImage({
  imageOpacity,
  imageTransform,
}: HeroTopImageProps) {
  const router = useRouter();
  return (
    <div
      className="fixed left-0 top-[0vh] z-[2] h-full max-h-screen w-full scale-105"
      style={{ opacity: imageOpacity, transform: imageTransform }}
    >
      <Image
        src={`${router.basePath}/assets/images/sect-img.webp`}
        alt="Picture of the author"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "100vh" }}
        className="translate-x-[4.83333px] translate-y-[-4.83333px]"
      />
    </div>
  );
}
