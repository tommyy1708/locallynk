import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/', // Replace with your API base URL
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token to headers
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token'); // Adjust based on how you store your token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling responses and errors
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem('refresh_token');
      if (refreshToken) {
        try {
          const response = await axiosInstance.post(
            'refresh-token/',
            {
              refresh_token: refreshToken,
            }
          );
          localStorage.setItem(
            'access_token',
            response.data.access_token
          );
          axiosInstance.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${response.data.access_token}`;
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          window.location.href = '/login';
        }
      } else {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

 export const login_request = async (data) => {
  try {
    const response = await axiosInstance.post('login/', data);
    return response;
  } catch (error) {
    if (error.response) {
      return error.response;
    }
  }
};

 export const token_setup = (token) => {
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


export default axiosInstance;
