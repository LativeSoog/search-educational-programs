import { TopButtons } from "../Buttons/TopButtons";
import { SpoilerFaculty } from "../Spoilers/SpoilerFaculty";
import S from "./Tree.module.scss";

export const Tree = () => {
  return (
    <div className={S["wrapper"]}>
      <div className={S["content"]}>
        <h1 className={S["title-page"]}>
          Реализуемые программы базового высшего образования и бакалавриата
        </h1>
        <div className={S["container-buttons"]}>
          <TopButtons />
        </div>
        <div className={S["container-programs"]}>
          <SpoilerFaculty />
        </div>
      </div>
    </div>
  );
};
