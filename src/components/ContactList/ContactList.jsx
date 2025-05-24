import { useDispatch, useSelector } from "react-redux";

import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { changeFilter } from "../../redux/filtersSlice";
import Loader from "../Loader/Loader";
import {
  selectContacts,
  selectError,
  selectFilteredContacts,
  selectFilters,
  selectLoading,
} from "../../redux/selectors";

const ContactList = () => {
  const filteredContact = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  return (
    <div>
      <ul className={s.wrapper}>
        {filteredContact.map((contact) => (
          <li className={s.listItem} key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          </li>
        ))}
      </ul>
      {loading && <Loader isLoading={loading} />}
      {error && <h2>Server is dead...</h2>}
    </div>
  );
};
export default ContactList;
