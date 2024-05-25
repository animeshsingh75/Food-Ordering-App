import React from "react";
import { GITHUB_USERNAME, Github_API_User } from "../utils/constants";
import ProfileUserClass from "./ProfileUserClass";
import ProfileRepoClass from "./ProfileRepoClass";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        bio: "",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch(Github_API_User + GITHUB_USERNAME);
    const json = await data.json();
    this.setState({ userInfo: json });
  }
  render() {
    const { userInfo } = this.state;
    return (
      <div className="profile-class-container">
        <div className="profile-container">
          <h1 className="profile-title">About Me</h1>
          <ProfileUserClass data={userInfo} />
        </div>
        <div className="repo-container">
          <h1 className="repo-title">
            Food<span>Fire</span> App Repository
          </h1>
          <ProfileRepoClass followers={userInfo.followers} />
        </div>
      </div>
    );
  }
}

export default Profile;
