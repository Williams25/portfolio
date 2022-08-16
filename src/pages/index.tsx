import type { NextPage } from "next";
import { Banner, Skills } from "src/components";
import { skillsMock } from "src/components/Skills/mock";

const Home: NextPage = () => {
  return (
    <div>
      <Banner />

      <Skills skills={skillsMock} />
    </div>
  );
};

export default Home;
