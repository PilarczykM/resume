import React from "react";
import * as Styled from "./Contact.styled";

import MainTemplate from "../../template/MainTemplate";
import SectionTemplate from "../../template/SectionTemple";

import SectionTitle from "../../components/molecules/SectionTitle/SectionTitle";
import Title from "../../components/molecules/Title/Title";
import Card from "../../components/atoms/Card/Card";
import Item from "../../components/atoms/Item/Item";

const Contact = () => (
  <MainTemplate>
    <SectionTemplate>
      <Title title="Contact" subtitle="Say hi" />
    </SectionTemplate>
    <SectionTemplate>
      <SectionTitle mb="60px">Personal info</SectionTitle>
      <Styled.CardGrid>
        <Card>
          <i className="fas fa-map-marker-alt fa-2x"></i>
          <Styled.Title>Drop on in</Styled.Title>
          <div>
            <Item data="true" fw="300" font="12px">
              Warszawska 22
            </Item>
            <Item data="true" fw="300" font="12px">
              84-230, Rumia
            </Item>
            <Item data="true" fw="300" font="12px">
              Poland
            </Item>
          </div>
        </Card>
        <Card>
          <i className="fas fa-mobile-alt fa-2x"></i>
          <Styled.Title>Give me a call</Styled.Title>
          <div>
            <Item data="true" fw="300" font="12px">
              +48 530-740-711
            </Item>
          </div>
        </Card>
        <Card>
          <i className="far fa-address-book fa-2x"></i>
          <Styled.Title>Let's connect</Styled.Title>
          <div>
            <Item data="true" fw="300" font="12px">
              Linkedin:
              <Styled.LinkTo href="https://www.linkedin.com/in/marcin-pilarczyk/">
                @marcin-pilarczyk
              </Styled.LinkTo>
            </Item>
            <Item data="true" fw="300" font="12px">
              Email:{" "}
              <Styled.LinkTo href="mailto: marcinpilarczyk@me.com">
                marcinpilarczyk@me.com
              </Styled.LinkTo>
            </Item>
            <Item data="true" fw="300" font="12px">
              Github:
              <Styled.LinkTo href="https://www.linkedin.com/in/marcin-pilarczyk/">
                @marcin-pilarczyk
              </Styled.LinkTo>
            </Item>
          </div>
        </Card>
      </Styled.CardGrid>
    </SectionTemplate>
    <SectionTemplate>- 4/4 -</SectionTemplate>
  </MainTemplate>
);

export default Contact;
