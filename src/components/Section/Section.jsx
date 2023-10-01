import css from './Section.module.scss';

const Section = ({ title, children }) => {
  return (
    <section className={css.Section}>
      <div className={css.SectionContainer}>
        {title && <h2>{title}</h2>}
        {children}
      </div>
    </section>
  );
};

export default Section;
