import React from "react";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, X_URL } from "../utils/constants";
import { SiGithub, SiGmail, SiLinkedin, SiX } from "react-icons/si";

class SocialProfileClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="social-media-container">
        <a
          href={LINKEDIN_URL}
          title="Connect with me on Linkedin"
          className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>
            <SiLinkedin title="Connect with me on Linkedin" />
          </i>
        </a>
        <a
          href={X_URL}
          title="Follow me on X"
          className="icon-button x"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>
            <SiX title="Follow me on Twitter" />
          </i>
        </a>
        <a
          href={GITHUB_URL}
          title="Follow me on Github"
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>
            <SiGithub title="Follow me on Github" />
          </i>
        </a>
        <a
          href={EMAIL}
          title="Any Query! Mail me"
          className="icon-button email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>
            <SiGmail title="Any Query! Mail me" />
          </i>
        </a>
      </div>
    );
  }
}

export default SocialProfileClass;
