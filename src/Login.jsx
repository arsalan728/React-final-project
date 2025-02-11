import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./Store";

function Login() {
    const userName = useRef(null);
    const userPassword = useRef(null);
    let dispatch= useDispatch();
    let navigate=useNavigate();
    

    const validatingCredentials=()=>{
    if(userName.current.value==="Arsalan"&& userPassword.current.value==="Arsalan@123"){
        dispatch(login(userName.current.value));
        navigate("/home");
    }
    else{
        alert(" You Have Entered Wrong Credentials");
    }
    }
    return (
        <div className="login-container">
            <h2>Login</h2>
            <div className="input-group">
                <label>User Name</label>
                <input type="text" ref={userName} placeholder="Enter Name" />
            </div>
            <div className="input-group">
                <label>Password</label>
                <input type="password" ref={userPassword} placeholder="Enter Password" />
            </div>
            <button className="login-btn" onClick={()=>validatingCredentials()} >Login</button>
        </div>
    );
}

export default Login;
