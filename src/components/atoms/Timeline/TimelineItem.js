import styled from "styled-components";

const TimelineItem = styled.div`
  flex: 1;
  position: relative;
  margin: 0 30px;
  z-index: 2;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};

  &:not(:last-child) {
    &::before {
      position: absolute;
      content: "";
      top: 10px;
      right: -35px;
      height: 10px;
      width: 10px;
      background-color: ${({ switched }) => (switched ? "black" : "#ffd42d")};
      border-radius: 100%;
      border: none;
    }
  }
`;

export default TimelineItem;
