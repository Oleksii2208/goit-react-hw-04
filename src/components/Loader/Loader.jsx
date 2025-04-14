import s from "./Loader.module.css";

import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className={s.loader}>
      <ClipLoader
        color="rgb(10, 200, 255)"
        size={70}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
