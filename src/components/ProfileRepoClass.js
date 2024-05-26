import React from "react";
import { GITHUB_REPO_NAME } from "../utils/constants";
import { FiUsers } from "react-icons/fi";
import { BiGitRepoForked, BiStar } from "react-icons/bi";

class ProfileRepoClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      userInfo: { followers, html_url },
      repoInfo: repoList,
    } = this.props;
    console.log(repoList);
    return (
      <div className="profile-repo-container">
        {repoList
          .filter((repo) => repo.name === GITHUB_REPO_NAME)
          .map((repo) => {
            return (
              <div key={repo.id} className="profile-repo">
                <h1>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repo.name}
                  </a>
                </h1>
                <h3 className="repo-des">{repo.description}</h3>

                <div className="profile-repo-items">
                  <h3>
                    <a
                      href={html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiUsers />
                      <span>{followers} Followers</span>
                    </a>
                  </h3>
                  <h3>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BiGitRepoForked />
                      <span>{repo.forks_count} Forks</span>
                    </a>
                  </h3>
                  <h3>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BiStar />
                      <span>{repo.stargazers_count} Stars</span>
                    </a>
                  </h3>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default ProfileRepoClass;
