import { SkillIcons } from './Icons';

function SkillsSection({ categories }) {
  const getSkillIcon = (title) => {
    const IconComponent = SkillIcons[title] || SkillIcons.Default;
    return <IconComponent size={24} />;
  };

  return (
    <section id="skills" className="section section-cv reveal-on-scroll">
      <h2 className="cv-section-title">Compétences</h2>
      <div className="skills-enhanced">
        {categories.map((category, index) => (
          <div key={category.id} className="skill-category-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="skill-category-header">
              <div className="skill-icon">
                {getSkillIcon(category.title)}
              </div>
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-count">{category.items.length}</div>
            </div>
            <div className="skill-items">
              {category.items.map((skill, skillIndex) => (
                <div key={skill} className="skill-item" style={{ animationDelay: `${index * 0.1 + skillIndex * 0.05}s` }}>
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
