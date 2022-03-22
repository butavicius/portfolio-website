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
import SkillIcon from "../icon/SkillIcon";
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
      Icon: <SkillIcon name="html5-plain-wordmark" />,
      title: "HTML",
      progressValue: 88,
    },
    {
      Icon: <SkillIcon name="javascript-plain" />,
      title: "JavaScript",
      progressValue: 92,
    },
    {
      Icon: <SkillIcon name="typescript-plain" />,
      title: "TypeScript",
      progressValue: 81,
    },
    {
      Icon: <SkillIcon name="css3-plain-wordmark" />,
      title: "CSS",
      progressValue: 78,
    },
    {
      Icon: <SkillIcon name="sass-original" />,
      title: "Sass",
      progressValue: 68,
    },
    {
      Icon: <SkillIcon name="react-original" />,
      title: "React",
      progressValue: 86,
    },
    {
      Icon: <SkillIcon name="react-original" />,
      title: "React Native",
      progressValue: 72,
    },
    {
      Icon: <SkillIcon name="redux-original" />,
      title: "Redux",
      progressValue: 81,
    },
    {
      Icon: <SkillIcon name="nextjs-original" />,
      title: "Next.js",
      progressValue: 70,
    },
    {
      Icon: <SkillIcon name="materialui-plain" />,
      title: "MUI",
      progressValue: 62,
    },
    {
      Icon: <SkillIcon name="tailwindcss-plain" />,
      title: "Tailwind CSS",
      progressValue: 85,
    },
  ];

  const backendSkills = [
    {
      Icon: <SkillIcon name="nodejs-plain" />,
      title: "Node.js",
      progressValue: 72,
    },
    {
      Icon: <SkillIcon name="java-plain" />,
      title: "Java",
      progressValue: 48,
    },
    {
      Icon: <SkillIcon name="spring-plain" />,
      title: "Spring",
      progressValue: 40,
    },
    {
      Icon: <SkillIcon name="php-plain" />,
      title: "PHP",
      progressValue: 62,
    },
    {
      Icon: <SkillIcon name="wordpress-plain" />,
      title: "Wordpress",
      progressValue: 66,
    },
    {
      Icon: <SkillIcon name="laravel-plain" />,
      title: "Laravel",
      progressValue: 21,
    },
    {
      Icon: <SkillIcon name="mongodb-plain" />,
      title: "MongoDB",
      progressValue: 58,
    },
    {
      Icon: <SkillIcon name="mysql-plain" />,
      title: "MySQL",
      progressValue: 48,
    },
    {
      Icon: <SkillIcon name="firebase-plain" />,
      title: "Firebase",
      progressValue: 38,
    },
  ];

  const devopsSkills = [
    {
      Icon: <SkillIcon name="linux-plain" />,
      title: "Linux",
      progressValue: 56,
    },
    {
      Icon: <SkillIcon name="npm-original-wordmark" />,
      title: "NPM",
      progressValue: 88,
    },
    {
      Icon: <SkillIcon name="yarn-plain" />,
      title: "Yarn",
      progressValue: 69,
    },
    {
      Icon: <SkillIcon name="git-plain" />,
      title: "git",
      progressValue: 84,
    },
    {
      Icon: <SkillIcon name="bitbucket-original" />,
      title: "Bitbucket",
      progressValue: 70,
    },
    {
      Icon: <SkillIcon name="github-original" />,
      title: "Github",
      progressValue: 70,
    },
    {
      Icon: <SkillIcon name="jira-plain" />,
      title: "Jira",
      progressValue: 68,
    },
    {
      Icon: <SkillIcon name="docker-plain" />,
      title: "Docker",
      progressValue: 65,
    },
    {
      Icon: <SkillIcon name="jenkins-plain" />,
      title: "Jenkins",
      progressValue: 45,
    },
    {
      Icon: <SkillIcon name="kubernetes-plain" />,
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
