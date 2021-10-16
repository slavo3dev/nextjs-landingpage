import type { NextPage } from "next";
import { HeadComponent, HomepageComponent } from "@components";
import { ResponsiveContainer } from "@components/Layout";
import "semantic-ui-css/semantic.min.css";

const Home: NextPage = () => {
  return (
    <>
      <HeadComponent
        title={"Landing Home Page"}
        metaDescription={
          "eMed is Democratizing Health Care - Find Out why Covid-19 Testing is Important"
        }
      />
      <ResponsiveContainer>
        <HomepageComponent />
      </ResponsiveContainer>
    </>
  );
};

export default Home;
