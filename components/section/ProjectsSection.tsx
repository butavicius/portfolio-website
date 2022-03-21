// react
import * as React from "react";
// next
import { useRouter } from "next/router";
// @mui
import { Grid, Grow } from "@mui/material";
// custom component
import ContainerGrid from "components/common/ContainerGrid";
// custom context
import ConstantsContext from "context/constantsContext";
import ProjectCard from "components/common/ProjectCard";

// type
interface ProjectsSectionProps {}

const ProjectsSection: React.FunctionComponent<ProjectsSectionProps> = (
  props
) => {
  const { projects } = React.useContext(ConstantsContext);
  const router = useRouter();

  return (
    <>
      <ContainerGrid
        justifyContent={
          projects?.length === 1 ? "center" : "flex-start"
        }
        sx={{
          padding: {
            xs: "0 1rem",
            sm: "0 2rem",
          },
        }}
      >
        {projects
          ? projects.map((project, index) => (
              <Grow
                in={true}
                key={project.title + index}
                timeout={(index + 1) * 500}
              >
                <Grid item xs={12} sm={6} md={4} xl={4}>
                  <ProjectCard
                    imageAlt={project.images[0].alt}
                    imageSrc={project.images[0].src}
                    title={project.title}
                    onButtonClick={() => router.push(`/projects/${project.id}`)}
                    sx={{
                      maxWidth: "21rem",
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginBottom: "1rem",
                    }}
                  />
                </Grid>
              </Grow>
            ))
          : "no project"}
      </ContainerGrid>
    </>
  );
};

export default ProjectsSection;
