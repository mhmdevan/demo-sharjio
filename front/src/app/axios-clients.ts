import axios from 'axios';

export const DEVELOP = 'http://localhost:8000/';

export const main = axios.create({
    baseURL: DEVELOP,
});