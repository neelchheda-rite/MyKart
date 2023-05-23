import React, {useState} from 'react';
import {auth} from "../../firebase";
import {toast} from 'react-toastify';
// import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate=useNavigate();
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

                <button type="submit"  className='btn btn-raised btn-outline-primary mt-3' >Login with Email & Password</button>
                
            </form>
        </div>
    </>


    const handleLoginSubmit = async (event) => {
        if(!email){
            toast.error(`Invalid Email.`)
        }
        if(!password){
            toast.error(`Invalid Password.`)
        }
        try {
            event.preventDefault();
            auth.signInWithEmailAndPassword(email,password);
            navigate('/') ;
            // Axios.post("http://restapi.adequateshop.com/api/authaccount/login",{
            //   email: email,
            //   password: password
            // }).then((response) => {
            //   window.sessionStorage.setItem('Name',response.data.data.Name);
            // });      
        }catch(error){
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
