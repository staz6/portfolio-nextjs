import AWSBackgroundIcon from "../icons/AWSBackgroundIcon";
import NetBackgroundIcon from "../icons/NetBackgroundIcon";
import NextjsBackgroundIcon from "../icons/NextjsBackgroundIcon";
import NodeBackgroundIcon from "../icons/NodeBackgroundIcon";
import ReactBackgroundIcon from "../icons/ReactBackgroundIcon";
import TailwindBackgroundIcon from "../icons/TailwindBackgroundIcon";
import TSBackgroundIcon from "../icons/TSBackgroundIcon";
import SkillBlock from "./SkillBlock";

export default function SkillDescriptionSection() {
  const skills = [
    {
      title: "React",
      iconPath: "react-icon-green.png",
      backgroundIcon: ReactBackgroundIcon,
      contentText:
        "Used in numerous projects, from AI-powered e-learning platforms to charity initiatives. I enjoy using its component-based architecture to build interactive user interfaces.",
    },
    {
      title: "Node",
      iconPath: "nodejs-icon-green.png",
      backgroundIcon: NodeBackgroundIcon,
      contentText:
        "Leveraged in various projects to develop fast, scalable network applications. My experience extends from creating APIs to handling database operations.",
      reverse: true,
    },
    {
      title: "Next.js",
      iconPath: "nextjs-icon-green.png",
      backgroundIcon: NextjsBackgroundIcon,
      contentText:
        "Employed in several applications, appreciating its capabilities for server-side rendering, static site generation, and API routes.",
    },
    {
      title: "Typescript",
      iconPath: "ts-icon-green.png",
      backgroundIcon: TSBackgroundIcon,
      contentText:
        "Utilized in numerous JavaScript projects to enhance development efficiency, improve readability, and catch errors early in the development process.",
      reverse: true,
    },
    {
      title: "Tailwind",
      iconPath: "tailwind-icon-bg.png",
      backgroundIcon: TailwindBackgroundIcon,
      imageClass: "top-[150px] left-[158px]",
      contentText:
        "Used frequently to create custom user interfaces, appreciating its utility-first approach that enables rapid UI development.",
    },
    {
      title: "AWS (DevOps)",
      iconPath: "aws-icon-green.png",
      backgroundIcon: AWSBackgroundIcon,
      contentText:
        "Regularly employed for application hosting, managing databases, and handling user authentication. I've worked extensively with services like Lambda, Cognito, and DynamoDB.",
      reverse: true,
    },
    {
      title: ".NET",
      iconPath: "net-icon-green.png",
      backgroundIcon: NetBackgroundIcon,
      contentText:
        "Began my career with .NET, contributing to the development of an ERP solution using a microservices architecture. I've also used it in several other backend applications.",
    },
  ];

  return (
    <div className="relative z-[50] w-full">
      <div className="container-fluid skills-description--section">
        {skills.map((skill, index) => (
          <SkillBlock
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            title={skill.title}
            iconPath={skill.iconPath}
            backgroundIcon={skill.backgroundIcon}
            contentText={skill.contentText}
            reverse={skill.reverse}
            imageClass={skill.imageClass}
          />
        ))}
      </div>
    </div>
  );
}
