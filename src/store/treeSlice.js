import { createSlice } from "@reduxjs/toolkit";

const treeSlice = createSlice({
  name: "tree",
  initialState: {
    listPrograms: [
      {
        id: 1,
        nameFaculty: "Географический факультет",
        programsFaculty: [
          {
            id: 1,
            type: 1, //БВО, бакалавриат и т.д.
            nameSpecialization: "44.03.01 - Педагогическое образование",
            nameProgram: "География",
            form: "Очная",
            kcp: 15,
            duration: "4 года",
            score: 208,
            price: 309000,
            examsEGE: [
              {
                id: 1,
                nameExam: "География",
                priority: 1,
                link: "https://mpgu.su/wp-content/uploads/2024/03/bac-bvo_geografiya.pdf",
              },
              {
                id: 2,
                nameExam: "Математика (профильная)",
                priority: 1,
                link: "https://mpgu.su/wp-content/uploads/2024/03/bac-bvo_matematika.pdf",
              },
              {
                id: 3,
                nameExam: "Обществознание",
                priority: 2,
                link: "https://mpgu.su/wp-content/uploads/2024/03/bac-bvo_obshestvoznanie.pdf",
              },
              {
                id: 4,
                nameExam: "Русский язык",
                priority: 3,
                link: "https://mpgu.su/wp-content/uploads/2024/03/bac-bvo_russkiy-yazik.pdf",
              },
            ],
            examsSPO: [
              {
                id: 1,
                nameExam: "Основы естественно-научных знаний",
                priority: 1,
                link: "https://mpgu.su/wp-content/uploads/2024/04/bac-bvo_afterSPO_osn-estestv-nauch-zn.pdf",
              },
              {
                id: 2,
                nameExam: "Основы педагогики",
                priority: 2,
                link: "https://mpgu.su/wp-content/uploads/2024/03/bac-bvo_afterSPO_osn-pedagog.pdf",
              },
              {
                id: 3,
                nameExam: "Русский язык",
                priority: 3,
                link: "https://mpgu.su/wp-content/uploads/2024/03/bac-bvo_russkiy-yazik.pdf",
              },
            ],
          },
        ],
      },
    ],
  },
  reducers: {},
});

export const {} = treeSlice.actions;
export default treeSlice.reducer;
