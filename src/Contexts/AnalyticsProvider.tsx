import { createContext, ReactNode, useEffect, useCallback } from "react";
import ReactGA from "react-ga4";

export type AnalyticsData = {
  joinGroup: ({ description, email, name }: joinGroupParams) => void;
  viewGithub: () => void;
  viewLinkedin: () => void;
  viewProjects: ({ name, link }: viewProjectsParams) => void;
};

type AnalyticsProviderProps = {
  children: ReactNode;
};

export type joinGroupParams = {
  name: string;
  email: string;
  description: string;
};

export type viewProjectsParams = {
  name: string;
  link: string;
};

export const AnalyticsContext = createContext({} as AnalyticsData);

export const AnalyticsProvider = ({ children }: AnalyticsProviderProps) => {
  const initializeAnalytics = useCallback(() => {
    ReactGA.initialize("G-J8PYKQBWQF");
  }, [ReactGA]);

  const pageView = useCallback(() => {
    ReactGA.event("page_view", {
      page_title: "Portfolio - Williams25",
      affiliation: "Williams25"
    });
  }, [ReactGA]);

  const viewGithub = useCallback(() => {
    ReactGA.event("view_github", {
      page_title: "Portfolio - Williams25",
      affiliation: "Williams25"
    });
  }, [ReactGA]);

  const viewLinkedin = useCallback(() => {
    ReactGA.event("view_linkedin", {
      page_title: "Portfolio - Williams25",
      affiliation: "Williams25"
    });
  }, [ReactGA]);

  const joinGroup = useCallback(
    ({ description, email, name }: joinGroupParams) => {
      ReactGA.event("join_group", {
        content_type: "Contact",
        affiliation: "Williams25",
        name,
        email,
        description
      });
    },
    [ReactGA]
  );

  const viewProjects = useCallback(
    ({ name, link }: viewProjectsParams) => {
      ReactGA.event("view_projects", {
        content_type: "Contact",
        affiliation: "Williams25",
        name,
        link
      });
    },
    [ReactGA]
  );

  /** Configurando react-ga4 */
  useEffect(() => {
    initializeAnalytics();
    pageView();
  }, []);

  return (
    <AnalyticsContext.Provider
      value={{ joinGroup, viewGithub, viewLinkedin, viewProjects }}
    >
      {children}
    </AnalyticsContext.Provider>
  );
};
