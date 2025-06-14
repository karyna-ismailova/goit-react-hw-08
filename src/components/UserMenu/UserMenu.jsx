import { useDispatch, useSelector } from "react-redux";
import s from "../Navigation/Navigation.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={s.userMenu}>
      <span className={s.userName}>{user.name}</span>
      <button className={s.btn} onClick={() => dispatch(logoutThunk())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
