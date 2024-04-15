import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/toastify";

const Navbar = () => {
  const navigate = useNavigate();

  const URL = import.meta.env.VITE_BASE_URL;

  const handleLogout = async () => {
    try {
      await axios.get(`${URL}/user/logout`);
      toastSuccessNotify("Logout Successfully");
      navigate("/login");
    } catch (error) {
      toastErrorNotify("Something went wrong");
    }
  };

  return (
    <div className="flex justify-between p-3 md:p-5 bg-pink-300   font-bold">
      <p className="cursor-pointer" onClick={() => navigate("/")}>
        My Blog Site
      </p>
      <div className="flex gap-3">
        <NavLink
          to="/login"
          style={({ isActive }) => {
            return {
              color: isActive ? "chartreuse" : "black",
            };
          }}
        >
          Login
        </NavLink>
        <NavLink
          to="/register"
          style={({ isActive }) => {
            return {
              color: isActive ? "chartreuse" : "black",
            };
          }}
        >
          Register
        </NavLink>
        <span className="cursor-pointer" onClick={handleLogout}>
          Logout
        </span>
      </div>
    </div>
  );
};

export default Navbar;
