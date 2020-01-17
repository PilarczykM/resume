import React from "react";

import * as Styled from "./NavSidebar.styled";

import Button from "../../atoms/Button/Button";
import Subtitle from "../../atoms/Subtitle/Subtitle";

import ProfileImage from "../../../assets/images/profile.jpg";

const NavSideBar = () => {
  return (
    <Styled.Container>
      <Styled.ImageContainer>
        <Styled.Image src={ProfileImage} />
      </Styled.ImageContainer>
      <Styled.SignContainer>
        <Styled.StyledHeading weight="700">
          Marcin Pilarczyk
        </Styled.StyledHeading>
      </Styled.SignContainer>
      <Styled.StyledLink exact activeClassName="activeLink" to="/">
        <Button>
          <Styled.Icon className="fas fa-user-alt fa-2x"></Styled.Icon>
          <Styled.StyledHeading weight="700">About me</Styled.StyledHeading>
          <Subtitle>who am i</Subtitle>
        </Button>
      </Styled.StyledLink>
      <Styled.StyledLink activeClassName="activeLink" to="/resume">
        <Button>
          <Styled.Icon className="fas fa-briefcase fa-2x"></Styled.Icon>
          <Styled.StyledHeading weight="700">Resume</Styled.StyledHeading>
          <Subtitle>curriculum vita</Subtitle>
        </Button>
      </Styled.StyledLink>
      <Styled.StyledLink activeClassName="activeLink" to="/portfolio">
        <Button>
          <Styled.Icon className="fas fa-camera fa-2x"></Styled.Icon>
          <Styled.StyledHeading weight="700">Portfolio</Styled.StyledHeading>
          <Subtitle>my works</Subtitle>
        </Button>
      </Styled.StyledLink>
      <Styled.StyledLink activeClassName="activeLink" to="/contact">
        <Button>
          <Styled.Icon className="fas fa-id-card fa-2x"></Styled.Icon>
          <Styled.StyledHeading weight="700">Contact</Styled.StyledHeading>
          <Subtitle>say hello</Subtitle>
        </Button>
      </Styled.StyledLink>
    </Styled.Container>
  );
};

export default NavSideBar;
