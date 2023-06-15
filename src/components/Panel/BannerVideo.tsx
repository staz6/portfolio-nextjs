import { useRouter } from "next/router";

export default function BannerVideo() {
  const router = useRouter();
  return (
    <video
      playsInline
      autoPlay
      muted
      className="absolute left-0 top-0 h-full w-full object-cover opacity-60"
    >
      <source
        src={`${router.basePath}/assets/videos/coding.mp4`}
        type="video/mp4"
      />
    </video>
  );
}
