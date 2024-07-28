import { useState } from "react";
import S from "./SpoilerProgram.module.scss";

export const SpoilerProgram = ({ program }) => {
  const [isShowMoreInfo, setIsShowMoreInfo] = useState(false);

  const handleClickShowMore = () => {
    setIsShowMoreInfo(!isShowMoreInfo);
  };

  return (
    <div className={S["spoiler"]}>
      <div className={S["spoiler-visible"]}>
        <div className={S["spoiler-program"]}>
          <div className={S["spoiler-program__specialization"]}>
            <p className={S["spoiler-program__description"]}>
              Направление подготовки
            </p>
            <p className={S["spoiler-program__value"]}>
              {program.nameSpecialization}
            </p>
          </div>
          <div className={S["spoiler-program__name"]}>
            <p className={S["spoiler-program__description"]}>
              Программа (профиль)
            </p>
            <p className={S["spoiler-program__value"]}>{program.nameProgram}</p>
          </div>
          <div className={S["spoiler-program__form"]}>
            <p className={S["spoiler-program__description"]}>Форма обучения</p>
            <p className={S["spoiler-program__value"]}>{program.form}</p>
          </div>
        </div>
      </div>
      {isShowMoreInfo && (
        <div className={S["spoiler-hidden"]}>
          <div className={S["spoiler-info"]}>
            <div className={S["spoiler-info__item"]}>
              <p className={S["spoiler-info__description"]}>Срок обучения</p>
              <p className={S["spoiler-info__value"]}>{program.duration}</p>
            </div>
            <div className={S["spoiler-info__item"]}>
              <p className={S["spoiler-info__description"]}>
                Проходной балл в 2023 году
              </p>
              <p className={S["spoiler-info__value"]}>{program.score}</p>
            </div>
            <div className={S["spoiler-info__item"]}>
              <p className={S["spoiler-info__description"]}>
                Стоимость обучения (в год)
              </p>
              <p className={S["spoiler-info__value"]}>
                {program.price} &#8381;
              </p>
            </div>
          </div>
          <div className={S["spoiler-exams"]}>
            <div className={S["spoiler-exams__section"]}>
              <p className={S["spoiler-exams__description"]}>
                Вступительные испытания (ЕГЭ)
              </p>
              <ul className={S["exams-list"]}>
                <li className={S["exams-list__item"]}>Русский язык</li>
                <li className={S["exams-list__item"]}>
                  Литература / Обществознание / Физика / Биология / Химия /
                  Иностранный язык / Информатика
                </li>
                <li className={S["exams-list__item"]}>География</li>
              </ul>
            </div>
            <div className={S["spoiler-exams__section"]}>
              <p className={S["spoiler-exams__description"]}>
                Вступительные испытания (СПО)
              </p>
              <ul className={S["exams-list"]}>
                <li className={S["exams-list__item"]}>Русский язык</li>
                <li className={S["exams-list__item"]}>
                  Основы алгоритмизцаии и программирования
                </li>
                <li className={S["exams-list__item"]}>
                  Основы естественно-научного знания
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      <div
        className={S["spoiler-more"]}
        onClick={() => handleClickShowMore()}>
        <div className={S["spoiler-more__btn"]}>
          {isShowMoreInfo
            ? "Скрыть подробную информацию"
            : "Показать подробную информацию"}
        </div>
      </div>
    </div>
  );
};
