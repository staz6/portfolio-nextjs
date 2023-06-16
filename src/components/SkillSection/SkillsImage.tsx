import Image from "next/image";
import { useRouter } from "next/router";

export default function SkillsImage({
  src,
  alt,
  width,
  height,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
}) {
  const router = useRouter();
  return (
    <Image
      src={`${router.basePath}/assets/icons/${src}`}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}
