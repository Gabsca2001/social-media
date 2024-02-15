import { Link } from "react-router-dom";
import "./register.scss";
import { useState } from "react";
import axios from "axios";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const Register = () => {

    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
        name: "",
    });

    const [err, setErr] = useState(null);

    const [errorMessage, setErrorMessage] = useState(null);

    const handleChange = (e) => {

        //validate parameters
        const { name, value } = e.target;
        let errorMessage = '';

        switch (name) {
            case 'username':
                if (value.length < 3) {
                    errorMessage = 'Username must be at least 3 characters long';
                }
                break;
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    errorMessage = 'Invalid email address';
                }
                break;
            case 'password':
                const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{}|;:'",.<>?]).{8,}$/;
                if (!passwordRegex.test(value)) {
                    errorMessage = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character';
                }
                break;
            case 'name':
                if (value.trim() === '') {
                    errorMessage = 'Name is required';
                }
                break;
            default:
                break;
        }

        // Only update state if there is no error message
        if (!errorMessage) {
            setInputs((prev) => ({ ...prev, [name]: value }));
        }

        setErrorMessage(errorMessage);        

    };

    const validateInputs = () => {
        let errorMessage = '';
    
        // Check username
        if (inputs.username.length < 3) {
            errorMessage = 'Username must be at least 3 characters long';
        }
        
        // Check email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(inputs.email)) {
            errorMessage = 'Invalid email address';
        }
    
        // Check password
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{}|;:'",.<>?]).{8,}$/;
        if (!passwordRegex.test(inputs.password)) {
            errorMessage = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character';
        }
    
        // Check name
        if (inputs.name.trim() === '') {
            errorMessage = 'Name is required';
        }
    
        return errorMessage;
    };

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

    const handleClick = async (e) => {
        e.preventDefault();
        
        // Validate inputs
        const errorMessage = validateInputs();
        if (errorMessage) {
            setErrorMessage(errorMessage);
            return;
        }

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
                            <div className="passwordStyle">
                                <input 
                                    type={type} 
                                    placeholder="Password *" 
                                    name="password" 
                                    onChange={handleChange}
                                    required
                                />
                                <span 
                                    className="showPassword" 
                                    onClick={handleToggle}
                                >
                                    {icon}
                                </span>
                            </div>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Name *" 
                                onChange={handleChange} 
                                required 
                            />

                            {err && <p style={{ color: 'red'}}>{err}</p>}
                            {errorMessage && <p style={{ color : 'red'}}>{errorMessage}</p>}
                            <button onClick={handleClick}>Register</button>
                        </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
