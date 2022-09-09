import Link from "next/link";
import { Container } from "..";
import * as S from "./styles";

export const Projects = () => {
  return (
    <S.Projects id="projects">
      <Container>
        <h1>Projects</h1>
        <p>
          These are some of my projects developed through (courses, studies,
          workshops and university works), to see more of my projects visit{" "}
          <Link href="https://github.com/Williams25">
            <a aria-label="go to Github" target="_blank" draggable={false}>
              Github
            </a>
          </Link>
          .
        </p>
      </Container>
    </S.Projects>
  );
};
