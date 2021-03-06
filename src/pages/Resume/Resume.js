import React from "react";
import * as Styled from "./Resume.styled";

import MainTemplate from "../../template/MainTemplate";
import SectionTemplate from "../../template/SectionTemple";

import Title from "../../components/molecules/Title/Title";
import SectionTitle from "../../components/molecules/SectionTitle/SectionTitle";
import ListItem from "../../components/molecules/ListItem/ListItem";
import Item from "../../components/atoms/Item/Item";
import SkillItem from "../../components/molecules/SkillItem/SkillItem";
import Timeline from "../../components/atoms/Timeline/Timeline";
import TimelineInner from "../../components/atoms/Timeline/TimelineInner";
import TimelineItem from "../../components/atoms/Timeline/TimelineItem";

const Home = () => (
  <MainTemplate>
    <SectionTemplate>
      <Title title="Resume" subtitle="Curriculum Vita" />
    </SectionTemplate>
    <SectionTemplate>
      <SectionTitle mb="60px">Expirience</SectionTitle>
      <Timeline>
        <TimelineInner>
          <TimelineItem textAlign="right">
            <Item color="#999" italic="true">
              Jenuary 2017 - <em>Current</em>
            </Item>
            <Item color="black" wg="300" font="12px">
              Test engirnier & analisys
            </Item>
          </TimelineItem>
          <TimelineItem textAlign="left">
            <Item>Planning and executing automatic tests</Item>
            <Item>Creating tests scenatio</Item>
            <Item>Implementing tests using C#</Item>
            <Item>Code review</Item>
            <Item>Raporting work results in JIRA</Item>
            <Item>Task estimation</Item>
            <Item>GIT</Item>
          </TimelineItem>
        </TimelineInner>
      </Timeline>
    </SectionTemplate>
    <SectionTemplate>
      <SectionTitle mb="60px">Education</SectionTitle>
      <Timeline>
        <TimelineInner>
          <TimelineItem textAlign="right">
            <Item color="#999" italic="true">
              Jenuary 2017 - <em>Current</em>
            </Item>
            <Item color="black" wg="300" font="12px">
              WSB - Poznań
            </Item>
          </TimelineItem>
          <TimelineItem textAlign="left">
            <Item>Planning and executing automatic tests</Item>
            <Item>Creating tests scenatio</Item>
            <Item>Implementing tests using C#</Item>
            <Item>Code review</Item>
            <Item>Raporting work results in JIRA</Item>
            <Item>Task estimation</Item>
            <Item>GIT</Item>
          </TimelineItem>
        </TimelineInner>
        <TimelineInner>
          <TimelineItem textAlign="right">
            <Item color="#999" italic="true">
              Jenuary 2017 - <em>Current</em>
            </Item>
            <Item color="black" wg="300" font="12px">
              WSB - Poznań
            </Item>
          </TimelineItem>
          <TimelineItem textAlign="left">
            <Item>Planning and executing automatic tests</Item>
            <Item>Creating tests scenatio</Item>
            <Item>Implementing tests using C#</Item>
            <Item>Code review</Item>
            <Item>Raporting work results in JIRA</Item>
            <Item>Task estimation</Item>
            <Item>GIT</Item>
          </TimelineItem>
        </TimelineInner>
      </Timeline>
    </SectionTemplate>
    <SectionTemplate>
      <SectionTitle mb="60px">Skills</SectionTitle>
      <Styled.ListContainer>
        <ListItem textAlign="right">
          <Item>WEB</Item>
          <SkillItem stars="7">HTML</SkillItem>
          <SkillItem stars="8">CSS</SkillItem>
          <SkillItem stars="6">JS</SkillItem>
          <SkillItem stars="7">React</SkillItem>
          <SkillItem stars="5">Redux</SkillItem>
          <SkillItem stars="8">Styled components</SkillItem>
          <SkillItem stars="5">Firebase</SkillItem>
        </ListItem>
        <ListItem textAlign="left">
          <Item>Assets</Item>
          <Item rows="2" font="14px" color="#999999" italic="true" fw="300">
            Responsible, Diligence, Labour, Rigor, Creative, Funny, Great
            Communicator, Flexiblee
          </Item>
          <Item>Language</Item>
          <Item rows="2" font="14px" color="#999999" italic="true" fw="300">
            English - Good
          </Item>
          <Item>Hobbies & Intrests</Item>
          <Styled.HobbiesContainer>
            <Styled.HobbyIconContainer>
              <Styled.HobbyIcon className="fas fa-headphones"></Styled.HobbyIcon>
              <Styled.HobbyText>Music</Styled.HobbyText>
            </Styled.HobbyIconContainer>
            <Styled.HobbyIconContainer>
              <Styled.HobbyIcon className="fas fa-gamepad"></Styled.HobbyIcon>
              <Styled.HobbyText>Games</Styled.HobbyText>
            </Styled.HobbyIconContainer>
            <Styled.HobbyIconContainer>
              <Styled.HobbyIcon className="fas fa-route"></Styled.HobbyIcon>
              <Styled.HobbyText>Travel</Styled.HobbyText>
            </Styled.HobbyIconContainer>
            <Styled.HobbyIconContainer>
              <Styled.HobbyIcon className="fas fa-cookie-bite"></Styled.HobbyIcon>
              <Styled.HobbyText>Cooking</Styled.HobbyText>
            </Styled.HobbyIconContainer>
          </Styled.HobbiesContainer>
        </ListItem>
      </Styled.ListContainer>
    </SectionTemplate>
    <SectionTemplate>- 2/4 -</SectionTemplate>
  </MainTemplate>
);

export default Home;
