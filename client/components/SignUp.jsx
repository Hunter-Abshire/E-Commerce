import React from 'react';
import axios from 'axios';

function SignUp() {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        //add the ability to see if a user has already created an account before
        try {
            const response = await axios.post('/api/users', { username, password });
            console.log('User added: ', response.data);
        } catch (error) {
            console.error('Error adding user: ', error);
        }
    }

    return (
        <div>
            <h1>Welcome to the Sign up Page!</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default SignUp;