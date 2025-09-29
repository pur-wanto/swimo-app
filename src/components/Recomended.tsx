import { faBookmark, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Recomended1 from '../assets/recomended-1.png';


const Recomended = () => {
  const people = [1, 2, 3, 4].map((index) => {
    return (
      <FontAwesomeIcon
        key={index}
        icon={faUser}
        className="text-gray-400 text-base bg-gray-200 rounded-full p-2 w-8 h-8"
      />
    );
  });

  return (
    <div className="bg-white rounded shadow overflow-hidden">

      {/* Image Section */}
      <img
        src={Recomended1}
        alt="Recommended"
        className="w-full h-[132px] object-cover"
      />

      {/* Content Section */}
      <div className="p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <div className="flex-1">
          <p className="text-purple-600 text-sm font-medium">Beginner</p>
          <h1 className="text-black text-base sm:text-lg font-semibold leading-snug">
            Complete a speed and endurance triathlon.
          </h1>
        </div>
        <FontAwesomeIcon icon={faBookmark} className="text-purple-600 text-xl self-start sm:self-center" />
      </div>

      {/* People Avatars */}
      <div className="px-4 pb-4 flex gap-2 flex-wrap">
        {people}
      </div>
    </div>
  );
};

export default Recomended;