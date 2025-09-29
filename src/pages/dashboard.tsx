import { faBell, faPersonSwimming, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from "../assets/avatar.png";
import { Typography } from 'antd';
import { Input } from 'antd';
import Recomended from '../components/Recomended';

type Props = {}

const { Title } = Typography;

function Dashboard({ }: Props) {
  return (
    <div className="min-h-screen bg-white px-4 py-6 md:px-8">

      {/* Header (selalu seperti desktop) */}
      <div className="flex flex-row justify-between items-center flex-wrap gap-4">
        <div>
          <p className="text-purple-600">
            <FontAwesomeIcon icon={faSun} /> FRI 14 OCT
          </p>
          <Title level={2}>Hi, Latade</Title>
        </div>
        <div className="flex items-center gap-x-4">
          <FontAwesomeIcon icon={faBell} className="text-purple-600 text-xl" />
          <img
            src={Avatar}
            alt="Avatar"
            className="w-[40px] h-[40px] object-cover rounded-full"
          />
        </div>
      </div>


      {/* Search */}
      <div className="mt-6">
        <Input.Search placeholder="Search" className="w-full max-w-md" />
      </div>

      {/* Section Spacer */}
      <div className='h-8' />

      {/* Last Training */}
      <Title level={3}>Last Training</Title>
      <div className='flex flex-col sm:flex-row justify-between bg-blue-50 rounded p-4 items-center w-full gap-y-4 sm:gap-y-0 sm:gap-x-8'>

        {/* Icon + Distance */}
        <div className='text-center flex flex-col items-center'>
          <FontAwesomeIcon icon={faPersonSwimming} className='text-blue-300 text-4xl' />
          <div className='flex items-baseline gap-2'>
            <Title level={1} className="!mb-0">300</Title>
            <p className='text-gray-400 text-base'>meters</p>
          </div>
        </div>

        {/* Time */}
        <div className='text-center'>
          <p className='text-gray-400'>Time</p>
          <p className='text-blue-500 font-semibold'>1:00:00</p>
        </div>

        {/* Pace */}
        <div className='text-center'>
          <p className='text-gray-400'>Pace</p>
          <p className='text-blue-500 font-semibold'>2:50/100m</p>
        </div>
      </div>

      {/* Section Spacer */}
      <div className='h-8' />

      {/* Recommended Section */}
      <Title level={3}>Recommended</Title>

      {/* Mobile: horizontal scroll | Desktop: grid */}
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

    </div>
  )
}

export default Dashboard;
