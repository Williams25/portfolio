import type { NextPage } from "next";
import { Banner, Contact, Skills, Projects } from "src/components";
import { skillsMock } from "src/components/Skills/mock";

const Home: NextPage = () => {
  return (
    <main role="main">
      <Banner />

      <Skills skills={skillsMock} />

      <Projects />

      <Contact />
    </main>
  );
};

export default Home;
