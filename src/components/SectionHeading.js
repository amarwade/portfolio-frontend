function SectionHeading({ eyebrow, title, description, className = "" }) {
  const classes = ["section-heading", className].filter(Boolean).join(" ");

  return (
    <header className={classes}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="cv-section-title">{title}</h2>
      {description ? (
        <p className="section-heading__description">{description}</p>
      ) : null}
    </header>
  );
}

export default SectionHeading;
