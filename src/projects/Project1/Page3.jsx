import styles from './PageStyles.module.css';

function Page3() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Entry 3</h1>
      <h2 className={styles.subtitle}>Witthöft, J., Aydin, B., & Pietsch, M. (2024). Leading digital innovation in schools: the role of the open innovation mindset. Journal of research on technology in education, 1-20. https://doi.org/10.1080/15391523.2024.2398528 </h2>
      <div className={styles.description}>
        <div>
          <h3>Summary</h3>
          <p>
            The article examines the critical role of school leaders in fostering digital innovation through an open innovation mindset (OIM). The study highlights the importance of transformational leadership (TL) and effective knowledge management (KM) practices in driving digital transformation in schools. By analyzing a sample of German school leaders, the authors demonstrate that an OIM, characterized by openness, creativity, a positive attitude towards knowledge sharing, and risk tolerance, significantly influences TL practices. These leadership practices, in turn, enhance KM, which is crucial for implementing digital innovations. The findings suggest that school leaders with an OIM can create a collaborative culture that supports digital innovation. The study underscores the need for professional development programs to cultivate these dynamic capabilities in school leaders, thereby facilitating sustainable digital transformation in educational settings.
          </p>
        </div>
        <div>
          <h3>Evaluative Judgement</h3>
          <p>
            One key point that is highlighted in the article is the importance of open innovation mindset (OIM) in fostering a collaborative culture that supports digital innovation. In the context of leading educational technology change in schools with diverse contexts, school leaders with an OIM can create an environment where teachers feel valued and empowered to share their unique perspectives and innovative ideas, fostering a sense of community and collective effort towards digital transformation. However, implementing an OIM in such a diverse schools can be challenging as each school is different; Different school culture may affect how teachers perceive and engage with digital innovation. For instance, some cultures may have a higher tolerance for risk and failure, while others may be more risk averse. 
            <br />
            <br />
            Additionally, varying levels of digital literacy and access to resources can create disparities in how effectively teachers can participate in and contribute to digital innovation initiatives. To address these challenges, school leaders must adopt a culturally responsive approach. Bicalho et al. (2023) argue that the most important aspect in an ICT integration is not the use of ICT, but understanding sociocultural context of teachers and students needs is more important. Although they reference it in the context of ICT integration using the SAMR model, it is also applicable to the implementation of an open innovation mindset (OIM). This also aligns with Leite and Lagstedt (2021) that says it is important to address emotional, social, and cognitive aspects of teachers within four CIT’s states. By implementing OIM while considering different cultural context, school leaders can ensure that the benefits of OIM are realized across the entire school community, leading to a more effective digital innovation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page3;
