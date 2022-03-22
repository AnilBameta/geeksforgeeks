import React from "react";

import CenterContent from "./CenterContent";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

import { Container } from "../../styledComponents/homePage/Content.styles";

const Content = () => {
  return (
    <Container>
      <LeftContent />
      <CenterContent />
      <RightContent />
    </Container>
  );
};

export default Content;
