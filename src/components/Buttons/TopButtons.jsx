import S from "./TopButtons.module.scss";

export const TopButtons = () => {
  return (
    <div className={S["content"]}>
      <button className={S["content__button"]}>Калькулятор ЕГЭ</button>
      <button className={S["content__button"]}>Раскрыть все программы</button>
    </div>
  );
};
