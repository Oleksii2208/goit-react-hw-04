import s from "./SearchBar.module.css";
import toast from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const query = form.elements.query.value.trim();
    // if (!query) return;
    if (query === "") {
      toast.error("Please enter search term!");
      return;
    }
    onSubmit(query);
    form.reset();
  };
  return (
    <>
      <header className={s.header}>
        <form className={s.form} onSubmit={handleSubmit}>
          <input
            className={s.input}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={s.button} type="submit">
            Search
          </button>
        </form>
      </header>
    </>
  );
};

export default SearchBar;
