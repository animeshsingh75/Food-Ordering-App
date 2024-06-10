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
          <div className="flex flex-wrap justify-around">
            <div className="flex-[0.8] overflow-hidden shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.71)] m-5 px-2.5 py-5 rounded-[5px] background: #fff">
              <h1 className="text-[28px] leading-[1.1] justify-center text-center text-text-color overflow-y-hidden">
                About Me
              </h1>
              <ProfileUserClass data={userInfo} />
            </div>
            <div className="flex-[1.2] overflow-hidden shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.71)] m-5 px-2.5 py-5 rounded-[5px] background: #fff">
              <h1 className="text-[28px] leading-[1.1] justify-center text-center text-text-color overflow-y-hidden mb-[30px]">
                Food<span className="text-dark-orange">Fire</span> App
                Repository
              </h1>
              <ProfileRepoClass userInfo={userInfo} repoInfo={repoInfo} />
            </div>
          </div>
        ) : (
          <div className="text-center mt-[120px] mb-0 mx-auto">
            <h1 className="text-[40px] text-text-color">Loading...</h1>
          </div>
        )}
      </>
    );
  }
}

export default Profile;
