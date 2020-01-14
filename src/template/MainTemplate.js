import React from "react";
import styled from "styled-components";
import NavSideBar from "../components/organisms/NavSidebar/NavSidebar";
import SocialSidebar from "../components/organisms/SocialSidebar/SocialSidebar";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 150px 0;
`;
const Container = styled.main`
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 10px 20px 3px rgba(0, 0, 0, 0.3);
`;

const BottomColor = styled.div`
  position: relative;
  width: 100%;
  height: 20px;
  background-color: #ffd42d;
`;

const MainTemplate = ({ children }) => (
  <Wrapper>
    <NavSideBar />
    <Container>
      {children}
      <BottomColor />
    </Container>
    <SocialSidebar />
  </Wrapper>
);

export default MainTemplate;
