import { useContext } from "react";
import {
  AnalyticsContext,
  AnalyticsData
} from "src/contexts/AnalyticsProvider";

export const useAnalytics = (): AnalyticsData => {
  const context = useContext(AnalyticsContext);

  return { ...context };
};
