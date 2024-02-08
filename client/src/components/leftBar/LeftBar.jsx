import "./leftBar.scss";

import Friends from "../../assets/profilePic.png";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const LeftBar = () => {

    const { currentUser } = useContext(AuthContext);

    return (
        <div className="leftBar">
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <img src={currentUser.profilePic} alt="Profile picture"></img>
                        <span>{currentUser.name}</span>
                    </div>
                    <div className="item">
                        <img src={Friends} alt="Profile picture"></img>
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <img src={Friends} alt="Profile picture"></img>
                        <span>Groups</span>
                    </div>
                    <div className="item">
                        <img src={Friends} alt="Profile picture"></img>
                        <span>MarketPlace</span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    <div className="item">
                        <img src={Friends} alt="Profile picture"></img>
                        <span>Watch</span>
                    </div>
                    <div className="item">
                        <img src={Friends} alt="Profile picture"></img>
                        <span>Events</span>
                    </div>
                    <div className="item">
                        <img src={Friends} alt="Profile picture"></img>
                        <span>Memories</span>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default LeftBar;