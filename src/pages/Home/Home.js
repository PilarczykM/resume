import React from "react";
import * as Styled from "./Home.styled";

import MainTemplate from "../../template/MainTemplate";
import SectionTemplate from "../../template/SectionTemple";

import Title from "../../components/molecules/Title/Title";
import SectionTitle from "../../components/molecules/SectionTitle/SectionTitle";
import Paragraph from "../../components/atoms/Paragraph/Paragraph";
import ListItem from "../../components/molecules/ListItem/ListItem";
import Item from "../../components/atoms/Item/Item";
import InstagramGallery from "../../components/organisms/InstagramGallery/InstagramGallery";

const Home = () => (
  <MainTemplate>
    <SectionTemplate>
      <Title title="Marcin Pilarczyk" subtitle="Web Developer" />
    </SectionTemplate>
    <SectionTemplate>
      <SectionTitle mb="30px">About me</SectionTitle>
      <Paragraph italic>
        “ Jestem samoukiem, zacząłem swoją karierę w informatyce od pracy na
        stanowisku inżynier testów w projekcie dla znanej firmy produkującej
        procesory. W wolnym czasie rozwijam się jako web developer. Pasjonuje
        mnie tworzenie stron internetowych w technologii React. “
      </Paragraph>
    </SectionTemplate>
    <SectionTemplate>
      <SectionTitle mb="60px">Personal info</SectionTitle>
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
    <SectionTemplate>
      <SectionTitle mb="60px">Contact info</SectionTitle>
      <Styled.ListContainer>
        <ListItem textAlign="right">
          <Item rows="2">Adress</Item>
          <Item>E-Mail</Item>
          <Item>Phone</Item>
          <Item>Website</Item>
        </ListItem>
        <ListItem textAlign="left" data="true">
          <Item>
            <span>Warszawska 22</span>
            <span>84-230, Rumia</span>
          </Item>
          <Item>marcinpilarczyk@me.com</Item>
          <Item>+48 530-740-711</Item>
          <Item>www.marcinpilarczyk@me.com</Item>
        </ListItem>
      </Styled.ListContainer>
    </SectionTemplate>
    <SectionTemplate>
      <SectionTitle mb="60px">Instagram</SectionTitle>
      <InstagramGallery />
    </SectionTemplate>
    <SectionTemplate>- 1/5 -</SectionTemplate>
  </MainTemplate>
);

export default Home;
