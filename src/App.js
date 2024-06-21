import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './pages/LoginPage/Login';
import { Home } from './pages/HomePage/Home';
import { Verify } from './pages/VerifyPage/Verify';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
