import React from "react";
import S from "./ExamsList.module.scss";

const groupSortExamByPriority = (exams) => {
  const groupedExams = exams.reduce((acc, exam) => {
    const { priority } = exam;

    if (!acc[priority]) {
      acc[priority] = [];
    }

    acc[priority].push(exam);

    return acc;
  }, {});

  return Object.entries(groupedExams)
    .map(([priority, exams]) => ({
      priority: Number(priority),
      exams,
    }))
    .sort((a, b) => a.priority - b.priority);
};

export const ExamsList = ({ nameList, examsList }) => {
  const sortedExams = groupSortExamByPriority(examsList);

  return (
    <div className={S["container-exams"]}>
      <p className={S["container-exams__title"]}>{nameList}</p>
      <ol className={S["exams-list"]}>
        {sortedExams.map(({ priority, exams }) => (
          <li
            className={S["exams-list__item"]}
            key={priority}>
            {exams.map((exam, index) => (
              <React.Fragment key={exam.id}>
                <a
                  href={exam.link}
                  target="_blank">
                  {exam.nameExam}
                </a>
                {index < exams.length - 1 ? " / " : ""}
              </React.Fragment>
            ))}
          </li>
        ))}
      </ol>
    </div>
  );
};
