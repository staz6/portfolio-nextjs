import { useRouter } from "next/router";

const experienceSectionContainer =
  "items-center md:flex w-full flex-row gap-x-6 border-t border-solid border-t-[#87BA34] pb-9";
const companyTitle =
  "mx-0 mb-2.5 mt-2 box-border text-[1.4rem] font-light leading-10 text-white";
const companyTitleLink = "text-white hover:border-white";
const companyDisc =
  "mx-0 mb-2.5 mt-[15px] box-border text-base font-normal not-italic leading-6 text-slate-50";
export default function ExperienceSection() {
  const router = useRouter();
  return (
    <div className="container-fluid relative z-10 mt-10">
      <h2 className="m-0 mb-[15px] p-0 font-[bold] text-2xl leading-6 text-[#87BA34]">
        Comapnies who helped me grow
      </h2>
      <div className={experienceSectionContainer}>
        <div>
          <h3 className={companyTitle}>
            <a
              className={companyTitleLink}
              href="https://www.upwork.com"
              target="_blank"
            >
              Upwork
            </a>
          </h3>
          <p className={`md:w-[550px] lg:w-[580px] ${companyDisc}`}>
            While working full time as a freelance Software developer on Upwork,
            I provided vendor services to enterprise-level organizations at
            MK-Consulting and GR-Digital. This included working on several
            React-based applications, writing unit and integration tests,
            end-to-end testing with Cypress, creating new endpoints for backend
            services, and developing the front end of a Crypto exchange
            platform.
          </p>
        </div>
        <a
          href="https://www.upwork.com"
          target="_blank"
          className="hover:border-none"
        >
          <img
            src={`${router.basePath}/assets/icons/upwork-logo.svg`}
            alt="upwork logo"
            width={248}
            height={88}
          />
        </a>
      </div>

      <div className={experienceSectionContainer}>
        <div>
          <h3 className={companyTitle}>
            <a
              className={companyTitleLink}
              href="https://quantumhub.ca/"
              target="_blank"
            >
              Quantum-hub
            </a>
          </h3>
          <p className={`md:w-[600px] lg:w-[650px] ${companyDisc}`}>
            Serving as a Full-stack developer for QuantumHub, I worked on
            various MERN stack projects, from AI modeling for news feed
            generation to insurance claim solutions, website and infrastructure
            optimization, and a .NET backend for a charity initiative.
            Currently, I am working on a mobile app using React Native, a
            serverless backend for an IoT initiative, and an oauth gateway using
            AWS Cognito and dynamodb fine-grained access control.
          </p>
        </div>
        <a
          className="hover:border-none"
          href="https://quantumhub.ca/"
          target="_blank"
        >
          <img
            src={`${router.basePath}/assets/icons/qh-logo.webp`}
            alt="upwork logo"
            height={88}
          />
        </a>
      </div>

      <div className={experienceSectionContainer}>
        <div>
          <h3 className={companyTitle}>
            <a
              className={companyTitleLink}
              href="https://nastechltd.co/#"
              target="_blank"
            >
              Nastech
            </a>
          </h3>
          <p className={`md:w-[640px] lg:w-[740px] ${companyDisc}`}>
            As a part of the team at NASTECH, a leading IT solutions and
            services provider, I contributed to the development of an office ERP
            based on microservices architecture and led the development and
            project management of a B2B e-commerce platform.
          </p>
        </div>
        <a
          className="hover:border-none"
          href="https://nastechltd.co/#"
          target="_blank"
        >
          <img
            src={`${router.basePath}/assets/icons/nastech-logo.svg`}
            alt="upwork logo"
            width={248}
            height={88}
          />
        </a>
      </div>
    </div>
  );
}
