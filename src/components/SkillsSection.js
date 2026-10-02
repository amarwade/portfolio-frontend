import { 
  IconSettings, 
  IconDatabase, 
  IconRocket,
  IconLightbulb,
  IconLaptop,
  IconTool
} from './Icons';
import SectionHeading from "./SectionHeading";

// Map category IDs to icons
const categoryIcons = {
  backend: IconRocket,
  frontend: IconLaptop,
  databases: IconDatabase,
  security: IconSettings,
  devops: IconRocket,
  testing: IconTool,
  architecture: IconLightbulb,
  tools: IconTool,
  systems: IconLaptop,
};

const categoryColors = {
  backend: { bg: '#0f766e', border: '#5eead4', glow: 'rgba(15, 118, 110, 0.18)' },
  frontend: { bg: '#256d78', border: '#72c6c4', glow: 'rgba(37, 109, 120, 0.18)' },
  databases: { bg: '#9a6b24', border: '#d6b16a', glow: 'rgba(154, 107, 36, 0.18)' },
  security: { bg: '#55786c', border: '#9bc5af', glow: 'rgba(85, 120, 108, 0.18)' },
  devops: { bg: '#456b86', border: '#8db7cd', glow: 'rgba(69, 107, 134, 0.18)' },
  testing: { bg: '#287e89', border: '#85d1d0', glow: 'rgba(40, 126, 137, 0.18)' },
  architecture: { bg: '#55786c', border: '#9bc5af', glow: 'rgba(85, 120, 108, 0.18)' },
  tools: { bg: '#456b86', border: '#8db7cd', glow: 'rgba(69, 107, 134, 0.18)' },
  systems: { bg: '#287e89', border: '#85d1d0', glow: 'rgba(40, 126, 137, 0.18)' },
};

function SkillsSection({ categories }) {
  return (
    <section id="skills" className="section section-cv reveal-on-scroll">
      <SectionHeading
        eyebrow="Mon expertise"
        title="Compétences techniques"
        description="Technologies et outils que j’utilise au quotidien"
        className="skills-heading"
      />
      
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
