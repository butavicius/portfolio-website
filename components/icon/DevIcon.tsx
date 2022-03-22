import React from "react";

type Props = {
  tool: string;
};

// export default function SkillIcon({ name }: Props) {
//   return <i className={`devicon-${name}`} style={{ fontSize: "2rem" }} />;
// }

const deviconLabel: { [index: string]: string } = {
  html: "html5-plain-wordmark",
  javascript: "javascript-plain",
  typescript: "typescript-plain",
  css: "css3-plain-wordmark",
  sass: "sass-original",
  react: "react-original",
  reactNative: "react-original",
  redux: "redux-original",
  nextjs: "nextjs-original",
  mui: "materialui-plain",
  tailwindcss: "tailwindcss-plain",
  nodejs: "nodejs-plain",
  java: "java-plain",
  spring: "spring-plain",
  php: "php-plain",
  wordpress: "wordpress-plain",
  laravel: "laravel-plain",
  mongodb: "mongodb-plain",
  mysql: "mysql-plain",
  firebase: "firebase-plain",
  linux: "linux-plain",
  npm: "npm-original-wordmark",
  yarn: "yarn-plain",
  git: "git-plain",
  bitbucket: "bitbucket-original",
  github: "github-original",
  jira: "jira-plain",
  docker: "docker-plain",
  jenkins: "jenkins-plain",
  kubernetes: "kubernetes-plain",
};

export default function DevIcon({ tool }: Props) {
  return (
    <i
      className={`devicon-${deviconLabel[tool]}`}
      style={{ fontSize: "2rem" }}
    />
  );
}
