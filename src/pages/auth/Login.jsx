import "./auth.css";
import {Link} from "react-router-dom";
import {useState} from "react";
import { useAuth } from "../../context";

export function Login(){
    const {loginUser} = useAuth();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });
    const testCredentials = {
        email: "hello@world.com",
        password: "helloworld"
    };
    const [errMsg, setErrMsg] = useState("");

    const passwordVisibilityHandler = () => setIsPasswordVisible(prev=> !prev);

    const loginHandler = () => {
        if(!credentials.email || !credentials.password){
            setErrMsg("Enter credentials");
        }else{
            loginUser(credentials.email, credentials.password);
        }
    }

    return (
        <div className="container-auth">
            <div className="form box-shadow">
            <h3>Login</h3>
            {errMsg && <p className="err-msg">{errMsg}</p>}
            <div className="input input-text">
                <label>Email address</label>
                <input type="email" value={credentials.email} 
                placeholder="example@gmail.com" onChange={(e)=>{setCredentials(prev=>({...prev, email:e.target.value}))}} />
            </div>
            <div className="input input-text">
                <label>Password</label>
                <div className="password-wrapper">
                    <input type={isPasswordVisible?"text":"password"} 
                    value={credentials.password} placeholder="password" onChange={(e)=>{setCredentials(prev=>({...prev, password:e.target.value}))}} />
                    <button onClick={passwordVisibilityHandler}>
                    {isPasswordVisible
                    ? <i className="far fa-eye-slash"></i>
                    : <i className="far fa-eye"></i>}
                    </button>
                </div>
            </div>
            <div className="input-link-grp">
                <div className="input input-checkbox-radio">
                    <label><input type="checkbox" />Remember me</label>
                </div>
                <button className="btn btn-primary-link">Forgot your Password?</button>
            </div>
            <button className="btn btn-primary" onClick={loginHandler} >Login</button>
            <button className="btn btn-primary-outline" onClick={()=>setCredentials(testCredentials)}>Use Guest Credentials</button>
            <Link to="/signup" className="btn btn-secondary-icon-text-no-border">Create New Account <i className="fas fa-chevron-right"></i></Link>
            </div>
        </div>
    );
}