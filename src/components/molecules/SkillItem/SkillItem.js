import React from "react";
import * as Styled from "./SkillItem.styled";

const SkillItem = ({ stars, children }) => {
  const starsCount = 10;
  const transparentStars = starsCount - stars;
  const fullStars = starsCount - transparentStars;

  return (
    <Styled.StyledItem>
      <Styled.RatingContainer>
        {Array(fullStars).fill(<Styled.RatingFull />)}
        {Array(transparentStars).fill(<Styled.RatingTransparent />)}
      </Styled.RatingContainer>
      {children}
    </Styled.StyledItem>
  );
};

export default SkillItem;
