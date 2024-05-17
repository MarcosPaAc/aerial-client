import axios from 'axios';

export default axios.create({
    baseURL: 'https://us-east-1.aws.data.mongodb-api.com/app/data-ubuhnbk/endpoint',
    headers: {"ngrok-skip-browser-warning": "true"}
    });