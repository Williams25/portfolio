import Link from "next/link";
import { useAnalytics } from "src/hooks/useAnalytics";
import { Container } from "..";
import * as S from "./styles";

export const Projects = () => {
  const { viewGithub } = useAnalytics();

  return (
    <S.Projects id="projects">
      <Container>
        <h1>Projects</h1>
        <p>
          These are some of my projects developed through (courses, studies,
          workshops and university works), to see more of my projects visit{" "}
          <Link href="https://github.com/Williams25">
            <a
              aria-label="go to Github"
              target="_blank"
              draggable={false}
              onClick={viewGithub}
            >
              Github
            </a>
          </Link>
          .
        </p>
      </Container>
    </S.Projects>
  );
};
