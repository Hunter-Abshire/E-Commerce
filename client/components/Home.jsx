import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const handleClickToLogin = () => {
        navigate('/login');
    }

    return (
        <div>
            <h1>Welcome to the Home Page!</h1>
            <button onClick={handleClickToLogin}>Login</button>
            <button onClick={() => navigate('/Signup')}>Sign Up</button>
        </div>
    );
}

export default Home;