/* eslint-disable react/no-unescaped-entities */

import SkillsImage from "./SkillsImage";
import SkillsText from "./SkillsText";

export default function SkillsSection() {
  return (
    <div className="container-fluid visible relative  max-w-[690px] translate-x-[-5px] translate-y-[5px] text-sm leading-[1.42857143] opacity-100 transition-[1s]">
      <SkillsImage
        src="aws-icon.png"
        alt="AWS Icon"
        width={90}
        height={90}
        className="absolute bottom-[70px] right-[-80px]"
      />
      <SkillsImage
        src="net-icon.png"
        alt=".NET Icon"
        width={100}
        height={90}
        className="absolute bottom-[-100px] left-2/3 -translate-x-1/2"
      />
      <SkillsImage
        src="ts-icon.png"
        alt="TypeScript Icon"
        width={90}
        height={90}
        className="absolute left-0 top-[-90px]"
      />
      <SkillsImage
        src="nextjs-icon.png"
        alt="Nextjs Icon"
        width={90}
        height={90}
        className="absolute left-[-108px] top-2/4"
      />
      <SkillsImage
        src="tailwind-icon.png"
        alt="Tailwind CSS Icon"
        width={120}
        height={90}
        className="absolute bottom-[-80px] left-[100px]"
      />
      <SkillsImage
        src="react-icon.png"
        alt="React Icon"
        width={90}
        height={90}
        className="absolute left-2/4 top-[-60px] -translate-x-2/4 -translate-y-2/4"
      />
      <SkillsImage
        src="nodejs-icon.png"
        alt="Node.js Icon"
        width={90}
        height={90}
        className="absolute right-0 top-[-60px]"
      />
      <h2 className="m-0 mb-[30px] p-0 font-[bold] text-2xl leading-7 text-white">
        My Skills & Experiences
      </h2>
      <SkillsText>
        My journey began as a .NET Backend developer, where I had the
        opportunity to create a comprehensive School ERP based on microservices
        architecture. In this project, I used RabbitMQ as a message broker and
        deployed the application using Docker, which I later transitioned into a
        Kubernetes cluster.
      </SkillsText>
      <SkillsText>
        I then swiftly transitioned into a Full-stack developer role, enhancing
        my skills with frontend technologies like React and Angular. I've worked
        on numerous projects, always eager to contribute in any capacity. I
        particularly excel at creating complex web applications, bringing my
        expertise to solve challenging problems.
      </SkillsText>
      <SkillsText>
        At the end of 2021, I embraced my journey as a DevOps Engineer. Since
        then, I've become proficient in various platforms like AWS, AzureDevOps,
        and Azure Portal. I've also spent considerable time familiarizing myself
        with different automation concepts and practices, constantly expanding
        my DevOps knowledge.
      </SkillsText>
    </div>
  );
}
