import styles from './PageStyles.module.css';

function Page4() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Entry 4</h1>
      <h2 className={styles.subtitle}>Kohnke, L., Foung, D., Zou, D., & Jiang, M. (2024). Creating the conditions for professional digital competence through microlearning. Educational Technology ＆ Society, 27(1), 183-197. https://doi.org/10.30191/ETS.202401_27(1).SP05 </h2>
      <div className={styles.description}>
        <div>
          <h3>Summary</h3>
          <p>
            The article explores the use of microlearning as an innovative approach to teacher professional development (TPD) in Hong Kong. It addresses the limitations of traditional TPD methods and emphasizes the need for teachers to develop digital competence, especially in the wake of the COVID-19 pandemic. The study employs a qualitative case study approach, involving 32 pre-service English language teachers, and uses data from questionnaires, interviews, and observations. Key findings include the initial lack of confidence among teachers in using digital tools, the effectiveness of the SAMR framework in improving digital content creation, and the challenges of classroom management with digital tools. The study concludes that microlearning significantly enhances digital competence, TPACK awareness, and SAMR integration, recommending a focus on digital pedagogy and personalized, hands-on training for future TPD initiatives.
          </p>
        </div>
        <div>
          <h3>Evaluative Judgement</h3>
          <p>
            The article highlights the effectiveness of microlearning in enhancing digital competence among pre-service teachers, which is highly relevant for implementing technological innovations in Indonesian schools. Microlearning's flexibility and accessibility make it scalable across a large network of schools, allowing teachers to access training at their convenience. This is particularly beneficial in a culturally diverse country like Indonesia. However, teacher professional development (TPD) through microlearning in this article emphasize more on cognitive aspect of teacher. As Bicalho et al. (2023) in their research identify there are second-order barriers to ICT integration such as teachers’ beliefs and attitudes, which hinder effective ICT integration. Therefore, TPD should balance focus on other aspects rather than just put too much attention on cognitive aspect of teachers. 
            <br />
            <br />
            Additionally, personalizing the TPD content into bite-sized learning objective can potentially reduce the delivery of school particular contexts. Therefore, TPD should also deliver the sociocultural context for teachers to understand before they delve deeper into the content of their subject. Furthermore, Bicalho et al. (2023) found that enabling teachers to transition between different levels of the SAMR model can enhance their digital pedagogy by providing the flexibility to deviate from the prescribed order of levels.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page4;
