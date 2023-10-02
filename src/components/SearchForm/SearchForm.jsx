import css from './SearchForm.module.scss';

const SearchForm = ({ onsubmit }) => {
  return (
    <section className={css.FormWrapper}>
      <form
        action=""
        method="POST"
        onSubmit={e => onsubmit(e)}
        className={css.Form}
      >
        <input
          type="text"
          name="search"
          required
          placeholder="Search"
          className={css.Input}
        />
        <button type="submit" className={css.Button}>
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
