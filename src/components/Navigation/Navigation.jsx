import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "../Navigation/Navigation.module.css";

const Navigation = () => {
  const setActiveClass = ({ isActive }) => clsx(s.link, isActive && s.active);

  return (
    <>
      <NavLink className={setActiveClass} to="/">
        Home
      </NavLink>
      <NavLink className={setActiveClass} to="/contacts">
        Contacts
      </NavLink>
    </>
  );
};

export default Navigation;
