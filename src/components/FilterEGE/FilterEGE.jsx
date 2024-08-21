import { useState } from "react";
import S from "./FilterEGE.module.scss";
import { useSelector } from "react-redux";

export const FilterEGE = ({ setIsShowFilter }) => {
  const programs = useSelector((state) => state.tree.listPrograms);
  const [examsScore, setExamsScore] = useState({
    biology: { nameExam: "Биология", score: undefined },
    geography: { nameExam: "География", score: undefined },
    fLanguages: { nameExam: "Иностранный язык", score: undefined },
    history: { nameExam: "История", score: undefined },
    literature: { nameExam: "Литература", score: undefined },
    mathematics: { nameExam: "Математика", score: undefined },
    socialS: { nameExam: "Обществознание", score: undefined },
    rLanguage: { nameExam: "Русский язык", score: undefined },
    physics: { nameExam: "Физика", score: undefined },
    chemistry: { nameExam: "Химия", score: undefined },
    informatics: { nameExam: "Информатика и ИКТ", score: undefined },
  });

  const handleChangeExamValue = (nameExam, value) => {
    setExamsScore((prevState) => ({
      ...prevState,
      [nameExam]: { ...prevState[nameExam], score: value },
    }));
  };

  const handleCloseWindow = () => {
    setIsShowFilter((prevState) => ({ ...prevState, EGE: false }));
  };

  const filterPrograms = () => {
    return programs.reduce((acc, faculty) => {
      const validPrograms = faculty.programsFaculty.filter((program) => {
        const enteredExams = Object.keys(examsScore).filter(
          (examKey) => examsScore[examKey].score != null
        );

        if (enteredExams.length === 0) {
          return false;
        }

        const priorityGroups = program.examsEGE.reduce((groups, exam) => {
          if (!groups[exam.priority]) {
            groups[exam.priority] = [];
          }
          groups[exam.priority].push(exam.nameExam);
          return groups;
        }, {});

        const isValid = Object.values(priorityGroups).every((group) => {
          const hasMatchingExam = group.some((examName) =>
            enteredExams.some(
              (examKey) => examsScore[examKey].nameExam === examName
            )
          );

          return hasMatchingExam;
        });

        return isValid;
      });

      if (validPrograms.length > 0) {
        acc.push({
          ...faculty,
          programsFaculty: validPrograms,
        });
      }
      return acc;
    }, []);
  };

  const result = filterPrograms();
  console.log(result);

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
          {Object.entries(examsScore).map(([examKey, examData]) => (
            <label
              className={S["exams__item"]}
              key={examKey}>
              <span className={S["exams__name"]}>{examData.nameExam}</span>
              <input
                className={S["exams__value"]}
                type="number"
                id={examKey}
                min={0}
                max={100}
                value={examData.score}
                onInput={(e) =>
                  handleChangeExamValue(e.target.id, e.target.value)
                }
              />
            </label>
          ))}
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
