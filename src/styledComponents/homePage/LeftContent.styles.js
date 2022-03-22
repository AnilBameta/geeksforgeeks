import styled from "styled-components";
import { mobile, tablet, laptop } from "../../responsive";

export const Container = styled.div`
  text-align: start;
  margin-left: 10px;
  flex: 1;
  ${mobile({ display: "none" })};
  ${tablet({ display: "none" })};
  ${laptop({ display: "none" })};
`;

export const Heading = styled.h3``;

export const NAV = styled.nav``;

export const UL = styled.ul`
  list-style-type: none;
  height: 1100px;
  width: 90%;
  overflow: hidden;
  overflow-y: scroll;
  margin-bottom: 0;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: rgb(219, 216, 216);
  }

  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
`;

export const LI = styled.li`
  margin-left: -40px;
  margin-top: 20px;
  font-weight: 500;
  font-size: 15px;
  padding-bottom: 10px;

  &:hover {
    font-weight: 700;
    cursor: pointer;
  }
`;
