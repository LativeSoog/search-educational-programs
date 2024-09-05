import S from "./TopButtons.module.scss";

export const TopButtons = ({ setIsShowFilter }) => {
  return (
    <div className={S["toolbar"]}>
      <button
        className={S["toolbar__button"]}
        onClick={() =>
          setIsShowFilter((prevState) => ({ ...prevState, EGE: true }))
        }>
        Подобрать программу по предметам ЕГЭ
      </button>
    </div>
  );
};
