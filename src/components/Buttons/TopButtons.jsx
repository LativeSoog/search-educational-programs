import S from "./TopButtons.module.scss";

export const TopButtons = ({ setIsShowFilter }) => {
  return (
    <div className={S["content"]}>
      <button
        className={S["content__button"]}
        onClick={() =>
          setIsShowFilter((prevState) => ({ ...prevState, EGE: true }))
        }>
        Калькулятор ЕГЭ
      </button>
      <button className={S["content__button"]}>Раскрыть все программы</button>
    </div>
  );
};
