import type { GetStaticProps } from "next";
import { Banner, Contact, Skills, Projects } from "src/components";
import { SkillsProps } from "src/components/Skills";
import { skillsMock } from "src/components/Skills/mock";

type HomeProps = SkillsProps;

const Home = ({ skills }: HomeProps) => {
  return (
    <main role="main">
      <Banner />

      <Skills skills={skills} />

      <Projects />

      <Contact />
    </main>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = () => {
  return {
    props: {
      skills: skillsMock
    },
    revalidate: 60 * 60 * 1 // Cache response for 1 hour
  };
};

export default Home;
