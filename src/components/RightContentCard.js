import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
margin-top:10px;
border:solid 0.5px grey;
display: flex;
align-items: center;
padding: 0px 5px 0px 5px;
`;

const Img = styled.img`
flex:1;
`;

const Content = styled.div`
flex:2;
display: flex;
flex-direction: column;
align-items: flex-end;
`;

const H2 = styled.h2`
margin:0;
`

const Btn = styled.button`
justify-content: right;
margin-bottom: 5px;
border: none;
padding: 5px;
background-color: white;
color:green
`
const RightContentCard = () => {
  return (
    <Container>
    <Img src=''></Img>
    <Content>
        <H2>Structure & Algorithms-Self Paced Course</H2>    
        <Btn>View Details</Btn>
        </Content>  
    
    </Container>
  )
}

export default RightContentCard
