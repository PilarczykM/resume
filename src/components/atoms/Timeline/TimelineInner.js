import styled from "styled-components";

const TimelineInner = styled.div`
  display: flex;
  justify-content: center;

  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

export default TimelineInner;
