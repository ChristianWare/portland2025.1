import LayoutWrapper from '../LayoutWrapper';
import Scene2 from '../Scene2/Scene2';
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './BlogHero.module.css'

export default function BlogHero() {
   return (
     <section className={styles.container}>
       <LayoutWrapper>
         <div className={styles.content}>
           <div className={styles.left}>
             <SectionHeading
               title='About Me'
               color='black'
               dotColor='blackDot'
             />
             <h1 className={styles.heading}>
              Blog
               <br />
               <span className={styles.heading2}>blog</span>.
             </h1>
             <p className={styles.copy}>
               {/* Functional is a lightweight app for small teams to streamline
              <span className={styles.span}> timesheets,</span> time off and
              track
              <span className={styles.span}> employee wellbeing,</span> all
              inside the team chat. */}
               I have extensive knowledge of{" "}
               <span className={styles.span}>
                 HTML, CSS, JavaScript, React, and Next JS.
               </span>{" "}
               I specialize in building web apps with Next JS and React. My
               <span className={styles.span}>
                 background in design and finance
               </span>{" "}
               enables me to understand both the aesthetic and business aspects
               of any project. I am committed to delivering high-quality,
               SEO-friendly, and client-focused web experiences.
               <br />
               <br />I have experience designing, coding, and deploying a
               variety of websites, from{" "}
               <span className={styles.span}>Landing Pages</span> to fully
               functional{" "}
               <span className={styles.span}>E-commerce Stores.</span> My
               personal website, chrisware.dev, reflects my attention to detail
               in making sure each app is aesthetically pleasing and
               semantically structured.
             </p>
           </div>
           <div className={styles.right}>
             <div className={styles.sceneContianer}>
               <Scene2 useViewportScale={false} fixedScale={[1.6, 1.6, 1]} />{" "}
             </div>
           </div>
         </div>
       </LayoutWrapper>
     </section>
   );
 }