import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './assets/css/style.css';

import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Dashboard } from './pages/dashboard/Dashboard';

function App() {
  return (

    <BrowserRouter>

      <Routes>

        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

      </Routes>

    </BrowserRouter>

    // <Login />
  );
}

export default App;
