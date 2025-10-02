import axios from 'axios';
import { API_BASE_URL } from '../config/env';
import type { LoginFormValues } from '../validations/loginSchema';
import type { RegisterFormValues } from '../validations/registerSchema';
import type { LoginResponse } from '../store/authStore';

export async function loginUser(data: LoginFormValues): Promise<LoginResponse> {
  const response = await axios.post(`${API_BASE_URL}/api/v1/sign-in`, data);
  return response.data;
}

export async function registerUser(data: RegisterFormValues): Promise<LoginResponse> {
  const response = await axios.post(`${API_BASE_URL}/api/v1/sign-up`, data);
  return response.data;
}

export async function loginGuest(): Promise<LoginResponse> {
  const response = await axios.post(`${API_BASE_URL}/api/v1/sign-in-guest`);
  return response.data;
}