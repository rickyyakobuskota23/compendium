import styles from './PageStyles.module.css';

function Page2() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Entry 2</h1>
      <h2 className={styles.subtitle}>Leite, L. O., & Lagstedt, A. (2021). The Collective Integration of Technology (CIT) Model: Helping Teachers Incorporate Technology Meaningfully in their Everyday Work. International journal of education and development using information and communication technology, 17(3), 249-268. </h2>
      <div className={styles.description}>
        <div>
          <h3>Summary</h3>
          <p>
            The article presents a model to help teachers in integrating educational technology (EdTech) effectively. The Collective Integration of Technology (CIT) model identifies the four states teachers experience: shock, negotiation, empowerment, and explorer. These four states encompass the emotional, cognitive, and social processes that teachers experience when adopting new technology. The model emphasizes the importance of support from trainers and school leaders and fostering a collaborative culture where empowered teachers assist their peers. The article compares the CIT model with existing frameworks like UTAUT and TPACK, highlighting its comprehensive approach to managing change at both organizational and individual levels. The findings indicate that the CIT model offers practical tools for trainers supporting school teachers in integrating educational technology into their professional practices. In addition, it also emphasizes the need to align EdTech integration with school policies and integrated into university programs, underscoring the importance of equipping future educators from the start of their education. Future research will focus on empirical validation and further refinement of the model.
          </p>
        </div>
        <div>
          <h3>Evaluative Judgement</h3>
          <p>
            I am interested in how this model views the integration of technology holistically from a teacher's perspective. The four states described highlight the different needs of teachers in three aspects. Emotional, social, and cognitive aspects must be addressed for teachers throughout the process of integrating new technology into learning, which can be achieved by fostering a collaborative culture in schools. Given the large number of schools and teachers, systematic planning is necessary to prepare this collaborative culture. However, it should be noted that this model emphasizes the role of school leaders for success. The article assumes that school leaders are already prepared to carry out their duties. This model explains what school leaders need to do, but does not provide what school leaders need to succeed in their tasks. 
            <br />
            <br />
            Witthöft et al. (2024) in their research state that digital transformation in schools requires a change in stakeholders' mindset; Their research shows that collaboration culture in schools is significantly influenced by the open innovation mindset (OIM) of school leaders. It involves leaders’ openness, creativity, positive attitude towards knowledge sharing and risks, and failure tolerance. In conclusion, the CIT model in this article is very good at explaining how to support teachers in their tasks, but there needs to be more discussion on how to strengthen the role of school leaders in carrying out their duties to support teachers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page2;
