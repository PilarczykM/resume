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
  display: flex;
  justify-content: center;
  width: 80%;
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
