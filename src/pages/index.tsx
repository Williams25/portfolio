import type { NextPage } from "next";
import { Banner, Contact, Skills } from "src/components";
import { skillsMock } from "src/components/Skills/mock";

const Home: NextPage = () => {
  return (
    <main role="main">
      <Banner />

      <Skills skills={skillsMock} />

      <Contact />
    </main>
  );
};

export default Home;
