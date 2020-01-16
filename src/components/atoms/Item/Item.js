import styled from "styled-components";

const Item = styled.li`
  list-style: none;
  font-size: ${({ font }) => (font ? font : "14px")};
  color: ${({ color }) => (color ? color : "#999")};
  font-weight: ${({ fw }) => (fw ? fw : "400")};
  font-style: ${({ italic }) => (italic ? "italic" : "normal")};
  line-height: 26px;
  margin-bottom: ${({ rows }) => (rows ? `${rows * 26 - 26}px` : "0")};

  span {
    display: block;
  }

  em {
    padding: 2px 5px;
    background-color: #ffd245;
    border-radius: 10px;
    color: black;
    font-weight: 300;
  }
`;

export default Item;
