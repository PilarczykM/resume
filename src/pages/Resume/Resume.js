import React from "react";
import * as Styled from "./Resume.styled";

import MainTemplate from "../../template/MainTemplate";
import SectionTemplate from "../../template/SectionTemple";

import Title from "../../components/molecules/Title/Title";
import SectionTitle from "../../components/molecules/SectionTitle/SectionTitle";
import ListItem from "../../components/molecules/ListItem/ListItem";
import Item from "../../components/atoms/Item/Item";

const Home = () => (
  <MainTemplate>
    <SectionTemplate>
      <Title title="Resume" subtitle="Curriculum Vita" />
    </SectionTemplate>
    <SectionTemplate>
      <SectionTitle mb="60px">Skills</SectionTitle>
      <Styled.ListContainer>
        <ListItem textAlign="right">
          <Item>Name</Item>
          <Item>Birthday</Item>
          <Item>Place of Birth</Item>
          <Item>Nationality</Item>
        </ListItem>
        <ListItem textAlign="left" data="true">
          <Item>Marcin Pilarczyk</Item>
          <Item>1993.01.22</Item>
          <Item>Gdynia</Item>
          <Item>Poland</Item>
        </ListItem>
      </Styled.ListContainer>
    </SectionTemplate>
    <SectionTemplate>- 2/4 -</SectionTemplate>
  </MainTemplate>
);

export default Home;
