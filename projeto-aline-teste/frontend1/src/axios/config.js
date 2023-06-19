import axios from 'axios';

const Api = axios.create({
    baseURL: "http://25.64.144.255:8000",
    headers: {
        'Accept':'application/json',
        'Content-Type':'application/json',
    }
})

export default Api;