import React from "react";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, X_URL } from "../utils/constants";
import { SiGithub, SiGmail, SiLinkedin, SiX } from "react-icons/si";

class SocialProfileClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="w-full">
        <a
          href={LINKEDIN_URL}
          title="Connect with me on Linkedin"
          className="mx-2.5 my-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="text-footer-bg cursor-pointer inline-block text-[1.4rem] h-[2.6rem] w-[2.6rem] leading-[3rem] overflow-y-hidden rounded-[50%] hover:scale-[1.02 bg-[#0a66c2]">
            <SiLinkedin
              className="align-baseline inline-block"
              title="Connect with me on Linkedin"
            />
          </i>
        </a>
        <a
          href={X_URL}
          title="Follow me on X"
          className="mx-2.5 my-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bg-text-color text-footer-bg cursor-pointer inline-block text-[1.4rem] h-[2.6rem] w-[2.6rem] leading-[3rem] overflow-y-hidden rounded-[50%] hover:scale-[1.02]">
            <SiX
              className="align-baseline inline-block"
              title="Follow me on Twitter"
            />
          </i>
        </a>
        <a
          href={GITHUB_URL}
          title="Follow me on Github"
          className="mx-2.5 my-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bg-[#333] text-footer-bg cursor-pointer inline-block text-[1.4rem] h-[2.6rem] w-[2.6rem] leading-[3rem] overflow-y-hidden rounded-[50%] hover:scale-[1.02]">
            <SiGithub
              className="align-baseline inline-block"
              title="Follow me on Github"
            />
          </i>
        </a>
        <a
          href={EMAIL}
          title="Any Query! Mail me"
          className="mx-2.5 my-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bg-[#ea4335] text-footer-bg cursor-pointer inline-block text-[1.4rem] h-[2.6rem] w-[2.6rem] leading-[3rem] overflow-y-hidden rounded-[50%] hover:scale-[1.02]">
            <SiGmail
              className="align-baseline inline-block"
              title="Any Query! Mail me"
            />
          </i>
        </a>
      </div>
    );
  }
}

export default SocialProfileClass;
