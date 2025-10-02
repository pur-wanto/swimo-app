import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, notification } from 'antd';
import { Controller, useForm } from 'react-hook-form';

import { useNavigate } from 'react-router-dom';
import { useLogin } from '../hooks/mutations/useLogin';
import { loginSchema, type LoginFormValues } from '../validations/loginSchema';

function Login() {
  const navigate = useNavigate();
  const mutation = useLogin();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: 'onTouched',
    shouldFocusError: false,
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    mutation.mutate(data, {
      onSuccess: () => {
        navigate("/dashboard");
      },
      onError: (error: any) => {
        const message = error?.response?.data?.message || 'Login gagal. Coba lagi.';
        notification.error({
          message: 'Login Error',
          description: message,
        });
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <h3 className="text-center mb-6">Login</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <h5>Email</h5>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                size="large"
                placeholder="Input your Email"
              />
            )}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
          <div className='mt-1' />
          <h5>Password</h5>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input.Password
                {...field}
                size="large"
                placeholder="Input your Password"
              />
            )}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}

          <Button
            type="primary"
            size="large"
            block
            htmlType="submit"
            loading={mutation.isPending}
          >
            Login
          </Button>
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