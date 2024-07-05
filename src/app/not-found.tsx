import Typo from "@components/Typo";

import { commonRecipe } from "./style.css";

export default function Custom404() {
  return (
    <div className={commonRecipe()}>
      <Typo>404</Typo>
    </div>
  );
}
