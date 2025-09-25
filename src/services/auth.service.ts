import axios from 'axios';
import type { LoginFormValues } from '../validations/loginSchema';


export async function loginUser(data: LoginFormValues) {
  const response = await axios.post('https://swimo-api.duckdns.org/api/v1/sign-in', data);
  return response.data;
}