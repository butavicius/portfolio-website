import React from "react";

type Props = {
  id: string;
};
export default function ScrollAnchor({ id }: Props) {
  return (
    <a
      id={id}
      style={{
        display: "block",
        position: "relative",
        visibility: "hidden",
        top: -64,
      }}
    />
  );
}
