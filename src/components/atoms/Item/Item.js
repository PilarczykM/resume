import styled from "styled-components";

const Item = styled.li`
  list-style: none;
  font-size: 15px;
  font-weight: 400;
  line-height: 26px;
  margin-bottom: ${({ rows }) => (rows ? `${rows * 26 - 26}px` : "0")};

  span {
    display: block;
  }
`;

export default Item;
