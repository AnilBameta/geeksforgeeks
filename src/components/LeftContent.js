import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
text-align: start;
margin-left: 10px;
flex:1;
`

const Heading = styled.h3`

`;

const UL = styled.ul`
list-style-type: none;
`;

const LI =styled.li`
margin-left: -40px;
margin-top: 20px;
`;


const LeftContent = () => {
  return (
    <Container>
        <Heading>Table of Contents</Heading>
        <UL>
            <LI>How to calculate the number of days between two dates in javascript</LI>
            <LI>How to calculate the number of days between two dates in javascript</LI>
            <LI>How to calculate the number of days between two dates in javascript</LI>
            <LI>How to calculate the number of days between two dates in javascript</LI>
            <LI>How to calculate the number of days between two dates in javascript</LI>
            <LI>How to calculate the number of days between two dates in javascript</LI>
            <LI>How to calculate the number of days between two dates in javascript</LI>
            <LI>How to calculate the number of days between two dates in javascript</LI>
        </UL>
    </Container>
  )
}

export default LeftContent
