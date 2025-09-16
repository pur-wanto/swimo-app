import { NavLink } from "react-router-dom";

function Login() {

  return (
    <nav className="flex gap-4 bg-gray-200 p-4">
      <NavLink
        to="/sign-up"
        className={({ isActive }) => (isActive ? "text-blue-600 font-bold" : "")}
      >
        Login
      </NavLink>
    </nav>
  );
}

export default Login;