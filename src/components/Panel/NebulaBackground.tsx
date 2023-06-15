import Image from "next/image";
import { useRouter } from "next/router";

export default function NebulaBackground() {
  const router = useRouter();
  return (
    <div className="fixed left-0 top-0 h-screen w-full transition-[1s]">
      <Image
        src={`${router.basePath}/assets/images/Nebula_03.webp`}
        alt="Picture of the author"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "100vh" }}
      />
    </div>
  );
}
