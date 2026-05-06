import { useState, useMemo, useEffect } from "react";
import { IconLaptop, IconAtom, IconTool } from './Icons';

function initialsFromName(name) {
  if (!name || typeof name !== "string") return "?";
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function HeroSection({ profile }) {
  const [photoFailed, setPhotoFailed] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const showPhoto = Boolean(profile.heroImage) && !photoFailed;
  const initials = useMemo(() => initialsFromName(profile.name), [profile.name]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="about" className="section hero enhanced" aria-labelledby="hero-heading">
      <div className="hero__background">
        <div className="hero__particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
        <div 
          className="hero__gradient-orb"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
      </div>
      
      <div className="hero__grid">
        <div className={`hero__content ${isLoaded ? 'loaded' : ''}`}>
          <div className="hero__badge">
            <span className="badge-pulse"></span>
            {profile.eyebrow ?? "Portfolio"}
          </div>
          
          <h1 id="hero-heading" className="hero__title">
            <span className="title-word" style={{ animationDelay: '0.1s' }}>
              {profile.name.split(' ')[0]}
            </span>
            {profile.name.split(' ').slice(1).map((word, i) => (
              <span key={i} className="title-word" style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
                {word}
              </span>
            ))}
          </h1>
          
          {profile.heroTagline ? (
            <p className="hero-tagline">{profile.heroTagline}</p>
          ) : null}
          
          <h2 className="hero__subtitle">{profile.title}</h2>
          
          <p className="hero__description">{profile.pitch}</p>
          
          <div className="hero__actions">
            <button 
              className="button primary enhanced"
              onClick={(e) => handleSmoothScroll(e, 'projects')}
            >
              <span className="button-content">
                <span className="button-text">Voir mes projets</span>
                <svg className="button-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </span>
              <div className="button-ripple"></div>
            </button>
            
          </div>
        </div>

        <div className={`hero__visual ${isLoaded ? 'loaded' : ''}`}>
          <div className="hero__visual-effects">
            <div className="floating-card card-1">
              <div className="card-icon"><IconLaptop size={20} /></div>
              <span>Java</span>
            </div>
            <div className="floating-card card-2">
              <div className="card-icon"><IconAtom size={20} /></div>
              <span>React</span>
            </div>
            <div className="floating-card card-3">
              <div className="card-icon"><IconTool size={20} /></div>
              <span>Spring</span>
            </div>
          </div>
          
          <div className="hero-photo-container">
            <div className="hero-photo-glow" />
            <figure className="hero-photo">
              {showPhoto ? (
                <img
                  src={profile.heroImage}
                  alt={profile.heroImageAlt || profile.name}
                  width={400}
                  height={500}
                  loading="eager"
                  decoding="async"
                  className="hero-photo__img"
                  onError={() => setPhotoFailed(true)}
                />
              ) : (
                <div className="hero-photo__fallback" aria-hidden="true">
                  {initials}
                </div>
              )}
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
