import { useDispatch, useSelector } from "react-redux";
import S from "./TopButtons.module.scss";
import { changeFilters } from "../../store/treeSlice";

export const TopButtons = ({ setIsShowFilter }) => {
  const dispatch = useDispatch();
  const isFiltered = useSelector((state) => state.tree.filteredListPrograms);

  const handleClearFilters = () => {
    dispatch(changeFilters(false));
  };

  return (
    <div className={S["toolbar"]}>
      <button
        className={S["toolbar__button"]}
        onClick={() =>
          setIsShowFilter((prevState) => ({ ...prevState, EGE: true }))
        }>
        Подобрать программу по предметам ЕГЭ
      </button>
      {isFiltered && (
        <button
          className={S["toolbar__button_filter"]}
          onClick={() => handleClearFilters()}>
          Очистить фильтры
        </button>
      )}
    </div>
  );
};
