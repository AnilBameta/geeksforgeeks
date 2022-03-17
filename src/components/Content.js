import React from 'react'
import styled from 'styled-components';
import CenterContent from './CenterContent';
import LeftContent from './LeftContent';
import RightContent from './RightContent';

const Container = styled.div`
display: flex;
flex-wrap: wrap;
gap:20px
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
