import React from "react";
import {
  GITHUB_REPO_NAME,
  GITHUB_USERNAME,
  Github_API_User,
} from "../utils/constants";
import { FiUsers } from "react-icons/fi";
import { BiGitBranch, BiGitRepoForked, BiStar } from "react-icons/bi";

class ProfileRepoClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repoList: [],
    };
  }

  async componentDidMount() {
    const data = await fetch(Github_API_User + GITHUB_USERNAME + "/repos");
    const json = await data.json();
    console.log(json);
    this.setState({ repoList: json });
  }

  render() {
    const { followers } = this.props;
    const [...repoList] = this.state.repoList;
    return (
      <div className="profile-repo-container">
        {repoList
          .filter((repo) => repo.name === GITHUB_REPO_NAME)
          .map((repo) => {
            return (
              <div key={repo.id}>
                <h1>
                  <a href={repo.html_url} target="_blank">
                    {repo.name}
                  </a>
                </h1>
                <h3 className="repo-des">{repo.description}</h3>
                <a href={repo.html_url} target="_blank">
                  <div className="profile-repo-items">
                    <h3>
                      <FiUsers />
                      <span>{followers} Followers</span>
                    </h3>
                    <h3>
                      <BiGitRepoForked />
                      <span>{repo.forks_count} Forks</span>
                    </h3>
                    <h3>
                      <BiStar />
                      <span>{repo.stargazers_count} Stars</span>
                    </h3>
                  </div>
                </a>
              </div>
            );
          })}
      </div>
    );
  }
}

export default ProfileRepoClass;
