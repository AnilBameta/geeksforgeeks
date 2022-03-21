import React from 'react'
import styled from 'styled-components';
import CardImg from '../images/pexels-daria-liudnaya-7354760.jpg';
import {tablet,laptop} from '../responsive'

const Container = styled.div`
margin-top:10px;
border:solid 0.5px grey;
display: flex;
gap:5px;
align-items: center;
padding: 0px 5px 0px 5px;
`;

const Img = styled.img`
flex:1;
height:130px;
width:42px;
margin:0;
margin-left: -5px;

${laptop({flex: '0.5'})};
${tablet({flex: '0.6'})};
`;

const Content = styled.div`
flex:2;
display: flex;
flex-direction: column;
align-items: flex-end;

${laptop({alignItems: 'start'})};

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
color:green;

${laptop({marginTop:'30px', marginLeft:'600px'})};
`
const RightContentCard = () => {
  return (
    <Container>
    <Img src={CardImg}></Img>
    <Content>
        <H2>Structure & Algorithms-Self Paced Course</H2>    
        <Btn>View Details</Btn>
        </Content>  
    
    </Container>
  )
}

export default RightContentCard
