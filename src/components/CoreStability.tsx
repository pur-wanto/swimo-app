interface CoreStabilityProps {
  title: string;
  duration: string;
  desc: string;
  imgSrc: string;
  onClick?: () => void;
}

const CoreStability = ({ title, duration, desc, imgSrc, onClick }: CoreStabilityProps) => {
  return (
    <div className="bg-blue-500 rounded-md shadow w-full">
      <button onClick={onClick} className="bg-white ml-2 w-full flex p-4 items-center hover:shadow-lg transition duration-200 cursor-pointer">
        <img src={imgSrc} alt={title} className="w-12 h-12 md:w-40 md:h-40 flex-shrink-0" />
        <div className="ml-4 text-left w-full">
          <div className="flex justify-between items-center w-full">
            <p className="font-semibold">{title}</p>
            <p className="text-sm text-gray-500">{duration}</p>
          </div>
          <p className="text-sm text-gray-600 mt-1">{desc}</p>
        </div>
      </button>
    </div>
  );
};

export default CoreStability;