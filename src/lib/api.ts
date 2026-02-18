import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const api: AxiosInstance = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('gotlife-token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('gotlife-token');
            localStorage.removeItem('gotlife-user');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

// Generic HTTP helpers
export const get = <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    return api.get<T>(url, config);
};

export const post = <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    return api.post<T>(url, data, config);
};

export const put = <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    return api.put<T>(url, data, config);
};

export const patch = <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    return api.patch<T>(url, data, config);
};

export const del = <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    return api.delete<T>(url, config);
};

// ─── Auth API ────────────────────────────────────────────────────────────────

interface ApiResponse<T = any> {
    success: boolean;
    message: string;
    data?: T;
}

interface VerifyData {
    token: string;
    user: {
        _id: string;
        firstName: string;
        lastName: string;
        email: string;
        role: string;
    };
}

export const authApi = {
    register: (data: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        phoneNumber?: string;
        address?: string;
    }) => api.post<ApiResponse>('/auth/register', data),

    login: (data: { email: string; password: string }) =>
        api.post<ApiResponse>('/auth/login', data),

    verify: (data: { email: string; otp: string }) =>
        api.post<ApiResponse<VerifyData>>('/auth/verify', data),
};

export default api;
