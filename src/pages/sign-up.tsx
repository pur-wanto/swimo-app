import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { useRegister } from '../hooks/mutations/useRegister';
import { registerSchema, type RegisterFormValues } from '../validations/registerSchema';
import { IconHidePassword, IconShowPassword } from '../assets';
import Header from '../components/Header';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const mutation = useRegister();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormValues) => {
    mutation.mutate(data, {
      onSuccess: () => {
        navigate("/login");
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className='w-full max-w-md bg-white rounded shadow'>
        <Header onClick={() => navigate("/")} />
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-6">
          <div>
            <label className="block font-medium mb-1">Full Name</label>
            <input
              type="text"
              {...register("name")}
              className="p-2 border border-gray-200 focus:border-blue-500 focus:outline-none rounded-lg w-full"
              placeholder="Input your Name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              {...register("email")}
              className="p-2 border border-gray-200 focus:border-blue-500 focus:outline-none rounded-lg w-full"
              placeholder="Input your Email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <label className="block font-medium mb-1">Password</label>
          <div className='relative'>
            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              className="p-2 border border-gray-200 focus:border-blue-500 focus:outline-none rounded-lg w-full"
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
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          <label className="block font-medium mb-1">Confirm Password</label>
          <div className='relative'>
            <input
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirmPassword")}
              className="p-2 border border-gray-200 focus:border-blue-500 focus:outline-none rounded-lg w-full"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(prev => !prev)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-gray-600"
            >
              <img
                src={showConfirmPassword ? IconHidePassword : IconShowPassword}
                className="w-4 h-4 object-cover"
                alt="toggle password visibility"
              />
            </button>
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
          </div>

          <div>
            <label className="block font-medium mb-1">Age</label>
            <input
              type="text"
              {...register("age")}
              className="p-2 border border-gray-200 focus:border-blue-500 focus:outline-none rounded-lg w-full"
            />
            {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>}
          </div>

          <div>
            <label className="block font-medium mb-1">Height (cm)</label>
            <input
              type="number"
              {...register("height")}
              className="p-2 border border-gray-200 focus:border-blue-500 focus:outline-none rounded-lg w-full"
            />
            {errors.height && <p className="text-red-500 text-sm mt-1">{errors.height.message}</p>}
          </div>

          <div>
            <label className="block font-medium mb-1">Weight (kg)</label>
            <input
              type="number"
              {...register("weight")}
              className="p-2 border border-gray-200 focus:border-blue-500 focus:outline-none rounded-lg w-full"
            />
            {errors.weight && <p className="text-red-500 text-sm mt-1">{errors.weight.message}</p>}
          </div>

          <div>
            <Button
              title='Register'
              htmlType="submit"
              type='primary'
            />
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