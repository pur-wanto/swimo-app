import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconHidePassword, IconShowPassword } from '../assets';
import Button from '../components/Button';
import Header from '../components/Header';
import { useLogin } from '../hooks/mutations/useLogin';
import { loginSchema, type LoginFormValues } from '../validations/loginSchema';

function Login() {
  const navigate = useNavigate();
  const mutation = useLogin();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    // mode: 'onSubmit',
    shouldFocusError: false,
  });

  const onSubmit = (data: LoginFormValues) => {
    mutation.mutate(data, {
      onSuccess: () => {
        navigate("/dashboard", { replace: true });
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded shadow">
        <Header onClick={() => navigate("/")} />
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-6">
          <h5>Email</h5>
          <input
            type="email"
            {...register("email")}
            className="p-2 border border-gray-600 rounded w-full"
            placeholder="Input your Email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}

          <div className='mt-1' />

          <h5>Password</h5>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              className='p-2 border border-gray-600 rounded w-full'
              placeholder="Input your Password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(prev => !prev)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-gray-600"
            >
              <img
                src={showPassword ? IconHidePassword : IconShowPassword}
                className="w-4 h-4 object-cover"
                alt="toggle password visibility"
              />
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
          <div className="h-2" />
          <Button
            title='Login'
            htmlType="submit"
            type='primary'
          />
        </form>

        <div className='flex justify-center items-center mt-4 space-x-2'>
          <p>Don't have an account?</p>
          <p onClick={() => navigate("/sign-up")} className='text-sky-300 hover:text-sky-700 cursor-pointer hover:underline'>Register Now</p>
        </div>
      </div>
    </div>
  );
}

export default Login;