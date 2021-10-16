import { MediaContextProvider } from "@lib";
import { FC } from "react";
import DesktopContainer from "@components/Layout/DesktopContainer";
import MobileContainer from "@components/Layout/MobileContainer";

export const ResponsiveContainer = ({ children }: any) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);
