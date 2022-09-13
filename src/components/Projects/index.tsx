import Link from "next/link";
import { useAnalytics } from "src/hooks/useAnalytics";
import { Container, ProjectCard } from "..";
import * as S from "./styles";

export type ProjectsProps = {
  title: string;
  projectDescription: string;
  projects: {
    name: string;
    link: string;
    image: { url: string };
  }[];
};

export const Projects = ({
  projectDescription,
  projects,
  title
}: ProjectsProps) => {
  const { viewGithub } = useAnalytics();

  return (
    <S.Projects id="projects">
      <Container>
        <h1>{title}</h1>
        <p>
          {projectDescription}, to see more of my projects visit{" "}
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

        <div className="project-items">
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              image={project.image.url}
              title={project.name}
              link={project.link}
            />
          ))}
        </div>
      </Container>
    </S.Projects>
  );
};
