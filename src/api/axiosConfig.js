import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.example.com',
    headers: {"ngrok-skip-browser-warning": "true"}
    });