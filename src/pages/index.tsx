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
    <div>
      <Banner />
      <div data-aos="zoom-in-up">
        <Skills skills={skillsMock} />
      </div>
    </div>
  );
};

export default Home;
