const ProfileCard = ({ user }) => {
    return (
        <div className="profile-card">
            <div className="profile-card-avatar">
                <p>followers</p>
                <img src="https://bestprofilepictures.com/wp-content/uploads/2021/08/Amazing-Profile-Picture-for-Facebook.jpg" alt="avatar" />
                <p>following</p>
        </div>
        <div className="profile-card-details">
            <h1>username</h1>
            <p>Hello,I'm traveler open to invitations</p>
        </div>
        </div>
    );
    }
export default ProfileCard;
