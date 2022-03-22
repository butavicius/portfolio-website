import React from "react";

type Props = {
  name: string;
};

export default function SkillIcon({ name }: Props) {
  return <i className={`devicon-${name}`} style={{ fontSize: "2rem" }} />;
}
