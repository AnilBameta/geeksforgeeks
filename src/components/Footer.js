import React from 'react'
import styled from 'styled-components';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GeeksforGeeks from '../images/geeksforgeeks.png';
import {mobile, tablet, laptop} from '../responsive';


const Container = styled.div`
background-color: ${props => props.bgColor};
border-bottom: solid 1px ${props => props.bbColor || 'none'} ;
margin-top:50px;
`

const Wrapper = styled.div`
width:98%;
margin-left:auto ;
margin-right:auto ;
padding-top: ${props => props.padTop} ;
padding-bottom: ${props => props.padBottom} ;
display:flex ;
align-items: center;
justify-content:center ;
flex-direction: ${props => props.fDir || 'row'} ;
`;
const FooterContainer = styled.div`
display: flex ;
flex-wrap: wrap;
width:100%;
gap:10px;
`;

const FirstPart = styled.div`
flex:1.5;
display: flex ;
flex-direction: column;

${mobile({minWidth:'100%', alignItems: 'center'})};
${tablet({minWidth:'100%', alignItems: 'center'})};
${laptop({minWidth:'100%', alignItems: 'center'})};

`;

const Top = styled.div`
display: flex;
`
const LogoImg = styled.img`
width:60px;
height:60px;
`

const Logo = styled.h1`
flex:1;
margin:0;
font-weight:400;
margin-left:10px;
`
const Center = styled.div`
margin-top:20px;
`;

const Message = styled.div`
display: flex;
margin-top:10px;
`;

const Address = styled.div`
display: flex;
font-size: 15px;
`;

const Info = styled.p`

margin:0;
margin-left:5px;
line-height:20px;
`

const Bottom = styled.div`
margin-top: 20px;
display:flex;
gap:10px;
`;

const IconBg = styled.div`
width:40px;
height:40px;
border-radius: 50% ;
text-align: center ;
background-color:grey  ;
`;

const Icon = styled.div`
margin-top:8px;
color:${props => props.color || 'white'};
text-align: center ;
font-size: 12px;
`

const SecondPart = styled.div`
flex:1;
display: flex ;
flex-direction: column ;
`;

const UL = styled.ul`
list-style-type: none ;
margin-left: -2em; 
`;

const LI = styled.li`
color:black;
padding: 10px 0 3px 0;

&:hover {
    color:green;
    cursor: pointer;
}
`

const Heading = styled.h3`
font-weight:400 ;
margin-bottom:10px;
color:green;
font-weight:500;
`

const ThirdPart = styled.div`
flex:1;
display: flex ;
flex-direction: column ;
`;

const FourthPart = styled.div`
flex:1;
display:flex;
flex-direction: column ;
align-items: start ;
`;


const Footer = () => {
  return (
    <Container >
        <Wrapper padTop= "20px" padBottom='30px'>
         <FooterContainer>
          <FirstPart>
          <Top>
          <LogoImg src= {GeeksforGeeks}></LogoImg>
              <Logo>GeeksforGeeks</Logo>
              </Top>
              <Center>
                  <Address>
                  <LocationOnIcon style={{color:'green'}}></LocationOnIcon>
                  <Info> 5th Floor, A-118,
                  Sector-136, Noida, Uttar Pradesh - 201305</Info>
                  </Address>
              <Message>
               <MailOutlineIcon style={{color:'green'}}></MailOutlineIcon>
               <Info>feedback@geeksforgeeks.org</Info>
              </Message>
              </Center>
              <Bottom>
              <IconBg >
          
          <Icon> <FacebookOutlinedIcon></FacebookOutlinedIcon></Icon>
          
          </IconBg>
          <IconBg >
          
          <Icon><TwitterIcon></TwitterIcon></Icon>
          
          </IconBg>
          <IconBg >
          
          <Icon><YouTubeIcon></YouTubeIcon></Icon>
          
          </IconBg>
          <IconBg >
          
          <Icon  ><InstagramIcon></InstagramIcon></Icon>
          
          </IconBg>
          <IconBg color= 'white'>
          
          <Icon><LinkedInIcon></LinkedInIcon></Icon>
          
          </IconBg>
              </Bottom>
          </FirstPart>
          <SecondPart>
          <Heading>Company</Heading>
          <UL>
          <LI>Support Forum</LI>
          <LI>Terms & Conditions</LI>
          <LI>Support Policy</LI>
          <LI>Refund Policy</LI>
          <LI>FAQs</LI>
          </UL>
          </SecondPart>
          <ThirdPart>
          <Heading>Learn</Heading>
          <UL>
          <LI>Home</LI>
          <LI>Forums</LI>
          <LI>Help Center</LI>
          <LI>Become an Affiliate</LI>
          <LI>Community Meetups</LI>
          </UL>
          </ThirdPart>
          <FourthPart>
          <Heading>News</Heading>
          <UL>
          <LI>Home</LI>
          <LI>Forums</LI>
          <LI>Help Center</LI>
          <LI>Become an Affiliate</LI>
          <LI>Community Meetups</LI>
          </UL>
          </FourthPart>
          <FourthPart>
          <Heading>Languages</Heading>
          <UL>
          <LI>Home</LI>
          <LI>Forums</LI>
          <LI>Help Center</LI>
          <LI>Become an Affiliate</LI>
          <LI>Community Meetups</LI>
          </UL>
          </FourthPart>
          <FourthPart>
          <Heading>Web Development</Heading>
          <UL>
          <LI>Home</LI>
          <LI>Forums</LI>
          <LI>Help Center</LI>
          <LI>Become an Affiliate</LI>
          <LI>Community Meetups</LI>
          </UL>
          </FourthPart>
          <FourthPart>
          <Heading>Contribute</Heading>
          <UL>
          <LI>Home</LI>
          <LI>Forums</LI>
          <LI>Help Center</LI>
          <LI>Become an Affiliate</LI>
          <LI>Community Meetups</LI>
          </UL>
          </FourthPart>
         </FooterContainer>
        </Wrapper>
    </Container>
  )
}

export default Footer