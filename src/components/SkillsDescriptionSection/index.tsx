import AWSBackgroundIcon from "../icons/AWSBackgroundIcon";
import NetBackgroundIcon from "../icons/NetBackgroundIcon";
import NextjsBackgroundIcon from "../icons/NextjsBackgroundIcon";
import NodeBackgroundIcon from "../icons/NodeBackgroundIcon";
import ReactBackgroundIcon from "../icons/ReactBackgroundIcon";
import TailwindBackgroundIcon from "../icons/TailwindBackgroundIcon";
import TSBackgroundIcon from "../icons/TSBackgroundIcon";
import SkillBlock from "./SkillBlock";

export default function SkillDescriptionSection() {
  return (
    <div className="relative z-[50] w-full">
      <div className="container-fluid skills-description--section">
        <SkillBlock
          title="React"
          iconPath="react-icon-green.png"
          backgroundIcon={ReactBackgroundIcon}
          contentText="CONTENT-TEXT"
        />

        <SkillBlock
          title="Node"
          iconPath="nodejs-icon-green.png"
          backgroundIcon={NodeBackgroundIcon}
          contentText="CONTENT-TEXT"
          reverse
        />

        <SkillBlock
          title="NEXTjs"
          iconPath="nextjs-icon-green.png"
          backgroundIcon={NextjsBackgroundIcon}
          contentText="CONTENT-TEXT"
        />

        <SkillBlock
          title="Typescript"
          iconPath="ts-icon-green.png"
          backgroundIcon={TSBackgroundIcon}
          contentText="CONTENT-TEXT"
          reverse
        />

        <SkillBlock
          title="Tailwind"
          iconPath="tailwind-icon-bg.png"
          backgroundIcon={TailwindBackgroundIcon}
          imageClass="top-[150px] left-[158px]"
          contentText="CONTENT-TEXT"
        />

        <SkillBlock
          title="AWS (DevOps)"
          iconPath="aws-icon-green.png"
          backgroundIcon={AWSBackgroundIcon}
          contentText="CONTENT-TEXT"
          reverse
        />

        <SkillBlock
          title=".NET"
          iconPath="net-icon-green.png"
          backgroundIcon={NetBackgroundIcon}
          contentText="CONTENT-TEXT"
        />
      </div>
    </div>
  );
}
