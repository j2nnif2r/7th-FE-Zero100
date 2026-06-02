import axios from 'axios';

const api = axios.create({
  baseURL: '',  // 프록시 사용하므로 비워둠
  headers: { 'Content-Type': 'application/json' },
});

// 요청 인터셉터: 토큰 자동 주입
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 응답 인터셉터: 401 시 로그인 페이지로 이동
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('accessToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);

export default api;
