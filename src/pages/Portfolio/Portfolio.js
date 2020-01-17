import React from "react";
import * as Styled from "./Portfolio.styled";
import MainTemplate from "../../template/MainTemplate";
import SectionTemplate from "../../template/SectionTemple";
import Title from "../../components/molecules/Title/Title";

const Portfolio = () => {
  return (
    <MainTemplate>
      <SectionTemplate>
        <Title title="Portfolio" subtitle="My work" />
      </SectionTemplate>
      <SectionTemplate></SectionTemplate>
      <SectionTemplate>- 3/4 -</SectionTemplate>
    </MainTemplate>
  );
};

export default Portfolio;
