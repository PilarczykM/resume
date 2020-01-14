import styled from "styled-components";

const Paragraph = styled.p`
  padding: 0 80px;
  font-size: 15px;
  line-height: 27px;
  font-weight: 400;
  font-style: ${({ italic }) => (italic ? "italic" : "normal")};
  color: #999;
`;

export default Paragraph;
