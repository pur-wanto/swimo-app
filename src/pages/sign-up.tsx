import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, Typography } from 'antd';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useRegister } from '../hooks/mutations/useRegister';
import { registerSchema, type RegisterFormValues } from '../validations/registerSchema';

const { Title } = Typography;

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const mutation = useRegister();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormValues) => {
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className='w-full max-w-md p-6 bg-white rounded shadow'>
        <Title level={3} className="text-center mb-6">Register</Title>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Full Name</label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input
                  type="text"
                  {...field}
                  className="w-full border px-3 py-2 rounded"
                />
              )}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block font-medium mb-1">Email</label>
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
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block font-medium mb-1">Password</label>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input.Password
                  type="password"
                  {...field}
                  className="w-full border px-3 py-2 rounded"
                />
              )}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          <div>
            <label className="block font-medium mb-1">Confirm Password</label>
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <Input.Password
                  type="password"
                  {...field}
                  className="w-full border px-3 py-2 rounded"
                />
              )}
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
          </div>

          <div>
            <label className="block font-medium mb-1">Age</label>
            <Controller
              name="age"
              control={control}
              render={({ field }) => (
                <Input
                  type="number"
                  {...field}
                  className="w-full border px-3 py-2 rounded"
                />
              )}
            />
            {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>}
          </div>

          <div>
            <label className="block font-medium mb-1">Height (cm)</label>
            <Controller
              name="height"
              control={control}
              render={({ field }) => (
                <Input
                  type="number"
                  step="0.1"
                  {...field}
                  className="w-full border px-3 py-2 rounded"
                />
              )}
            />
            {errors.height && <p className="text-red-500 text-sm mt-1">{errors.height.message}</p>}
          </div>

          <div>
            <label className="block font-medium mb-1">Weight (kg)</label>
            <Controller
              name="weight"
              control={control}
              render={({ field }) => (
                <Input
                  type="number"
                  step="0.1"
                  {...field}
                  className="w-full border px-3 py-2 rounded"
                />
              )}
            />
            {errors.weight && <p className="text-red-500 text-sm mt-1">{errors.weight.message}</p>}
          </div>

          <div>
            <Button
              type="primary"
              size="large"
              block
              htmlType="submit"
              loading={mutation.isPending}
            >
              Register
            </Button>
          </div>
        </form>

        <div className='flex justify-center items-center mt-4 space-x-2'>
          <p>Already have an account?</p>
          <p onClick={() => navigate("/login")} className='text-sky-300 hover:text-sky-700 cursor-pointer hover:underline'>Login Now</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;