import styled from "styled-components";
import Heading from "../../atoms/Heading/Heading";

export const SectionTitle = styled(Heading)`
  position: relative;
  font-size: 18px;

  &::before {
    position: absolute;
    content: "";
    top: -20px;
    left: 50%;
    width: 20px;
    height: 8px;
    background-color: #ffd42d;
    transform: translate(-50%, 0);
  }
`;

export default SectionTitle;
