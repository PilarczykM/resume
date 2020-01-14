import styled from "styled-components";

const Subtitle = styled.h3`
  display: block;
  font-size: ${({ big }) => (big ? "20px" : "10px")};
  color: #999999;
  font-weight: ${({ big }) => (big ? "300" : "500")};
  font-style: ${({ italic }) => (italic ? "italic" : "regular")};
  text-transform: ${({ big }) => (big ? "none" : "uppercase")};
`;

export default Subtitle;
