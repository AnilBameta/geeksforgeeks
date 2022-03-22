import React from "react";

import CardImg from "../../images/pexels-daria-liudnaya-7354760.jpg";

import {
  Container,
  Img,
  Content,
  H2,
  Btn,
} from "../../styledComponents/homePage/RightContentCard.styles";

const RightContentCard = (props) => {
  return (
    <Container>
      <Img src={CardImg}></Img>
      <Content>
        <H2>{props.Content}</H2>
        <Btn>View Details</Btn>
      </Content>
    </Container>
  );
};

export default RightContentCard;
