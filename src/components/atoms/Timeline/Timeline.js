import styled from "styled-components";

const Timeline = styled.div`
  position: relative;
  padding: 20px 0;

  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 50%;
    height: 100%;
    width: 1px;
    background-color: #999;
  }
`;

export default Timeline;
