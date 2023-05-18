import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
     
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />

        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
