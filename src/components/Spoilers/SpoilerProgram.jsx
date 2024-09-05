import { useState } from "react";
import { ExamsList } from "../ExamsList/ExamsList";
import S from "./SpoilerProgram.module.scss";
import mappingData from "../../assets/data/mappingData.json";

export const SpoilerProgram = ({ program }) => {
  const [isShowMoreInfo, setIsShowMoreInfo] = useState(false);
  const [specializationCode, specializationName] =
    program.nameSpecialization.split(" - ");

  const handleClickShowMore = () => {
    setIsShowMoreInfo(!isShowMoreInfo);
  };

  console.log(program);

  return (
    <div className={S["program"]}>
      <div className={S["program-visible"]}>
        <div className={S["program-head"]}>
          <h3 className={S["program-head__name"]}>{program.nameProgram}</h3>
          <div className={S["program-head__specialization"]}>
            <span className={S["program-head__spec-code"]}>
              {specializationCode}
            </span>
            <span className={S["program-head__spec-name"]}>
              {specializationName}
            </span>
          </div>
        </div>
        <div className={S["program-body"]}>
          <div className={S["program-body__specificity"]}>
            <div className={S["program-body__item"]}>
              Базовое высшее образование
            </div>
            <div className={S["program-body__item"]}>
              {mappingData.formMapping[program.form]}
            </div>
            <a
              href=""
              className={S["program-body__button"]}>
              Описание программы &raquo;
            </a>
          </div>
        </div>
        <div className={S["program-bottom"]}>
          <button
            className={S["program-bottom__more"]}
            onClick={() => handleClickShowMore()}>
            {isShowMoreInfo ? "Скрыть" : "Показать"} подробную информацию
          </button>
        </div>
      </div>
      {isShowMoreInfo && (
        <div className={S["program-hidden"]}>
          <div className={S["program-info"]}>
            <div className={S["program-info__item"]}>
              <h4 className={S["program-info__name"]}>Бюджетные места</h4>
              <p className={S["program-info__value"]}>{program.kcp}</p>
            </div>
            <div className={S["program-info__item"]}>
              <h4 className={S["program-info__name"]}>Форма обучения</h4>
              <p className={S["program-info__value"]}>
                {mappingData.formMapping[program.form]}
              </p>
            </div>
            <div className={S["program-info__item"]}>
              <h4 className={S["program-info__name"]}>Проходной балл</h4>
              <p className={S["program-info__value"]}>{program.score}</p>
            </div>
            <div className={S["program-info__item"]}>
              <h4 className={S["program-info__name"]}>Стоимость обучения</h4>
              <p className={S["program-info__value"]}>
                {program.price} &#8381;
              </p>
            </div>
          </div>
          <div className={S["program-exams"]}>
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
    </div>
  );
};
