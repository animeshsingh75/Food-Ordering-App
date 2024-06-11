import React from "react";
import SocialProfileClass from "./SocialProfileClass";

class ProfileUserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, html_url, avatar_url, bio } = this.props.data;
    return (
      <div className="flex flex-col justify-center items-center gap-5 mt-5">
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          <img
            className="w-[150px] h-[150px] align-middle cursor-pointer m-[5px] rounded-[50%] border-none hover:scale-[1.02]"
            src={avatar_url}
            alt={name}
            title={name}
          />
        </a>
        <p className="text-lg text-center text-[#575757] mx-2.5 my-0">{bio}</p>
        <SocialProfileClass />
      </div>
    );
  }
}

export default ProfileUserClass;
