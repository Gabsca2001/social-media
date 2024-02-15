import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import "./login.scss";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';


const Login = () => {

    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    });

    const [err, setErr] = useState(null);

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const navigate = useNavigate();

    const { login } = useContext(AuthContext);

    const [type, setType] = useState("password");

    const [icon, setIcon] = useState(<RemoveRedEyeOutlinedIcon />);

    const handleToggle = () => {
        if (type==='password'){
           setIcon(<VisibilityOffOutlinedIcon />) 
           setType('text')
        } else {
            setIcon(<RemoveRedEyeOutlinedIcon />)
            setType('password')
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          await login(inputs);
          navigate("/")
        } catch (err) {
          setErr(err.response.data);
        }
      };

    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hello World,</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
                        alias totam numquam ipsa exercitationem dignissimos, error nam,
                        consequatur.
                    </p>
                    <span>Don't you have an account</span>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                        <h1>Login</h1>
                        <form>
                            <input type="text" placeholder="Username" name="username" onChange={handleChange}/>
                            <div className="passwordStyle">
                                <input type={type} placeholder="Password" name="password" onChange={handleChange}/>
                                <span className="showPassword" onClick={handleToggle}>{icon}</span>
                            </div>
                            <p>{err && err}</p>
                            <button onClick={handleLogin}>Login</button>
                        </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
