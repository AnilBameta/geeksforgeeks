import React from "react";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GeeksforGeeks from "../../images/geeksforgeeks.png";

import {
  Container,
  Wrapper,
  FooterContainer,
  FirstPart,
  Top,
  LogoImg,
  Logo,
  Center,
  Address,
  Info,
  Message,
  Bottom,
  IconBg,
  Icon,
  SecondPart,
  Heading,
  UL,
  LI,
} from "../../styledComponents/homePage/Footer.styles";

const footerList = [
  "Home",
  "Forums",
  "Help Center",
  "Become an Affiliate",
  "Community Meetups",
];

const footerHeading = [
  "Company",
  "Learn",
  "News",
  "Languages",
  "Web Development",
  "Contribute",
];
const Footer = () => {
  return (
    <Container>
      <Wrapper padTop="20px" padBottom="30px">
        <FooterContainer>
          <FirstPart>
            <Top>
              <LogoImg src={GeeksforGeeks}></LogoImg>
              <Logo>GeeksforGeeks</Logo>
            </Top>
            <Center>
              <Address>
                <LocationOnIcon style={{ color: "green" }}></LocationOnIcon>
                <Info>
                  {" "}
                  5th Floor, A-118, Sector-136, Noida, Uttar Pradesh - 201305
                </Info>
              </Address>
              <Message>
                <MailOutlineIcon style={{ color: "green" }}></MailOutlineIcon>
                <Info>feedback@geeksforgeeks.org</Info>
              </Message>
            </Center>
            <Bottom>
              <IconBg>
                <Icon>
                  {" "}
                  <FacebookOutlinedIcon></FacebookOutlinedIcon>
                </Icon>
              </IconBg>
              <IconBg>
                <Icon>
                  <TwitterIcon></TwitterIcon>
                </Icon>
              </IconBg>
              <IconBg>
                <Icon>
                  <YouTubeIcon></YouTubeIcon>
                </Icon>
              </IconBg>
              <IconBg>
                <Icon>
                  <InstagramIcon></InstagramIcon>
                </Icon>
              </IconBg>
              <IconBg color="white">
                <Icon>
                  <LinkedInIcon></LinkedInIcon>
                </Icon>
              </IconBg>
            </Bottom>
          </FirstPart>
          {footerHeading.map((footerHeadingList) => (
            <SecondPart>
              <Heading>{footerHeadingList}</Heading>
              <UL>
                {footerList.map((footerListItem) => (
                  <LI>{footerListItem}</LI>
                ))}
              </UL>
            </SecondPart>
          ))}
        </FooterContainer>
      </Wrapper>
    </Container>
  );
};

export default Footer;
