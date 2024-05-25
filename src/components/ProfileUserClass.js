import React from "react";
import SocialProfileClass from "./SocialProfileClass";

class ProfileUserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, avatar_url, bio } = this.props.data;
    return (
      <div className="profile-user-card">
        <img
          className="profile-user-img"
          src={avatar_url}
          alt={name}
          title={name}
        />
        <p className="profile-user-bio">{bio}</p>
        <SocialProfileClass />
      </div>
    );
  }
}

export default ProfileUserClass;
