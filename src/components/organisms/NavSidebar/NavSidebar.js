import React from "react";
import styled from "styled-components";
import Button from "../../atoms/Button/Button";
import Heading from "../../atoms/Heading/Heading";
import Subtitle from "../../atoms/Subtitle/Subtitle";

import ProfileImage from "../../../assets/images/profile.jpg";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledIcon = styled.i`
  margin-bottom: 10px;
`;

const StyledImageContainer = styled.div`
  width: 150px;
  height: 150px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledSignContainer = styled.div`
  width: 100%;
  padding: 5px 0;
  background-color: #3f3f3f;
  text-align: center;
  color: #e8e8e8;
`;

const StyledHeading = styled(Heading)`
  font-size: 12px;
  line-height: 2;
`;

const NavSideBar = () => {
  return (
    <StyledContainer>
      <StyledImageContainer>
        <StyledImage src={ProfileImage} />
      </StyledImageContainer>
      <StyledSignContainer>
        <StyledHeading weight="700">Marcin Pilarczyk</StyledHeading>
      </StyledSignContainer>
      <Button active>
        <StyledIcon className="fas fa-user-alt fa-2x"></StyledIcon>
        <Heading weight="700">About me</Heading>
        <Subtitle>who am i</Subtitle>
      </Button>
      <Button>
        <StyledIcon className="fas fa-briefcase fa-2x"></StyledIcon>
        <Heading weight="700">Resume</Heading>
        <Subtitle>curriculum vita</Subtitle>
      </Button>
      <Button>
        <StyledIcon className="fas fa-camera fa-2x"></StyledIcon>
        <Heading weight="700">Portfolio</Heading>
        <Subtitle>my works</Subtitle>
      </Button>
      <Button>
        <StyledIcon className="fas fa-id-card fa-2x"></StyledIcon>
        <Heading weight="700">Contact</Heading>
        <Subtitle>say hello</Subtitle>
      </Button>
    </StyledContainer>
  );
};

export default NavSideBar;
