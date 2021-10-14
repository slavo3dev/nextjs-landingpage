import type { NextPage } from "next";
import { HeadComponent, HomepageLayout } from "@components";
import "semantic-ui-css/semantic.min.css";

const Home: NextPage = () => {
    return (
        <>
            <HeadComponent title={ "Landing Home Page" } metaDescription={ "eMed is Democratizing Health Care - Find Out why Covid-19 Testing is Important" } />
            <HomepageLayout />
        </>
	
    );
};

export default Home;
