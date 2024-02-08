import "./rightBar.scss";

const RightBar = () => {
    return (
        <div className="rightBar">
            <div className="container">
                <div className="item">
                    <span>Suggestions For You</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Profile picture"></img>
                            <span>John Doe</span>
                        </div>
                        <div className="buttons">
                            <button>Add</button>
                            <button>Remove</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Profile picture"></img>
                            <span>John Doe</span>
                        </div>
                        <div className="buttons">
                            <button>Add</button>
                            <button>Remove</button>
                        </div>
                    </div>
                    
                </div>
                <div className="item">
                    <span>Online Friends</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Profile picture"></img>
                            <p>
                                <span>John Doe</span>
                            </p>
                        </div>
                        <span>time...</span>
                    </div>
                </div>
                <div className="item">
                    <span>Online Friends</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Profile picture"></img>
                            <p>
                                <div className="online" />
                                <span>John Doe</span>
                            </p>
                        </div>
                        <span>time...</span>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default RightBar;