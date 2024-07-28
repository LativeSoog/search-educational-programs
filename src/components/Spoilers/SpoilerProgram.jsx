import { useState } from "react";
import { ExamsList } from "../ExamsList/ExamsList";
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
            <ExamsList
              nameList={"Вступительные испытания (ЕГЭ)"}
              examsList={program.examsEGE}
            />
            <ExamsList
              nameList={"Вступительные испытания (СПО)"}
              examsList={program.examsSPO}
            />
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
