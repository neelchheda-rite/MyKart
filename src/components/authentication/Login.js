import React, {useState} from 'react';
import {auth, googleAuthProvider} from "../../firebase";
// import {toast} from 'react-toastify';
// import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [loading, setLoading] = useState(false);

    let navigate=useNavigate();
    let dispatch=useDispatch();

    const loginForm = () => <>
        <h2>
            Login
        </h2>
        <div className="col-md align-self-center mt-2"
            style={
                {
                    display: "flex",
                    justifyContent: "center"
                }
        }>

            <form onSubmit={handleLoginSubmit}>
                <div className="form-group">
                <input type='email'
                    onChange={
                        (event) => setEmail(event.target.value)
                    }
                    className='form-control'
                    autoFocus
                    style={
                        {width: "25rem"}
                    }
                    value={email} placeholder='Email'/>
                </div>

                <div className="form-group mt-2">
                <input type='password'
                    onChange={
                        (event) => setPassword(event.target.value)
                    }
                    className='form-control '
                    
                    style={
                        {width: "25rem"}
                    }
                    value={password} placeholder='Password'/>
                </div>
                <div className="row justify-content-center">
                <button onClick={handleLoginSubmit}  style={
                        {width: "25rem"}
                    } className='btn btn-raised btn-outline-primary mt-3' >Login with Email & Password</button>
                </div>
                <div className="row justify-content-center">
                <button onClick={googleLogin} style={
                        {width: "25rem",justifyContent:"center"}
                    } className='btn btn-raised btn-outline-danger mt-3' >Google Login</button>
                </div>
            </form>
        </div>
    </>

    const googleLogin= async(event)=>{
        auth.signInWithPopup(googleAuthProvider).then(async(result)=>{
            const {user}=result;
            const idTokenResult=await user.getIdTokenResult();
            dispatch({
                type: "LOGGED_IN_USER",
                payload: {
                    email: user.email,
                    token: idTokenResult.token
                }
            });
            navigate('/');
        })
    }


    const handleLoginSubmit = async (event) => {
        
        try {
            event.preventDefault();
            // setLoading(true);
            await auth.signInWithEmailAndPassword(email,password);
            navigate('/') ;     
        }catch(error){
            // setLoading(false);
            console.log(error.message);
        }
    }


    return (
        <div className="container text-center mt-5 p-5">
            <div className="row ">
                {
                loginForm()
            } </div>
        </div>
    )
}
