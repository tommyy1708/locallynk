import axios from 'axios';
import axiosInstance  from './axiosInstacne';


export const loginAxios = async (data) => {
  try {
    const response = await axiosInstance.post('login/', data);
    return response;
  } catch (error) {
    throw error;
  }
};

export const setToken = (token) => {
  if (token) {
    localStorage.setItem('access_token', token.access);
    localStorage.setItem('refresh_token', token.refresh);
    axiosInstance.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${token.access}`;
  } else {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    delete axiosInstance.defaults.headers.common['Authorization'];
  }
};

