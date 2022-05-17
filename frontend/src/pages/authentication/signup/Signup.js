import React,{useState} from 'react'
import {Link,useNavigate } from 'react-router-dom';

const Signup = () => {
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
        <div>
            <div className="text-center m-5-auto text-black">
                <h2>Join us</h2>
                <h5>Create your personal account</h5>
                <form action="">
                    <p className="mt-8">
                        <label>Username</label><br />
                        <input type="text" name="first_name" required />
                    </p>
                    <p className="mt-8">
                        <label>Email address</label><br />
                        <input type="email" name="email" required />
                    </p>
                    <p className="mt-8">
                        <label>Password</label><br />
                        <input type="password" name="password" requiredc />
                    </p>
                    <p className="mt-8">
                        <input type="checkbox" name="checkbox" id="checkbox"  onClick={adminClick} /> <span>admin </span>.
                    </p>
                    <p className="mt-8">
                        <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                    </p>
                    <p className="mt-8">
                        <button id="sub_btn" onClick={submit}>Register</button>
                    </p>
                </form>
                <footer>
                    <p className="text-white"><Link to="/">Back to Homepage</Link>.</p>
                </footer>
            </div>
        </div>
    )
}

export default Signup