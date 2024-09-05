import { useState } from "react";
import S from "./FilterEGE.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeFilters } from "../../store/treeSlice";

export const FilterEGE = ({ setIsShowFilter }) => {
  const dispatch = useDispatch();
  const programs = useSelector((state) => state.tree.listPrograms);
  const [examsScore, setExamsScore] = useState({
    biology: { id: 1, nameExam: "Биология", minScore: 39, score: "" },
    geography: { id: 2, nameExam: "География", minScore: 40, score: "" },
    fLanguages: {
      id: 3,
      nameExam: "Иностранный язык",
      minScore: 30,
      score: "",
    },
    history: { id: 4, nameExam: "История", minScore: 35, score: "" },
    literature: { id: 5, nameExam: "Литература", minScore: 40, score: "" },
    mathematics: { id: 6, nameExam: "Математика", minScore: 39, score: "" },
    socialS: { id: 7, nameExam: "Обществознание", minScore: 42, score: "" },
    rLanguage: { id: 8, nameExam: "Русский язык", minScore: 42, score: "" },
    physics: { id: 9, nameExam: "Физика", minScore: 39, score: "" },
    chemistry: { id: 10, nameExam: "Химия", minScore: 39, score: "" },
    informatics: {
      id: 11,
      nameExam: "Информатика и ИКТ",
      minScore: 44,
      score: "",
    },
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
          (examKey) => examsScore[examKey].score != ""
        );

        if (enteredExams.length === 0) {
          return false;
        }

        const priorityGroups = program.examsEGE.reduce((groups, exam) => {
          if (!groups[exam.priority]) {
            groups[exam.priority] = [];
          }
          groups[exam.priority].push(exam.examId);
          return groups;
        }, {});

        const isValid = Object.values(priorityGroups).every((group) => {
          const hasMatchingExam = group.some((examId) =>
            enteredExams.some((examKey) => examsScore[examKey].id === examId)
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

  const handleChangeFilters = () => {
    dispatch(changeFilters(filterPrograms()));
    handleCloseWindow();
  };

  const handleClearExamValue = () => {
    setExamsScore((prevScores) => {
      const updatedScores = { ...prevScores };
      Object.keys(updatedScores).forEach((key) => {
        updatedScores[key].score = "";
      });
      return updatedScores;
    });
    dispatch(changeFilters(false));
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
          <button
            className={S["buttons__accept"]}
            onClick={() => handleChangeFilters()}>
            Применить
          </button>
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
