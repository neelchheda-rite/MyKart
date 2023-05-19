import React, {useEffect, useState} from 'react';

import {toast} from 'react-toastify';

export default function RegisterComplete() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(()=>{
        setEmail(window.localStorage.getItem('emailForRegistration'))
    },[])
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

            <form onSubmit={handleRegisterSubmit}>
                <input type='email' className='form-control m-3'
                    style={
                        {width: "25rem"}
                    }
                    value={
                        email
                    }
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


    const handleRegisterSubmit = async (event) => {
        event.preventDefault();

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
