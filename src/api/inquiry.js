import api from './axios';

// 문의 목록 조회
export const getInquiries = () => api.get('/api/inquiries');

// 문의 등록
export const createInquiry = (data) => api.post('/api/inquiries', data);

// 문의 삭제
export const deleteInquiry = (id) => api.delete(`/api/inquiries/${id}`);
