import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "../Navigation/Navigation.module.css";

const AuthNav = () => {
  const setActiveClass = ({ isActive }) => clsx(s.link, isActive && s.active);

  return (
    <>
      <NavLink className={setActiveClass} to="/login">
        Login
      </NavLink>
      <NavLink className={setActiveClass} to="/register">
        Register
      </NavLink>
    </>
  );
};

export default AuthNav;
