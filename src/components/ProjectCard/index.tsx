import Image from "next/image";
import Link from "next/link";
import { useAnalytics } from "src/hooks/useAnalytics";
import * as S from "./styles";

export type ProjectCardProps = {
  image: string;
  title: string;
  link: string;
};

export const ProjectCard = ({ title, link, image }: ProjectCardProps) => {
  const { viewProjects } = useAnalytics();
  return (
    <S.ProjectCard>
      {/* <p className="binary top large" />
      <p className="binary side right" />
      <p className="binary bottom" />
      <p className="binary side left" /> */}

      <div className="image-box">
        <Image
          src={image}
          alt={title}
          width={400}
          height={200}
          objectFit="contain"
          loading="lazy"
          placeholder="blur"
          blurDataURL={image}
        />
      </div>

      <div className="content">
        <h1>{title}</h1>
        <Link href={link}>
          <a
            target="_blank"
            draggable={false}
            onClick={() =>
              viewProjects({
                link,
                name: title
              })
            }
          >
            View project
          </a>
        </Link>
      </div>
    </S.ProjectCard>
  );
};
