import React, {useState} from 'react';
import {auth} from "../../firebase";
import { toast} from 'react-toastify';

export default function Register() {

    const [email, setEmail] = useState('');
    const registerForm = () => <>
        <h2>
            Register
        </h2>
        <div className="col-md align-self-center mt-2"
            style={
                {
                    display: "flex",
                    justifyContent: "center"
                }
        }>

            <form onSubmit={handleRegisterSubmit}>
                <input type='email'
                    onChange={
                        (event) => setEmail(event.target.value)
                    }
                    className='form-control'
                    autoFocus
                    style={
                        {width: "25rem"}
                    }
                    value={email}/>
                    
                    <button type="submit"className='btn btn-raised btn-outline-primary mt-3'>Register</button>
            </form>
        </div>
    </>


    const handleRegisterSubmit =async (event) => {
        event.preventDefault();
        const config={
            url:process.env.REACT_APP_REGISTER_REDIRECT_URL,
            handleCodeInApp:true
        }
        await auth.sendSignInLinkToEmail(email,config);
        toast.success(`Verification link sent to ${email}. Cick the link to complete your registration`);
        window.localStorage.setItem('emailForRegistration',email);
        setEmail('');
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
