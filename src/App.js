import './App.css';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';
import RegisterComplete from './components/authentication/RegisterComplete';

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <ToastContainer />
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />        
          <Route  path="/register/complete" element={<RegisterComplete />} />        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
