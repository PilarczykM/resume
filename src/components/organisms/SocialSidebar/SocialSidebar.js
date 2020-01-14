import React from "react";
import styled from "styled-components";
import Button from "../../atoms/Button/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CopyRight = styled.div`
  background-color: #2a2a2a;
  padding: 9px 20px;
  transform-origin: 0 0;
  transform: rotate(90deg) translateY(-117%);
`;

const CopyTightText = styled.p`
  color: #fff;
  font-size: 12px;
  font-weight: 400;
`;

const SocialSidebar = () => (
  <Container>
    <Button social>
      <i className="fab fa-facebook"></i>
    </Button>
    <Button social>
      <i className="fab fa-instagram"></i>
    </Button>
    <Button social>
      <i className="fab fa-linkedin"></i>
    </Button>
    <Button social>
      <i className="fab fa-github"></i>
    </Button>
    <CopyRight>
      <CopyTightText>© 2020 Pilarczyk.</CopyTightText>
    </CopyRight>
  </Container>
);

export default SocialSidebar;
