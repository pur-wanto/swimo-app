import axios from 'axios';
import { API_BASE_URL } from '../config/env';
import type { RegisterFormValues } from '../validations/registerSchema';

export async function registerUser(data: RegisterFormValues) {
  const response = await axios.post(`${API_BASE_URL}/api/v1/sign-up`, data);
  return response.data;
}