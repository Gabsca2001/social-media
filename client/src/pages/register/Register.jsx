import { Link } from "react-router-dom";
import "./register.scss";
import { useState } from "react";
import axios from "axios";

const Register = () => {

    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
        name: "",
    });

    const [err, setErr] = useState(null);

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
    
        try {
            await axios.post("http://localhost:8800/api/auth/register", inputs);
        } catch (err) {
            if (err.response && err.response.data) {
                // If the error has a response object and data property
                setErr(err.response.data);
            } else {
                // If the error does not have a response object or data property
                setErr("An error occurred");
            }
        }
    };
    

    console.log(err);

    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Hello World,</h1>
                    <p>Lorem ipsum dolor sit amet consecter adipiscingelit.</p>
                    <span>Don't you have an account</span>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                </div>
                <div className="right">
                        <h1>Register</h1>
                        <form>
                            <input 
                                type="text" 
                                name="username" 
                                placeholder="Username *" 
                                onChange={handleChange} 
                                required
                            />
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Email *" 
                                onChange={handleChange} 
                                required
                            />
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Password *" 
                                onChange={handleChange} 
                                required 
                            />
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Name *" 
                                onChange={handleChange} 
                                required 
                            />

                            {err && err}
                            <button onClick={handleClick}>Register</button>
                        </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
