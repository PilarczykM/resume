import React from "react";
import Title from "./Title";

export default { title: "Title" };

export const defaultTitle = () => <Title title="Title" subtitle="Subtitle" />;
export const italicSubtitle = () => (
  <Title title="Title" subtitle="Subtitle" italic />
);
