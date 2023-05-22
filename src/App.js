import './App.css';
import {useEffect} from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';
import RegisterComplete from './components/authentication/RegisterComplete';
import {auth} from './firebase';
import {useDispatch} from 'react-redux';

function App() {

    const dispatch = useDispatch();
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                const idTokenResult = await user.getIdTokenResult();
                console.log("User", user);
                dispatch({
                    type: "LOGGED_IN_USER",
                    payload: {
                        email: user.email,
                        token: idTokenResult.token
                    }
                });
            }
        });
        return() => unsubscribe();
    }, [])
    return (
        <>
            <BrowserRouter>
                <NavBar/>
                <ToastContainer/>
                <Routes>
                    <Route exact path="/login"
                        element={<Login/>}/>
                    <Route exact path="/register"
                        element={<Register/>}/>
                    <Route path="/register/complete"
                        element={<RegisterComplete/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
