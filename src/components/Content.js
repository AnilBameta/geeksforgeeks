import React from 'react'
import styled from 'styled-components';
import CenterContent from './CenterContent';
import LeftContent from './LeftContent';
import RightContent from './RightContent';
import {mobile,tablet,laptop} from '../responsive'

const Container = styled.div`
display: flex;
flex-wrap: wrap;
gap:20px;
border-bottom: solid 1px grey;

${mobile({flexDirection: 'column'})};
${tablet({flexDirection: 'column'})};
${laptop({flexDirection: 'column'})};

`;
const Content = () => {
  return (
    <Container>
        <LeftContent />
        <CenterContent />
        <RightContent />
    </Container>
  )
}

export default Content
