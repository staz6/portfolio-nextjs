import Image from "next/image";
import { useRouter } from "next/router";

export default function NebulaBackground({ transform }: { transform: string }) {
  const router = useRouter();
  return (
    <div
      className="fixed left-0 top-0 h-screen w-full transition-all duration-1000 ease-in-out"
      style={{ transform }}
    >
      <Image
        src={`${router.basePath}/assets/images/Nebula_03.webp`}
        alt="Picture of the author"
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: "100%",
          height: "100vh",
          transform: "translateX(4.83333px) translateY(-4.83333px)",
        }}
      />
    </div>
  );
}
