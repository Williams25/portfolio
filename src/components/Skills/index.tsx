import Carousel, { ResponsiveType } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  AnimatedCircularProgress,
  AnimatedCircularProgressProps
} from "../AnimatedCircularProgress";
import { Container } from "../Container";
import * as S from "./styles";

const responsive: ResponsiveType = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export type SkillsProps = {
  skills: AnimatedCircularProgressProps[];
};

export const Skills = ({ skills }: SkillsProps) => {
  return (
    <S.Skills>
      <Container
        id="skills"
        data-aos="zoom-in"
        data-aos-offset="500"
        data-aos-duration="500"
      >
        <h1>Skills</h1>
        <Carousel responsive={responsive} infinite={true} ssr={true}>
          {skills.map((sk) => (
            <div key={sk.percent.toString()} className="item">
              <AnimatedCircularProgress
                percent={sk.percent}
                backgroundProgress={sk.backgroundProgress}
                imageSrc={sk.imageSrc}
                label={sk.label}
              />
            </div>
          ))}
        </Carousel>
      </Container>
    </S.Skills>
  );
};
