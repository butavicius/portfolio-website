// react
import * as React from "react";
// @mui
import { Box, Typography } from "@mui/material";
// dayjs
import dayjs from "dayjs";
// type
import { Project } from "constants/projectsData";

interface Props {
  project: Project;
}

const ProjectDetails = ({
  project,
}: Props) => {
  const { title } = project;

  return (
    <Box>
      <Typography component="h1" variant="h4" sx={{ marginBottom: "1rem" }}>
        {title}
      </Typography>
      <Typography>
        Stack: example example
      </Typography>
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
