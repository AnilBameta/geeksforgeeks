import React from "react";
import {
  Container,
  Heading,
  NAV,
  UL,
  LI,
} from "../../styledComponents/homePage/LeftContent.styles";

const ListItems = [
  "How to calculate the number of days between two dates in javascript",
  "How to calculate the number of days between two dates in javascript",
  "How to calculate the number of days between two dates in javascript",
  "How to calculate the number of days between two dates in javascript",
  "How to calculate the number of days between two dates in javascript",
  "How to calculate the number of days between two dates in javascript",
  "How to calculate the number of days between two dates in javascript",
  "How to calculate the number of days between two dates in javascript",
  "How to calculate the number of days between two dates in javascript",
  "How to calculate the number of days between two dates in javascript",
  "How to calculate the number of days between two dates in javascript",
  "How to calculate the number of days between two dates in javascript",
  "How to calculate the number of days between two dates in javascript",
  "How to calculate the number of days between two dates in javascript",
  "How to calculate the number of days between two dates in javascript",
  "How to calculate the number of days between two dates in javascript",
  "How to calculate the number of days between two dates in javascript",
  "How to calculate the number of days between two dates in javascript",
  "How to calculate the number of days between two dates in javascript",
  "How to calculate the number of days between two dates in javascript",
  "How to calculate the number of days between two dates in javascript",
  "How to calculate the number of days between two dates in javascript",
  "How to calculate the number of days between two dates in javascript",
  "How to calculate the number of days between two dates in javascript",
];

const LeftContent = () => {
  return (
    <Container>
      <Heading>Table of Contents</Heading>
      <NAV>
        <UL>
          {ListItems.map((tableContents) => (
            <LI>{tableContents}</LI>
          ))}
        </UL>
      </NAV>
    </Container>
  );
};

export default LeftContent;
