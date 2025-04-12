import styles from './PageStyles.module.css';

function Page1() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Entry 1</h1>
      <h2 className={styles.subtitle}>Bicalho, R. N. d. M., Coll, C., Engel, A., & Lopes de Oliveira, M. C. S. (2023). Integration of ICTs in teaching practices: propositions to the SAMR model. Educational Technology Research and Development, 71(2), 563-578. https://doi.org/10.1007/s11423-022-10169-x </h2>
      <div className={styles.description}>
        <div>
          <h3>Summary</h3>
          <p>
            The article examines the integration of Information and Communication Technologies (ICTs) in teaching, using the SAMR model to evaluate their impact. The key findings are most teachers used ICTs at substitution and augmentation levels, encountering two layers of barriers. However, this article focuses on overcoming the second-order barriers, which are teacher attitudes and beliefs towards technology. The article emphasizes the need for a sociocultural perspective to understand the barriers. It then gives some proposition for improving the SAMR model based on the findings. Firstly, recognizing the importance of sociocultural contexts in ICT integration. Secondly, allowing for transitions between deferent levels of the SAMR model based on contextual factors. Lastly, emphasizing the role of ICTs in creating a new learning ecology that supports student-centered practices and active methodologies. In conclusion, the article suggests a more flexible and context-sensitive approach to the SAMR model, highlighting the importance of pedagogical intentionality and the dynamic nature of teaching and learning processes. 
          </p>
        </div>
        <div>
          <h3>Evaluative Judgement</h3>
          <p>
            The findings of this article are highly relevant to my context of leading educational technology innovation across a network of K-12 schools in Indonesia. The study’s emphasis on the sociocultural context aligns with the diverse environments of these schools. The propositions for improving the SAMR model offer valuable insights for developing tailored ICT integration plans that consider each school’s unique needs. This is significant for ensuring that technology enhances learning outcomes rather than being used prescriptively by teachers just to fulfill the tasks to integrate ICT. One limitation of the study is its focus on a single educational institution, which may not fully capture the greater complexity present in my context across different schools in Indonesia. 
            <br />
            <br />
            However, this also presents an opportunity to apply the findings in a broader context and adapt the propositions to fit various educational settings. The article's insights into second-order barriers, such as teachers' beliefs and attitudes, provide a foundation for targeted professional development programs. Kohnke et al. (2024) found that professional development with microlearning, guided by SAMR model, significantly influence teachers’ digital competence, confidence, while also enabling them to focus on developing their skills based on their individual needs. Its relevance to the Indonesian school network context is evident, offering a framework for addressing the challenges and opportunities of ICT integration.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page1;
