import { useNavigate } from 'react-router-dom';
import BackGround from '../assets/background.png';
import { useGuestLogin } from '../hooks/mutations/useGuestLogin';
import Button from '../components/Button';

function GetStarted() {
  const navigate = useNavigate();
  const mutation = useGuestLogin();

  return (
    <div className="md:flex md:h-screen">
      <div className="md:w-1/2">
        <img
          src={BackGround}
          alt=""
          className="w-full h-[50vh] md:h-screen object-cover rounded-b-2xl md:rounded-b-none"
        />
      </div>

      <div className="flex flex-col justify-center px-6 py-8 md:w-1/2">
        <h1 className="text-4xl font-bold">
          Swim trainings for every level
        </h1>
        <p className="mt-4 text-lg">
          Set individual or group goals and keep track of your swimming performance.
          Your data is sent straight to your wear watch to keep yourself accountable.
        </p>

        <div className="mt-4">
          <Button type='primary' onClick={() => navigate("/sign-up")} title='Sign Up' />
          <div className='h-2' />
          <Button type='secondary' onClick={() => navigate("/login")} title='Login' />
        </div>

        <div className='flex justify-center items-center mt-4'>
          <p
            onClick={() => mutation.mutate()}
            className='text-sky-300 hover:text-sky-700 cursor-pointer underline'
          >
            Continue as Guest
          </p>
        </div>
      </div>
    </div>
  )
}

export default GetStarted