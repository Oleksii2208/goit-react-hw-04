import s from "./Loader.module.css";

import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className={s.loader}>
      <ClipLoader
        color="#B693C0"
        // loading={loading}
        // cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
