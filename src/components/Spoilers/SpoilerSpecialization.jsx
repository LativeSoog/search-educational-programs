import { useState } from "react";
import S from "./SpoilerSpecialization.module.scss";

export const SpoilerSpecialization = () => {
  const [isOpenSpoiler, setIsOpenSpoiler] = useState(false);

  const toggleSpoiler = () => {
    setIsOpenSpoiler(!isOpenSpoiler);
  };

  return (
    <div className={S["spoiler"]}>
      <div
        className={S["spoiler-visible"]}
        onClick={() => toggleSpoiler()}>
        <img
          src={`/assets/images/icon/${isOpenSpoiler ? "minus" : "plus"}.svg`}
          className={S["spoiler-visible__icon"]}
        />
        <p className={S["spoiler-visible__text"]}>
          44.03.01 - Педагогическое образование
        </p>
      </div>
      {isOpenSpoiler && <div className={S["spoiler-hidden"]}>Программы</div>}
    </div>
  );
};
