import { 
  IconPalette, 
  IconSettings, 
  IconDatabase, 
  IconRocket,
  IconLightbulb,
  IconLaptop,
  IconTool
} from './Icons';

// Map category IDs to icons
const categoryIcons = {
  languages: IconPalette,
  frameworks: IconRocket,
  databases: IconDatabase,
  architecture: IconLightbulb,
  tools: IconTool,
  systems: IconLaptop,
};

// Color schemes for each category
const categoryColors = {
  languages: { bg: '#7c9cff', border: '#9dbdff', glow: 'rgba(124, 156, 255, 0.25)' },
  frameworks: { bg: '#6b9fff', border: '#8db5ff', glow: 'rgba(107, 159, 255, 0.3)' },
  databases: { bg: '#d4af37', border: '#e5ca6c', glow: 'rgba(212, 175, 55, 0.22)' },
  architecture: { bg: '#8b5cf6', border: '#a78bfa', glow: 'rgba(139, 92, 246, 0.25)' },
  tools: { bg: '#4f46e5', border: '#6366f1', glow: 'rgba(79, 70, 229, 0.25)' },
  systems: { bg: '#0ea5e9', border: '#38bdf8', glow: 'rgba(14, 165, 233, 0.3)' },
};

function SkillsSection({ categories }) {
  return (
    <section id="skills" className="section section-cv reveal-on-scroll">
      <h2 className="cv-section-title">Compétences techniques</h2>
      <p className="skills-subtitle">Technologies et outils que j'utilise au quotidien</p>
      
      <div className="skills-grid-modern">
        {categories.map((category, index) => {
          const IconComponent = categoryIcons[category.id] || IconSettings;
          const colors = categoryColors[category.id] || categoryColors.tools;
          
          return (
            <div 
              key={category.id} 
              className="skill-category-modern"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                '--category-color': colors.bg,
                '--category-border': colors.border,
                '--category-glow': colors.glow
              }}
            >
              <div className="skill-category-header-modern">
                <div 
                  className="skill-icon-modern"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.bg}20, ${colors.bg}10)`,
                    borderColor: colors.border
                  }}
                >
                  <IconComponent size={22} />
                </div>
                <h3 className="skill-category-title-modern">{category.title}</h3>
                <span className="skill-count-modern">{category.items.length}</span>
              </div>
              
              <div className="skill-tags-container">
                {category.items.map((skill, skillIndex) => (
                  <span 
                    key={skill} 
                    className="skill-tag"
                    style={{ 
                      animationDelay: `${index * 0.1 + skillIndex * 0.03}s`,
                      borderColor: colors.border,
                      background: `linear-gradient(135deg, ${colors.bg}15, transparent)`
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SkillsSection;
