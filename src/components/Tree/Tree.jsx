import { useState } from "react";
import { TopButtons } from "../Buttons/TopButtons";
import { SpoilerFaculty } from "../Spoilers/SpoilerFaculty";
import S from "./Tree.module.scss";
import { FilterEGE } from "../FilterEGE/FilterEGE";

export const Tree = () => {
  const [isShowFilter, setIsShowFilter] = useState({
    EGE: false,
  });

  return (
    <>
      {isShowFilter.EGE && <FilterEGE setIsShowFilter={setIsShowFilter} />}

      <div className={S["wrapper"]}>
        <div className={S["content"]}>
          <h1 className={S["title-page"]}>
            Реализуемые программы базового высшего образования и бакалавриата
          </h1>
          <div className={S["container-buttons"]}>
            <TopButtons setIsShowFilter={setIsShowFilter} />
          </div>
          <div className={S["container-programs"]}>
            <SpoilerFaculty />
          </div>
        </div>
      </div>
    </>
  );
};
