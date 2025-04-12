import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';
import { useNavigate } from 'react-router-dom';

function Projects() {
  const navigate = useNavigate();

  const handleProjectClick = (path) => {
    navigate(path);
  };

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Entries</h1>
      <p>(Click one of the entries)</p>
      <br />
      <br />
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Entry 1"
          // p="Streaming App"
          onClick={() => handleProjectClick('/projects/1/page1')}
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Entry 2"
          // p="Hamburger Restaurant"
          onClick={() => handleProjectClick('/projects/1/page2')}
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Entry 3"
          // p="Glasses Shop"
          onClick={() => handleProjectClick('/projects/1/page3')}
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Entry "
          // p="Fitness App"
          onClick={() => handleProjectClick('/projects/1/page4')}
        />
      </div>
    </section>
  );
}

export default Projects;
