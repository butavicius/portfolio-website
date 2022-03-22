// react
import * as React from "react";
// reading-time
import readingTime from "reading-time";
// @mui
import { Box, BoxProps, Container, Grid, styled } from "@mui/material";
// custom component
import Gallery from "components/common/Gallery";
import MainLayout from "components/layout/MainLayout";
import Markdown from "components/common/Markdown";
// projects data
import projectsData, { Project } from "constants/projectsData";
import ProjectDetails from "components/section/ProjectDetails";
// custom lib
import { getAllProjectsId, getProjectData } from "lib/projects";
// type
import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import ProjectNotFound from "components/section/ProjectNotFound";
import ComponentsContext from "context/componentsContext";

interface ProjectPageProps {
  project?: string;
  content?: string;
}

const ProjectContainer = styled(Box)<BoxProps>(({ theme }) => ({
  margin: "5rem 1rem 1rem",
  [theme.breakpoints.up("sm")]: {
    margin: "5rem 2rem 1rem",
  },
}));

const ProjectPage: NextPage<ProjectPageProps> = (props) => {
  const { project, content = "" } = props;
  const contentStats = readingTime(content);
  const { containerMaxWidth = "lg" } = React.useContext(ComponentsContext);

  const NotFound = (
    <MainLayout pageData={{ title: "Project Not Found" }}>
      <ProjectNotFound />
    </MainLayout>
  );

  if (!project) return NotFound;

  const parsedProject: Project = JSON.parse(project);

  return (
    <Container sx={{p: 0}}>
      <MainLayout pageData={{ title: "Simas - " + parsedProject.title }}>
        <ProjectContainer maxWidth={containerMaxWidth as string}>
          <ProjectDetails project={parsedProject} />
          <Gallery images={parsedProject.images} />
          <Markdown content={content} />
        </ProjectContainer>
      </MainLayout>
    </Container>
  );
};

export default ProjectPage;

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { params } = context;
  const project = projectsData.find((project) => project.id === params!.id);

  if (!project) return { props: {} };

  const filename = project.postFileName;
  const { content } = await getProjectData(filename);

  if (!content)
    return {
      props: {
        project: JSON.stringify(project),
      },
    };

  return {
    props: {
      project: JSON.stringify(project),
      content,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllProjectsId();

  return {
    paths,
    fallback: "blocking",
  };
};
