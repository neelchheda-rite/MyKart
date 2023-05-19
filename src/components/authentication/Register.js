import React, {useState} from 'react';

import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

            <form onSubmit={handleSubmitRegister}>
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
            </form>
        </div>
    </>


    const handleSubmitRegister = () => {
    toast("This is a toast");
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
