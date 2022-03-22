// react
import * as React from "react";
// @mui
import { Box, Container, Typography } from "@mui/material";
//custom
import ButtonLink from "components/common/ButtonLink";
// type
import { Project } from "constants/projectsData";
import DevIcon from "components/icon/DevIcon";

interface Props {
  project: Project;
}

const ProjectDetails = ({ project }: Props) => {
  const { title, technologies, link } = project;

  return (
    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <Box sx={{ display: "flex", mt: 3 }}>
        <Typography component="h1" variant="h4" sx={{ marginBottom: "1rem" }}>
          {title}
        </Typography>
      </Box>

      {technologies && (
        <Box sx={{ display: "flex", gap: 1 }}>
          {technologies.map((technology, index) => (
            <DevIcon tool={technology} key={index} />
          ))}
        </Box>
      )}
      {link && (
        <Box sx={{ mt: 3, mb: 3 }}>
          <ButtonLink color="info" variant="outlined" href={link} target="_blank">
            Visit Live
          </ButtonLink>
        </Box>
      )}
      {/* <Typography component="p" variant="body1" sx={{ marginBottom: "0.5rem" }}>
        Read Time: {readTime} min
      </Typography> */}
      {/* <Typography component="p" variant="body1" sx={{ marginBottom: '0.5rem' }}>
        Published at {shortDate}
      </Typography> */}
      {/* <Box alignItems="center" display="flex">
        {category.map((category, index) => (
          <CustomChip key={category + index} label={category} />
        ))}
      </Box> */}
    </Box>
  );
};

export default ProjectDetails;
