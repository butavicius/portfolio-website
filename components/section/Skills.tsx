// react
import * as React from "react";
// @mui
import {
  Container,
  ContainerProps,
  Grid,
  GridProps,
  Typography,
  styled,
} from "@mui/material";
// custom component
import ContainerGrid from "components/common/ContainerGrid";
import SkillProgress from "components/common/SkillProgress";
import DevIcon from "../icon/DevIcon";
// context
import ComponentsContext from "context/componentsContext";
// type
interface SkillsProps {}

const CustomContainer = styled(Container)<ContainerProps>(({ theme }) => ({
  marginBottom: "5rem",
  marginTop: "5rem",
  scrollMarginTop: "2rem",
}));

const CustomGridItem = styled(Grid)<GridProps>(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  marginBottom: "2rem",
}));

const Skills: React.FunctionComponent<SkillsProps> = (props) => {
  const { containerMaxWidth } = React.useContext(ComponentsContext);

  const frontendSkills = [
    {
      Icon: <DevIcon tool="html" />,
      title: "HTML",
      progressValue: 88,
    },
    {
      Icon: <DevIcon tool="javascript" />,
      title: "JavaScript",
      progressValue: 92,
    },
    {
      Icon: <DevIcon tool="typescript" />,
      title: "TypeScript",
      progressValue: 81,
    },
    {
      Icon: <DevIcon tool="css" />,
      title: "CSS",
      progressValue: 78,
    },
    {
      Icon: <DevIcon tool="sass" />,
      title: "Sass",
      progressValue: 68,
    },
    {
      Icon: <DevIcon tool="react" />,
      title: "React",
      progressValue: 86,
    },
    {
      Icon: <DevIcon tool="reactNative" />,
      title: "React Native",
      progressValue: 72,
    },
    {
      Icon: <DevIcon tool="redux" />,
      title: "Redux",
      progressValue: 81,
    },
    {
      Icon: <DevIcon tool="nextjs" />,
      title: "Next.js",
      progressValue: 70,
    },
    {
      Icon: <DevIcon tool="mui" />,
      title: "MUI",
      progressValue: 62,
    },
    {
      Icon: <DevIcon tool="tailwindcss" />,
      title: "Tailwind CSS",
      progressValue: 85,
    },
  ];

  const backendSkills = [
    {
      Icon: <DevIcon tool="nodejs" />,
      title: "Node.js",
      progressValue: 72,
    },
    {
      Icon: <DevIcon tool="java" />,
      title: "Java",
      progressValue: 48,
    },
    {
      Icon: <DevIcon tool="spring" />,
      title: "Spring",
      progressValue: 40,
    },
    {
      Icon: <DevIcon tool="php" />,
      title: "PHP",
      progressValue: 62,
    },
    {
      Icon: <DevIcon tool="wordpress" />,
      title: "Wordpress",
      progressValue: 66,
    },
    {
      Icon: <DevIcon tool="laravel" />,
      title: "Laravel",
      progressValue: 21,
    },
    {
      Icon: <DevIcon tool="mongodb" />,
      title: "MongoDB",
      progressValue: 58,
    },
    {
      Icon: <DevIcon tool="mysql" />,
      title: "MySQL",
      progressValue: 48,
    },
    {
      Icon: <DevIcon tool="firebase" />,
      title: "Firebase",
      progressValue: 38,
    },
  ];

  const devopsSkills = [
    {
      Icon: <DevIcon tool="linux" />,
      title: "Linux",
      progressValue: 56,
    },
    {
      Icon: <DevIcon tool="npm" />,
      title: "NPM",
      progressValue: 88,
    },
    {
      Icon: <DevIcon tool="yarn" />,
      title: "Yarn",
      progressValue: 69,
    },
    {
      Icon: <DevIcon tool="git" />,
      title: "git",
      progressValue: 84,
    },
    {
      Icon: <DevIcon tool="bitbucket" />,
      title: "Bitbucket",
      progressValue: 70,
    },
    {
      Icon: <DevIcon tool="github" />,
      title: "Github",
      progressValue: 70,
    },
    {
      Icon: <DevIcon tool="jira" />,
      title: "Jira",
      progressValue: 85,
    },
    {
      Icon: <DevIcon tool="docker" />,
      title: "Docker",
      progressValue: 68,
    },
    {
      Icon: <DevIcon tool="jenkins" />,
      title: "Jenkins",
      progressValue: 45,
    },
    {
      Icon: <DevIcon tool="kubernetes" />,
      title: "Kubernetes",
      progressValue: 2,
    },
  ];

  const allSkills = [
    { title: "Front-end skills", scores: frontendSkills },
    { title: "Back-end skills", scores: backendSkills },
    { title: "DevOps skills etc.", scores: devopsSkills },
  ];

  return (
    <CustomContainer maxWidth={containerMaxWidth}>
      {allSkills.map((entry, index) => (
        <>
          <Typography component="h2" variant="h4" textAlign="center">
            {entry.title}
          </Typography>
          <ContainerGrid marginTop="2rem">
            {entry.scores.map((skill, index) => (
              <CustomGridItem
                item
                key={`${skill.title} - ${skill.progressValue} - ${index}`}
                xs={6}
                sm={4}
                md={2}
              >
                <SkillProgress
                  size={60}
                  value={skill.progressValue}
                  Icon={skill.Icon}
                  subtitle={`${skill.title} | ${skill.progressValue}%`}
                />
              </CustomGridItem>
            ))}
          </ContainerGrid>
        </>
      ))}
    </CustomContainer>
  );
};

export default Skills;
