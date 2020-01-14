import React from "react";
import styled from "styled-components";
import NavSideBar from "../components/organisms/NavSidebar/NavSidebar";
import SocialSidebar from "../components/organisms/SocialSidebar/SocialSidebar";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 150px 0;
`;
const Container = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: #fff;
`;

const MainTemplate = ({ children }) => (
  <Wrapper>
    <NavSideBar />
    <Container>{children}</Container>
    <SocialSidebar />
  </Wrapper>
);

export default MainTemplate;
