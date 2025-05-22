import { useDispatch } from "react-redux";
import s from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { deleteContact } from "../../redux/contactsOps";
// import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ name, number, onDelete, id }) => {
  const dispatch = useDispatch();
  return (
    <div className={s.wrapper}>
      <ul>
        <li>
          <FaUser className={s.icon} size={12} />
          {name}
        </li>
        <li>
          <FaPhoneAlt className={s.icon} size={12} />
          {number}
        </li>
      </ul>
      <button onClick={() => dispatch(deleteContact(id))} className={s.button}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
