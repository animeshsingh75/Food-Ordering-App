import React from "react";
import SocialProfileClass from "./SocialProfileClass";

class ProfileUserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, html_url, avatar_url, bio } = this.props.data;
    return (
      <div className="profile-user-card">
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          <img
            className="profile-user-img"
            src={avatar_url}
            alt={name}
            title={name}
          />
        </a>
        <p className="profile-user-bio">{bio}</p>
        <SocialProfileClass />
      </div>
    );
  }
}

export default ProfileUserClass;
