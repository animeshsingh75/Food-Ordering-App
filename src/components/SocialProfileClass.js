import React from "react";
import {
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  Linkedin_Link,
  X_URL,
} from "../utils/constants";
import { SiGithub, SiGmail, SiLinkedin, SiX } from "react-icons/si";

class SocialProfileClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="social-media-container">
        <a href={LINKEDIN_URL} className="icon-button linkedin" target="_blank">
          <i>
            <SiLinkedin />
          </i>
        </a>
        <a href={X_URL} className="icon-button x" target="_blank">
          <i>
            <SiX />
          </i>
        </a>
        <a href={GITHUB_URL} className="icon-button github" target="_blank">
          <i>
            <SiGithub />
          </i>
        </a>
        <a href={EMAIL} className="icon-button email">
          <i>
            <SiGmail />
          </i>
        </a>
      </div>
    );
  }
}

export default SocialProfileClass;
