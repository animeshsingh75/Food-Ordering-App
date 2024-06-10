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
      <div className="flex flex-col items-center justify-center overflow-hidden shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.71)] h-full rounded-[5px] background: #fff">
        {repoList
          .filter((repo) => repo.name === GITHUB_REPO_NAME)
          .map((repo) => {
            return (
              <div
                key={repo.id}
                className="flex flex-col items-center justify-center"
              >
                <h1 className="flex items-center justify-center shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.71)] text-dark-orange mt-5 mb-0 mx-auto px-5 py-2.5 rounded-[5px] background: #fafafa">
                  <a
                    className="hover:text-orange hover:scale-[1.1]"
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repo.name}
                  </a>
                </h1>
                <h3 className="text-light-text-color mt-[30px] mb-[15px] mx-10">
                  {repo.description}
                </h3>

                <div className="flex items-center justify-between text-light-text-color mx-2.5 my-5">
                  <h3 className="hover:text-orange hover:scale-[1.02]">
                    <a
                      href={html_url}
                      target="_blank"
                      className="flex items-center justify-center mx-5 my-0 hover:text-orange hover:scale-[1.02]"
                      rel="noopener noreferrer"
                    >
                      <FiUsers />
                      <span className="pl-[5px]">{followers} Followers</span>
                    </a>
                  </h3>
                  <h3 className="hover:text-orange hover:scale-[1.02]">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      className="flex items-center justify-center mx-5 my-0 hover:text-orange hover:scale-[1.02]"
                      rel="noopener noreferrer"
                    >
                      <BiGitRepoForked />
                      <span className="pl-[5px]">{repo.forks_count} Forks</span>
                    </a>
                  </h3>
                  <h3 className="hover:text-orange hover:scale-[1.02]">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      className="flex items-center justify-center mx-5 my-0 hover:text-orange hover:scale-[1.02]"
                      rel="noopener noreferrer"
                    >
                      <BiStar />
                      <span className="pl-[5px]">
                        {repo.stargazers_count} Stars
                      </span>
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
