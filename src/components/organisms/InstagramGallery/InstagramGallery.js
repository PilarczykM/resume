import React from "react";

import * as Styled from "./InstagramGallery.styled";
import Photo1 from "../../../assets/images/34726017_1900128806717430_4873113518024425472_n.jpg";
import Photo2 from "../../../assets/images/35276104_361819134223380_204058925639663616_n.jpg";
import Photo3 from "../../../assets/images/36466267_401175177057661_3789266348941508608_n.jpg";
import Photo4 from "../../../assets/images/36545834_633468033695533_1372145985538490368_n.jpg";
import Photo5 from "../../../assets/images/36783378_655151038172635_8501520955045052416_n.jpg";
import Photo6 from "../../../assets/images/47583952_332222334051423_4673785104831552026_n.jpg";
import Photo7 from "../../../assets/images/47585424_522214051625737_3961951946038022491_n.jpg";
import Photo8 from "../../../assets/images/53250697_253815682167129_1737449236139041503_n.jpg";

class InstagramGallery extends React.Component {
  render() {
    return (
      <Styled.InstagramGrid>
        <Styled.InstagramImage src={Photo1} alt="" />
        <Styled.InstagramImage src={Photo2} alt="" />
        <Styled.InstagramImage src={Photo3} alt="" />
        <Styled.InstagramImage src={Photo4} alt="" />
        <Styled.InstagramImage src={Photo5} alt="" />
        <Styled.InstagramImage src={Photo6} alt="" />
        <Styled.InstagramImage src={Photo7} alt="" />
        <Styled.InstagramImage src={Photo8} alt="" />
      </Styled.InstagramGrid>
    );
  }
}

export default InstagramGallery;
