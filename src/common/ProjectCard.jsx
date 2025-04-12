import React from 'react';
import styles from './ProjectCardStyles.module.css';

function ProjectCard({ src, link, h3, p, onClick }) {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault(); // Prevent default link behavior if onClick is provided
      onClick();
    }
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <a href={link} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
        <img src={src} alt={h3} className={styles.image} />
        <h3>{h3}</h3>
        <p>{p}</p>
      </a>
    </div>
  );
}

export default ProjectCard;
