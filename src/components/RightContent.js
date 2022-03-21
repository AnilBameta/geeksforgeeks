import React from 'react';
import styled from 'styled-components';
import RightContentCard from './RightContentCard';


const Container = styled.div`
flex:1;
display: flex;
flex-direction: column;
margin-right:5px;

`;

const Heading = styled.h3`
color:green;
font-weight: 500;
font-size: 15px;
`;

const SubHeading = styled.a`
text-decoration:none;
color:black;
font-size: 20px;
font-weight:450;
line-height: 40px;
margin: 5px 0 5px 0;
word-spacing: 10px;
`
const RightContent = () => {
  return (
    <Container>
     <Heading>WHAT'S NEW</Heading>
     <RightContentCard />
     <RightContentCard />
     <RightContentCard />
     <Heading>MOST POPULAR IN JAVASCRIPT</Heading>
     <SubHeading href='#'>Difference between var,let and const keywords in javascript</SubHeading>
     <SubHeading href='#'>Difference between var,let and const keywords in javascript</SubHeading>
     <SubHeading href='#'>Difference between var,let and const keywords in javascript</SubHeading>
     <Heading>MOST VISITED IN WEB TECHNOLOGIES</Heading>
     <SubHeading href='#'>Top 10 Projects For Beginners To Practice HTML and CSS Skills</SubHeading>
     <SubHeading href='#'>Top 10 Projects For Beginners To Practice HTML and CSS Skills</SubHeading>
     <SubHeading href='#'>Top 10 Projects For Beginners To Practice HTML and CSS Skills</SubHeading>
    </Container>
  )
}

export default RightContent
