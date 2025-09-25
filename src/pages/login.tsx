import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, Typography } from 'antd';
import { Controller, useForm } from 'react-hook-form';

import { useNavigate } from 'react-router-dom';
import { useLogin } from '../hooks/mutations/useLogin';
import { loginSchema, type LoginFormValues } from '../validations/loginSchema';

const { Title } = Typography;

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
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <Title level={3} className="text-center mb-6">Login</Title>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Title level={5}>Email</Title>
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
          <Title level={5}>Password</Title>
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