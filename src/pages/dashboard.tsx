import { useNavigate } from 'react-router-dom';
import { Bell, Distance, Search, Sun } from '../assets';
import Avatar from "../assets/avatar.png";
import Recomended from '../components/Recomended';
import useAuthStore from '../store/authStore';
import { dateNow } from '../utils';

function Dashboard() {
  const user = useAuthStore((state) => state.user);
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
          <div className="flex gap-2 mb-1 text-purple-700">
            <img src={Sun} /> {dateNow}
          </div>
          <h1 className='text-2xl'>Hi, {user?.name}</h1>
        </div>
        <div className="flex items-center gap-x-4">
          <img src={Bell} />
          <img
            onClick={handleLogout}
            src={Avatar}
            alt="Avatar"
            className="w-[40px] h-[40px] object-cover rounded-full cursor-pointer"
          />
        </div>
      </div>

      <div className="mt-6 bg-gray-100 p-4 rounded flex items-center gap-2 w-full">
        <img src={Search} alt="Search" className="w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-gray-700 placeholder-gray-400 w-full"
        />
      </div>

      <div className='h-8' />

      <h2>Last Training</h2>
      <div className='flex mt-4 flex-col sm:flex-row justify-between bg-blue-50 rounded p-4 items-center w-full gap-y-4 sm:gap-y-0 sm:gap-x-8'>

        <div className='text-center flex flex-col items-center'>
          <img src={Distance} />
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

      <div className="flex justify-between">
        <p>Core Stability</p>
        <p onClick={() => { }}>View All</p>
      </div>
      <div className="mt-4 overflow-x-auto">
        <div className="flex gap-4 md:grid md:grid-cols-3 md:gap-6">

        </div>
      </div>

    </div>
  )
}

export default Dashboard;
