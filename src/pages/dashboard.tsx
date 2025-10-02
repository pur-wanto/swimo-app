import { faBell, faPersonSwimming, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import Avatar from "../assets/avatar.png";
import Recomended from '../components/Recomended';
import useAuthStore from '../store/authStore';

type Props = {}

function Dashboard({ }: Props) {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-white px-4 py-6 md:px-8">
      <div className="flex flex-row justify-between items-center flex-wrap gap-4">
        <div>
          <p className="text-purple-600">
            <FontAwesomeIcon icon={faSun} /> FRI 14 OCT
          </p>
          <h1>Hi, Latade</h1>
        </div>
        <div className="flex items-center gap-x-4">
          <FontAwesomeIcon icon={faBell} className="text-purple-600 text-xl" />
          <img
            onClick={handleLogout}
            src={Avatar}
            alt="Avatar"
            className="w-[40px] h-[40px] object-cover rounded-full cursor-pointer"
          />
        </div>
      </div>

      <div className="mt-6">
        <Input.Search placeholder="Search" className="w-full max-w-md" />
      </div>

      <div className='h-8' />

      <h2>Last Training</h2>
      <div className='flex flex-col sm:flex-row justify-between bg-blue-50 rounded p-4 items-center w-full gap-y-4 sm:gap-y-0 sm:gap-x-8'>

        <div className='text-center flex flex-col items-center'>
          <FontAwesomeIcon icon={faPersonSwimming} className='text-blue-300 text-4xl' />
          <div className='flex items-baseline gap-2'>
            <h2 className="!mb-0">300</h2>
            <p className='text-gray-400 text-base'>meters</p>
          </div>
        </div>

        <div className='text-center'>
          <p className='text-gray-400'>Time</p>
          <p className='text-blue-500 font-semibold'>1:00:00</p>
        </div>

        <div className='text-center'>
          <p className='text-gray-400'>Pace</p>
          <p className='text-blue-500 font-semibold'>2:50/100m</p>
        </div>
      </div>

      <div className='h-8' />

      <h2>Recommended</h2>
      <div className="mt-4 overflow-x-auto">
        <div className="flex gap-4 md:grid md:grid-cols-3 md:gap-6">
          {[1, 2, 3, 4, 5].map((index) => (
            <div
              key={index}
              className="min-w-[250px] md:min-w-0 flex-shrink-0"
            >
              <Recomended />
            </div>
          ))}
        </div>
      </div>

      <div className='h-8' />

      <div className="flex justify-between items-center">
        <h2 className="!mb-0">Core Stability</h2>
        <Button type="link">View All</Button>
      </div>
      <div className="mt-4 overflow-x-auto">
        <div className="flex gap-4 md:grid md:grid-cols-3 md:gap-6">

        </div>
      </div>

    </div>
  )
}

export default Dashboard;
