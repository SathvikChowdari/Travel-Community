import ProfileCard from "../components/ProfileCard";
import TextInput from "../components/TextInput";
import GroupList from "../components/Group-list";
import { Route, Routes } from "react-router-dom";
import GroupTemplate from "../components/GroupTemplate";
const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-page-left">
        <div className="profile-card">
          <ProfileCard />
        </div>

        <div className="communitites">
            <h2>Communities</h2>
        </div>
      </div>
      <div className="home-page-right">
        
        {/* <GroupList /> */}
        <Routes>
        <Route path='/' element={<GroupList/>}></Route>
        {/* <Route path='/group/:groupName' element={}></Route> */}
       </Routes>
      </div>
    </div>
  );
};
export default HomePage;
