import React from "react";
import { Footer } from "@components";
import {
  InfoSegment,
  AboutSegment,
  StudiesSegment,
} from "@components/BodySegment";

export const HomepageComponent = () => (
  <>
    <InfoSegment />
    <AboutSegment />
    <StudiesSegment />
    <Footer />
  </>
);
