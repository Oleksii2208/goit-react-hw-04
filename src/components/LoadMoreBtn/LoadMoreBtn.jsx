import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  // if (page >= totalPages) return;
  return (
    <>
      <button className={s.button} onClick={onClick}>
        Load more
      </button>
    </>
  );
};

export default LoadMoreBtn;
