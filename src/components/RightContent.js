import React from 'react';
import styled from 'styled-components';
import RightContentCard from './RightContentCard';

const Container = styled.div`
flex:1;
display: flex;
flex-direction: column;
margin-right:5px
`;

const Heading = styled.h3`
color:green;
`
const RightContent = () => {
  return (
    <Container>
     <Heading>WHAT'S NEW</Heading>
     <RightContentCard />
     <RightContentCard />
     <RightContentCard />

    </Container>
  )
}

export default RightContent
