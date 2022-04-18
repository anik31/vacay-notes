import { Link } from "react-router-dom";
import "./auth.css";
import {useState} from "react";
import { useAuth } from "../../context";

export function Signup(){
    const {signUpUser} = useAuth();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
    const [credentials, setCredentials] = useState({
        email: "",
        firstName: "",
        lastName: "",
        password: ""
    });
    const [confirmPass, setConfirmPass] = useState("");
    const [errMsg, setErrMsg] = useState("");

    const passwordVisibilityHandler = () => setIsPasswordVisible(prev=> !prev);
    const confirmPasswordVisibilityHandler = () => setIsConfirmPasswordVisible(prev=> !prev);
    
    const signUpHandler = () => {
        if(!credentials.email || !credentials.password || !credentials.firstName || !credentials.lastName || !confirmPass){
            setErrMsg("Kindly fill all the fields");
        }else if(credentials.password !== confirmPass){
            setErrMsg("Passwords donot match");
        }else{
            signUpUser(credentials.email, credentials.password);
        }
    }

    return (
        <div className="container-auth">
        <div className="form box-shadow">
        <h3>Signup</h3>
        {errMsg && <p className="err-msg">{errMsg}</p>}
        <div className="input input-text">
            <label>Email address</label>
            <input type="email" value={credentials.email} placeholder="example@gmail.com" onChange={(e)=>setCredentials(prev=>({...prev, email: e.target.value}))} />
        </div>
        <div className="input input-text">
            <label>First name</label>
            <input type="text" value={credentials.firstName} placeholder="First name" onChange={(e)=>setCredentials(prev=>({...prev, firstName: e.target.value}))} />
        </div>
        <div className="input input-text">
            <label>Last name</label>
            <input type="text" value={credentials.lastName} placeholder="Last name" onChange={(e)=>setCredentials(prev=>({...prev, lastName: e.target.value}))} />
        </div>
        <div className="input input-text">
            <label>Password</label>
            <div className="password-wrapper">
            <input type={isPasswordVisible?"text":"password"} value={credentials.password} placeholder="password" onChange={(e)=>setCredentials(prev=>({...prev, password: e.target.value}))} />
                <button onClick={passwordVisibilityHandler}>
                {isPasswordVisible
                ? <i className="far fa-eye-slash"></i>
                : <i className="far fa-eye"></i>}
                </button>
            </div>
        </div>
        <div className="input input-text">
            <label>Confirm password</label>
            <div className="password-wrapper">
            <input type={isConfirmPasswordVisible?"text":"password"} value={confirmPass} placeholder="confirm password" onChange={(e)=>setConfirmPass(e.target.value)} />
                <button onClick={confirmPasswordVisibilityHandler}>
                {isConfirmPasswordVisible
                ? <i className="far fa-eye-slash"></i>
                : <i className="far fa-eye"></i>}
                </button>
            </div>
        </div>
        <div className="input input-checkbox-radio">
            <label><input type="checkbox" />I accept all terms & conditions</label>
        </div>
        <button className="btn btn-primary" onClick={signUpHandler}>Create New Account</button>
        <Link to="/login" className="btn btn-secondary-icon-text-no-border">Already have an account <i className="fas fa-chevron-right"></i></Link>
        </div>
        </div>
    );
}