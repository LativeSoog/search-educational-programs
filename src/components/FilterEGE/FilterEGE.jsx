import { useState } from "react";
import S from "./FilterEGE.module.scss";

export const FilterEGE = ({ setIsShowFilter }) => {
  const [examMark, setExamMark] = useState({
    biology: false,
    geography: false,
    fLanguages: false,
    history: false,
    literature: false,
    mathematics: false,
    socialS: false,
    rLanguage: false,
    physics: false,
    chemistry: false,
    informatics: false,
  });

  const handleChangeExamValue = (nameExam, value) => {
    setExamMark((prevState) => ({ ...prevState, [nameExam]: value }));
  };

  const handleCloseWindow = () => {
    setIsShowFilter((prevState) => ({ ...prevState, EGE: false }));
  };

  return (
    <div className={S["wrapper"]}>
      <div className={S["content"]}>
        <div
          className={S["close-window"]}
          onClick={() => handleCloseWindow()}>
          <img
            src="/assets/images/icon/close.svg"
            className={S["close-window__icon"]}
          />
        </div>
        <h3 className={S["content__title"]}>Калькулятор ЕГЭ</h3>
        <p className={S["content__description"]}>
          Укажите баллы предметов ЕГЭ, которые вы сдавали
        </p>
        <div className={S["exams"]}>
          <label className={S["exams__item"]}>
            <span className={S["exams__name"]}>Биология</span>
            <input
              className={S["exams__value"]}
              type="number"
              id="biology"
              min={0}
              max={100}
              value={examMark.biology}
              onInput={(e) =>
                handleChangeExamValue(e.target.id, e.target.value)
              }
            />
          </label>
          <label className={S["exams__item"]}>
            <span className={S["exams__name"]}>География</span>
            <input
              className={S["exams__value"]}
              type="number"
              id="geography"
              min={0}
              max={100}
              value={examMark.geography}
              onInput={(e) =>
                handleChangeExamValue(e.target.id, e.target.value)
              }
            />
          </label>
          <label className={S["exams__item"]}>
            <span className={S["exams__name"]}>Иностранные языки</span>
            <input
              className={S["exams__value"]}
              type="number"
              id="fLanguages"
              min={0}
              max={100}
              value={examMark.fLanguages}
              onInput={(e) =>
                handleChangeExamValue(e.target.id, e.target.value)
              }
            />
          </label>
          <label className={S["exams__item"]}>
            <span className={S["exams__name"]}>История</span>
            <input
              className={S["exams__value"]}
              type="number"
              id="history"
              min={0}
              max={100}
              value={examMark.history}
              onInput={(e) =>
                handleChangeExamValue(e.target.id, e.target.value)
              }
            />
          </label>
          <label className={S["exams__item"]}>
            <span className={S["exams__name"]}>Литература</span>
            <input
              className={S["exams__value"]}
              type="number"
              id="literature"
              min={0}
              max={100}
              value={examMark.literature}
              onInput={(e) =>
                handleChangeExamValue(e.target.id, e.target.value)
              }
            />
          </label>
          <label className={S["exams__item"]}>
            <span className={S["exams__name"]}>Математика</span>
            <input
              className={S["exams__value"]}
              type="number"
              id="mathematics"
              min={0}
              max={100}
              value={examMark.mathematics}
              onInput={(e) =>
                handleChangeExamValue(e.target.id, e.target.value)
              }
            />
          </label>
          <label className={S["exams__item"]}>
            <span className={S["exams__name"]}>Обществознание</span>
            <input
              className={S["exams__value"]}
              type="number"
              id="socialS"
              min={0}
              max={100}
              value={examMark.socialS}
              onInput={(e) =>
                handleChangeExamValue(e.target.id, e.target.value)
              }
            />
          </label>
          <label className={S["exams__item"]}>
            <span className={S["exams__name"]}>Русский язык</span>
            <input
              className={S["exams__value"]}
              type="number"
              id="rLanguage"
              min={0}
              max={100}
              value={examMark.rLanguage}
              onInput={(e) =>
                handleChangeExamValue(e.target.id, e.target.value)
              }
            />
          </label>
          <label className={S["exams__item"]}>
            <span className={S["exams__name"]}>Физика</span>
            <input
              className={S["exams__value"]}
              type="number"
              id="physics"
              min={0}
              max={100}
              value={examMark.physics}
              onInput={(e) =>
                handleChangeExamValue(e.target.id, e.target.value)
              }
            />
          </label>
          <label className={S["exams__item"]}>
            <span className={S["exams__name"]}>Химия</span>
            <input
              className={S["exams__value"]}
              type="number"
              id="chemistry"
              min={0}
              max={100}
              value={examMark.chemistry}
              onInput={(e) =>
                handleChangeExamValue(e.target.id, e.target.value)
              }
            />
          </label>
          <label className={S["exams__item"]}>
            <span className={S["exams__name"]}>Информатика</span>
            <input
              className={S["exams__value"]}
              type="number"
              id="informatics"
              min={0}
              max={100}
              value={examMark.informatics}
              onInput={(e) =>
                handleChangeExamValue(e.target.id, e.target.value)
              }
            />
          </label>
        </div>
        <div className={S["buttons"]}>
          <button className={S["buttons__accept"]}>Применить</button>
          <button
            className={S["buttons__clear"]}
            onClick={() => handleClearExamValue()}>
            Сбросить
          </button>
        </div>
      </div>
    </div>
  );
};
