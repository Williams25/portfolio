import type { NextPage } from "next";
import { Banner, Skills } from "src/components";
import { skillsMock } from "src/components/Skills/mock";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      mirror: true
    });
  }, []);

  return (
    <>
      <Banner />

      <Skills skills={skillsMock} />
    </>
  );
};

export default Home;
