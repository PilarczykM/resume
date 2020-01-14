import styled from "styled-components";

const ulMixin = () => `
      position: absolute;
      content: "";
      left: 0px;
      width: 10px;
      height: 10px;
      border-radius: 100%;
`;

const ListItem = styled.ul`
  position: relative;
  flex: 1;
  padding: 40px 20px;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
  color: ${({ data }) => (data ? "#999999" : "#2a2a2a")};

  &:not(:first-child) {
    border-left: 1px solid #eaeaea;

    &::after {
      ${ulMixin}
      top: 0;
      background-color: black;
      transform: translate(-50%, -250%);
    }

    &::before {
      ${ulMixin}
      bottom: 0;
      background-color: #ffd42d;
      transform: translate(-50%, 250%);
    }
  }
`;
export default ListItem;
