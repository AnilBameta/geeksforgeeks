import React from 'react';
import styled from 'styled-components';
import CreateIcon from '@mui/icons-material/Create';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

const Container = styled.div`
margin-top:20px;
text-align: start;
flex:2;
`;

const HeadingIcons = styled.div`
display: flex;
justify-content: end;
gap:5px;
`;

const Icon = styled.div`
font-size: 10px;
`

const Heading = styled.h1`

`

const CenterContent = () => {
  return (
    <Container>
        <HeadingIcons>
            <Icon>
            <CreateIcon />
            </Icon>
            <Icon>
              <ThumbUpOffAltOutlinedIcon />  
            </Icon>
            <Icon>
              <BookmarkBorderOutlinedIcon />  
            </Icon>
        </HeadingIcons>
    <Heading>What is an event loop in JavaScript</Heading>
    </Container>
  )
}

export default CenterContent
