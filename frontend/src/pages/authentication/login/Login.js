import React, { useState } from 'react'
// import './login.css'
import {Link,useNavigate } from 'react-router-dom';

const Login = () => {
    
    let navigate = useNavigate();
    const [admin,setAdmin]=useState(false);
    const adminClick=()=>{
        setAdmin(!admin);
    }
    const submit=()=>{
        if(admin){
            navigate('/adminHome')
        }
        else{
            navigate('/userHome')
        }
    }
    return (

        <div className="changeBackground text-black" >
            <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form action="">
                <p>
                    <label className="text-black">Username or email address</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p className="mt-8">
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p className="mt-8">
                        <input type="checkbox" name="checkbox" id="checkbox"  onClick={adminClick} /> <span>admin </span>.
                    </p>
                <p>
                    <button id="sub_btn" className="mt-8" onClick={submit}>Login</button>
                </p>
            </form>
            <footer>
                <p className="text-white">First time? <Link to="/register">Create an account</Link>.</p>
                <p className="text-white"><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
        </div>
    )
}

export default Login;