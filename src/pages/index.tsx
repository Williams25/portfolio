import type { GetStaticProps } from "next";
import { Banner, Contact, Skills, Projects } from "src/components";
import { BannerProps } from "src/components/Banner";
import { ProjectsProps } from "src/components/Projects";
import { SkillsProps } from "src/components/Skills";
import { client } from "src/graphql/apollo";
import { getHome } from "src/graphql/queries/getHome";
import { HomeApiResponse } from "src/types/HomeApiResponse";

type HomeProps = {
  banner: BannerProps;
  projects: ProjectsProps;
} & SkillsProps;

const Home = ({ skills, banner, projects }: HomeProps) => {
  return (
    <main role="main">
      <Banner {...banner} />

      <Skills skills={skills} />

      <Projects {...projects} />

      <Contact />
    </main>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  try {
    const {
      data: { home }
    } = await client.query<HomeApiResponse>({
      query: getHome,
      variables: { id: process.env.NEXT_PUBLIC_HOME_ID }
    });

    return {
      props: {
        skills: home.skills,
        banner: {
          rotateText: home.rotateText,
          title: home.title,
          description: {
            text: home.description.text
          }
        },
        projects: {
          projects: home.projects,
          projectDescription: home.projectDescription,
          title: home.projectTitle
        }
      },
      revalidate: 60 * 60 * 1 // Cache response for 1 hour
    };
  } catch {
    return {
      notFound: true
    };
  }
};

export default Home;
