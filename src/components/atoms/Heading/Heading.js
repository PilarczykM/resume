import styled from "styled-components";

const Heading = styled.h1`
  display: block;
  font-size: ${({ big }) => (big ? "55px" : "14px")};
  font-weight: ${({ weight }) => (weight ? weight : "400")};
  margin-bottom: ${({ mb }) => (mb ? mb : "0px")};
  text-transform: ${({ big }) => (big ? "none" : "uppercase")};
`;

export default Heading;
