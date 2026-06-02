import api from './axios';

// 회원가입
export const signup = (data) => api.post('/api/auth/signup', data);

// 로그인
export const login = (data) => api.post('/api/auth/login', data);

// 내 정보 조회
export const getMe = () => api.get('/api/auth/me');

// 이름 수정
export const updateName = (name) => api.patch('/api/auth/me', { name });

// 비밀번호 수정
export const updatePassword = (data) => api.patch('/api/auth/me/password', data);
