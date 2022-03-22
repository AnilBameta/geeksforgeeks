import React from "react";

import RightContentCard from "./RightContentCard";
import {
  Container,
  Heading,
  SubHeading,
} from "../../styledComponents/homePage/RightContent.styles";

const subHeading = [
  "Difference between var,let and const keywords in javascript",
  "Difference between var,let and const keywords in javascript",
  "Difference between var,let and const keywords in javascript",
];
const RightContent = () => {
  return (
    <Container>
      <Heading>WHAT'S NEW</Heading>
      <RightContentCard Content="Data Structure & Algorithms-Self Paced Course" />
      <RightContentCard Content="Complete Interview Prepration" />
      <RightContentCard Content="System Design-Live Classes for Working Professionals" />
      <Heading>MOST POPULAR IN JAVASCRIPT</Heading>
      {subHeading.map((subHeadingItems) => (
        <SubHeading href="#">{subHeadingItems}</SubHeading>
      ))}

      <Heading>MOST VISITED IN WEB TECHNOLOGIES</Heading>
      {subHeading.map((subHeadingItems) => (
        <SubHeading href="#">{subHeadingItems}</SubHeading>
      ))}
    </Container>
  );
};

export default RightContent;
