import { useContext } from "react";
import {
  AnalyticsContext,
  AnalyticsData
} from "src/_contexts/AnalyticsProvider";

export const useAnalytics = (): AnalyticsData => {
  const context = useContext(AnalyticsContext);

  return { ...context };
};
