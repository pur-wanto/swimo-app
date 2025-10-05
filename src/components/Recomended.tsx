import { Bookmark, User } from '../assets';
import Recomended1 from '../assets/recomended-1.png';


const Recomended = () => {
  const people = [1, 2, 3, 4].map((index) => {
    return (
      <img
        key={index}
        src={User}
        className="rounded-full w-8 h-8"
      />
    );
  });

  return (
    <div className="bg-white rounded shadow overflow-hidden cursor-pointer hover:shadow-lg transition duration-200">
      <img
        src={Recomended1}
        alt="Recommended"
        className="w-full h-[132px] object-cover"
      />

      <div className="flex p-4 justify-between">
        <div className="max-w-[80%] flex-grow">
          <p className="text-purple-600 text-sm font-medium">Beginner</p>
          <h1 className="">
            Complete a speed and endurance triathlon.
          </h1>
        </div>

        <img src={Bookmark} className="text-purple-600 text-xl" />
      </div>

      <div className="px-4 pb-4 flex flex-row">
        {people}
      </div>
    </div>
  );
};

export default Recomended;