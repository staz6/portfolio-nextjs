import Image from "next/image";
import { useRouter } from "next/router";

type HeroBottomImageProps = {
  imageOpacity: number;
  imageTransform: string;
};

export default function HeroBottomImage({
  imageOpacity,
  imageTransform,
}: HeroBottomImageProps) {
  const router = useRouter();
  return (
    <div className="fixed top-0 z-[21] flex h-[calc(100vh_+_2px)] w-[calc(100%_+_2px)] flex-col bg-transparent transition-[0.2s]">
      <div className="relative h-screen w-full overflow-hidden pt-40">
        <div
          className="absolute bottom-0 mt-20 w-full"
          style={{ opacity: imageOpacity, transform: imageTransform }}
        >
          <Image
            src={`${router.basePath}/assets/images/people-bg-img.webp`}
            alt="Picture of the author"
            width={0}
            height={0}
            sizes="100vw"
            // eslint-disable-next-line prettier/prettier
                    style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}
