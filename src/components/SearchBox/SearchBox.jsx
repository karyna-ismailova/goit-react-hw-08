import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";

import { selectNameFilter } from "../../redux/contacts/selectors";
import { changeFilter } from "../../redux/filters/filtersSlice";

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const handleChangeQuery = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div className={s.formWrapper}>
      <span className={s.title}>Find contacts by name</span>

      <input
        className={s.input}
        value={filter}
        onChange={handleChangeQuery}
        type="text"
      />
    </div>
  );
};
export default SearchBox;
