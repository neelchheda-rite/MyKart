import React, {useState} from 'react';
import { sendSignInLinkToEmail } from "firebase/auth";
import { auth } from "../../firebase"
import firebase from "../../firebase"
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {

    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const config = {
            url: "http://localhost:3000/register/complete",
            handleCodeInApp: true
        }
        
        await firebase.auth().sendSignInLinkToEmail( email, config).then(() => {
            window.localStorage.setItem('emailForSignIn', email);
        }).catch((error) => {toast.error({error})});
        toast.success(`Email is successfully sent to ${email}. Click the link to complete your registration.`);

        window.localStorage.setItem('emailForRegistration', email);
        setEmail('');
    }

    return (
      <form onSubmit={handleSubmit}>
        <div className="container text-center mt-5">
            <div className="row ">
                <div className="col align-self-center mt-2"
                    style={
                        {
                            display: "flex",
                            justifyContent: "center"
                        }
                }>
                    <div className="card text-center"
                        style={
                            {
                                width: "30rem",
                                height: "18rem"
                            }
                    }>
                        <div className="card-header">
                            Register into the world of brands
                        </div>
                        <div className="card-body"
                            style={
                                {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }
                        }>
                            <div>
                                <h3 className="card-title">Register</h3>
                            </div>
                            <div>
                                <input type="text"
                                    value={email}
                                    className="form-control m-3 mb-2 "
                                    placeholder="Email Address"
                                    aria-label="Username"
                                    style={
                                        {width: "20rem"}
                                    }
                                    onChange={
                                        (e) => {
                                            setEmail(e.target.value)
                                        }
                                    }
                                    autoFocus/></div>
                        <button type="submit" className="btn btn-primary btn-raised m-3 mt-2"
                            >Register
                            <ToastContainer/>
                        </button>
                    </div>

                    <div className="card-footer text-body-secondary"
                        style={
                            {fontSize: "12px"}
                    }>
                        Copyrights MyKart @2023
                    </div>
                </div>
            </div>
        </div>
    </div>
    </form>
    )
}
