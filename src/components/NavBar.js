import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import firebase from 'firebase';
import {useDispatch} from 'react-redux';
// import { useEffect } from 'react';
import {useSelector} from 'react-redux';


export default function NavBar() {
    let dispatch = useDispatch();
    const navigate = useNavigate();
    let {user} = useSelector((state) => ({
        ...state
    }));
    const logout = () => {
        firebase.auth().signOut();
        dispatch({type: "LOGOUT", payload: null}).then(navigate('/login'));

    }

    // fetchData() is called whenever data is updated.
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"
                        style={
                            {color: "#149eca"}
                    }>MyKart</a>
                    <button className="navbar-toggler bg-body-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-dark" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark" to="/about">About</Link>
                            </li>
                            {
                            (window.sessionStorage.getItem("Name")) ? (
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" to="/about">
                                        {
                                        window.sessionStorage.getItem("Name")
                                    }</Link>
                                </li>
                            ) : (
                                <></>
                            )
                        } </ul>
                        <ul className="navbar-nav mb-2 mb-lg-0 float-right">
                            {
                            !user && (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link active text-dark" aria-current="page" to="/login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-dark" to="/register">Register</Link>
                                    </li>
                                </>
                            )
                        }
                            {
                            user && (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link text-dark"
                                            onClick={logout}>Logout</Link>
                                    </li>
                                </>
                            )
                        } </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
