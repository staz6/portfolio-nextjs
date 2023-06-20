import Image from "next/image";
import { useRouter } from "next/router";

interface SkillBlockProps {
  title: string;
  iconPath: string;
  backgroundIcon: React.FunctionComponent;
  reverse?: boolean;
  contentText: string;
  imageClass?: string;
}

const SkillBlock: React.FC<SkillBlockProps> = ({
  title,
  iconPath,
  backgroundIcon: BackgroundIcon,
  reverse = false,
  contentText,
  imageClass = "",
}) => {
  const router = useRouter();

  return (
    <div
      className={`flex h-[50vh] w-full ${
        reverse ? "flex-row-reverse" : ""
      } items-center justify-center gap-x-8 lg:justify-between`}
    >
      <div>
        <h2 className="mb-4 text-[30px] font-bold leading-[34px] text-white">
          {title}
        </h2>
        <p className="max-w-[350px] text-base leading-6 text-white">
          {contentText}
        </p>
      </div>
      <div className="relative h-[350px] w-[350px]   lg:scale-125">
        <BackgroundIcon />
        <Image
          src={`${router.basePath}/assets/icons/${iconPath}`}
          alt={`${title} icon`}
          width={350}
          height={350}
          className={`absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 ${imageClass}`}
        />
      </div>
    </div>
  );
};

export default SkillBlock;
