// react
import * as React from "react";
// custom component
import About from "components/section/About";
import HireMe from "components/section/HireMe";
import HomeHero from "components/section/HomeHero";
import MainLayout from "components/layout/MainLayout";
import RecentProjects from "components/section/RecentProjects";
import Skills from "components/section/Skills";
// custom context
import ConstantsContext from "context/constantsContext";
// type
import type { NextPage } from "next";
import ScrollAnchor from "components/common/ScrollAnchor";

const Home: NextPage = () => {
  const { pages } = React.useContext(ConstantsContext);

  return (
    <>
      <MainLayout pageData={pages!.home}>
        <HomeHero />
        <div>
          <ScrollAnchor id="about" />
          <About />
        </div>
        <div>
          <ScrollAnchor id="skills" />
          <Skills />
        </div>
        <HireMe />
        <RecentProjects />
      </MainLayout>
    </>
  );
};

export default Home;
