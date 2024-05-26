import React from "react";
import { GITHUB_USERNAME, Github_API_User } from "../utils/constants";
import ProfileUserClass from "./ProfileUserClass";
import ProfileRepoClass from "./ProfileRepoClass";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        userInfo: null,
        repoInfo: null,
      },
    };
  }
  async componentDidMount() {
    try {
      const data = await Promise.all([
        fetch(Github_API_User + GITHUB_USERNAME),
        fetch(Github_API_User + GITHUB_USERNAME + "/repos"),
      ]);
      const json = await Promise.all(data.map((data) => data.json()));
      this.setState({ userInfo: json[0], repoInfo: json[1] });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { userInfo, repoInfo } = this.state;
    return (
      <>
        {userInfo && repoInfo ? (
          <div className="profile-class-container">
            <div className="profile-container">
              <h1 className="profile-title">About Me</h1>
              <ProfileUserClass data={userInfo} />
            </div>
            <div className="repo-container">
              <h1 className="repo-title">
                Food<span>Fire</span> App Repository
              </h1>
              <ProfileRepoClass userInfo={userInfo} repoInfo={repoInfo} />
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default Profile;
