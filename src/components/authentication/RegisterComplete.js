import React, {useEffect, useState} from 'react';
import {auth} from '../../firebase';
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';

export default function RegisterComplete() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        setEmail(window.localStorage.getItem('emailForRegistration'))
    }, [])

    const registerForm = () => <>
        <h2>
            Complete Registration
        </h2>


        <div className="col-md align-self-center mt-2"
            style={
                {
                    display: "flex",
                    justifyContent: "center"
                }
        }>

            <form onSubmit={handleCompleteRegistrationSubmit}>
                <input type='email' className='form-control m-3'
                    style={
                        {width: "25rem"}
                    }
                    value={email}
                    disabled/>


                <input type='password'
                    onChange={
                        (event) => setPassword(event.target.value)
                    }
                    className='form-control m-3'
                    autoFocus
                    placeholder='Password'
                    style={
                        {width: "25rem"}
                    }
                    value={password}/>

                <button type="submit" className='btn btn-raised btn-outline-primary mt-3'>Register</button>
            </form>
        </div>
    </>


    const handleCompleteRegistrationSubmit = async (event) => {
        event.preventDefault();
        if(!email || !password){
            toast.error(`Invalid Email or Password.`);
            return;
        }
        if(password.length<6){
            toast.error(`Password length should be atleast 6 characters`);
            return;
        }
        try {
            const browserCurrentUrl = window.location.url;
            const result = await auth.signInWithEmailLink(email, browserCurrentUrl);
            console.log("Result",result);
            if(result.user.emailVerified){
                window.localStorage.removeItem('emailForRegistration');
                const currentLoggedInUser = auth.currentUser 
                await currentLoggedInUser.updatePassword(password);
                const userIdToken = await currentLoggedInUser.getIdTokenResult();
                console.log(userIdToken);
                navigate('/');
            }
        } catch (error) { 
            console.log(error.message);
            // error.log
        }
    }


    return (
        <div className="container text-center mt-5 p-5">
            <div className="row ">
                {
                registerForm()
            } </div>
        </div>
    )
}
