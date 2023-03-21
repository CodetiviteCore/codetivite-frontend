
import axios from 'axios';
import { BASE_URL } from './../utils/urls';

export const getUserDetailsFromAuth =(code)=> axios.get(`${BASE_URL}auth?code=${code}`)
