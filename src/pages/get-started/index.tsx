import { useNavigate } from 'react-router-dom'
import BackGround from '../../assets/background.png'

function GetStarted() {
  const navigate = useNavigate();

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

        <div className="mt-8">
          <button
            onClick={() => navigate("/sign-up")}
            type="button"
            className="w-full bg-blue-400 rounded-md p-3 text-white"
          >
            Sign Up
          </button>
          <button
            onClick={() => navigate("/login")}
            type="button"
            className="w-full rounded-md p-3 text-blue-400 border-blue-400 border mt-4"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default GetStarted