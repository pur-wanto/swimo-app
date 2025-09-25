import axios from 'axios';
import { API_BASE_URL } from '../config/env';
import type { LoginFormValues } from '../validations/loginSchema';


export async function loginUser(data: LoginFormValues) {
  const response = await axios.post(`${API_BASE_URL}/api/v1/sign-in`, data);
  return response.data;
}