import React from "react";
import styled from "styled-components";
import Heading from "../../atoms/Heading/Heading";
import Subtitle from "../../atoms/Subtitle/Subtitle";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const Title = ({ title, subtitle, italic }) => (
  <StyledContainer>
    <Heading big mb="20px">
      {title}
    </Heading>
    <Subtitle big italic>
      {subtitle}
    </Subtitle>
  </StyledContainer>
);

export default Title;
