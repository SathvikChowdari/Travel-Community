import { useSearchParams } from "react-router-dom";
import Posts from "../components/Posts";
import Photos from "../components/Photos";
import Videos from "../components/Videos";
import { useState } from "react";

const Profile = () => {
  const [currentPanel, setCurrentPanel] = useState("posts");
  function handlePanelSwitch(e) {
    setCurrentPanel(e.target.innerText.toLowerCase());
  }

 
  return (
    <div className="profile">
      <div className="left">
        <img
          src={
            "https://bestprofilepictures.com/wp-content/uploads/2021/08/Amazing-Profile-Picture-for-Facebook.jpg"
          }
          alt="profile"
        />
        <h2>Username</h2>
        <div className="follow">
          <p>number followers</p>
          <p>number following</p>
        </div>
        <div className="details">
          <h3>Details</h3>
          <table className="details-table">
            <tr>
              <td>Email:</td>
              <td>{"Email"}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{"Email"}</td>
            </tr>
            <tr>
              <td>Mobile Number:</td>
              <td>{"Mobile"}</td>
            </tr>
          </table>
          <div className="votes">
            <p>Upvotes {"icon"}</p>
            <p>Downvotes {"icon"}</p>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="right-top">
          <button onClick={handlePanelSwitch}>Posts</button>
          <button onClick={handlePanelSwitch}>Photos</button>
          <button onClick={handlePanelSwitch}>Videos</button>
        </div>
        <div className="right-bottom">
          {currentPanel === "posts" && <Posts />}
          {currentPanel === "photos" && <Photos />}
          {currentPanel === "videos" && <Videos />}
        </div>
      </div>
    </div>
  );
};
export default Profile;
