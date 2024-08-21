import axios from 'axios';

  // Request on Client
  const auth = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/authenticate', { auth: { username: 'Sarah Smith', password: '456' } });
      console.log(res.data);
    } catch (error) {
      console.log('Error:', error.response ? error.response.data : error.message);
    }
};
  
auth();