export type HomeApiResponse = {
  home: {
    title: string;
    rotateText: {
      text: string;
    }[];
    description: {
      text: string;
    };
    skills: {
      name: string;
      backgroundProgress: { hex: string };
      percent: number;
      image: {
        url: string;
      };
    }[];
    projectDescription: string;
    projectTitle: string;
    projects: {
      name: string;
      link: string;
      image: {
        url: string;
      };
    }[];
  };
};
