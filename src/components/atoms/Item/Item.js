import styled from "styled-components";

const Item = styled.li`
  list-style: none;
  font-size: ${({ font }) => (font ? font : "15px")};
  color: ${({ color }) => (color ? color : "black")};
  font-weight: ${({ fw }) => (fw ? fw : "400")};
  font-style: ${({ italic }) => (italic ? "italic" : "normal")};
  line-height: 26px;
  margin-bottom: ${({ rows }) => (rows ? `${rows * 26 - 26}px` : "0")};

  span {
    display: block;
  }
`;

export default Item;
