import styled from "styled-components";
import { mobile, tablet, laptop } from "../../responsive";

export const Container = styled.div`
  background-color: ${(props) => props.bgColor};
  border-bottom: solid 1px ${(props) => props.bbColor || "none"};
  margin-top: 50px;
`;

export const Wrapper = styled.div`
  width: 98%;
  margin-left: auto;
  margin-right: auto;
  padding-top: ${(props) => props.padTop};
  padding-bottom: ${(props) => props.padBottom};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${(props) => props.fDir || "row"};
`;
export const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
`;

export const FirstPart = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;

  ${mobile({ minWidth: "100%", alignItems: "center" })};
  ${tablet({ minWidth: "100%", alignItems: "center" })};
  ${laptop({ minWidth: "100%", alignItems: "center" })};
`;

export const Top = styled.div`
  display: flex;
`;
export const LogoImg = styled.img`
  width: 60px;
  height: 60px;
`;

export const Logo = styled.h1`
  flex: 1;
  margin: 0;
  font-weight: 400;
  margin-left: 10px;
`;
export const Center = styled.div`
  margin-top: 20px;
`;

export const Message = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const Address = styled.div`
  display: flex;
  font-size: 15px;
`;

export const Info = styled.p`
  margin: 0;
  margin-left: 5px;
  line-height: 20px;
`;

export const Bottom = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
`;

export const IconBg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-align: center;
  background-color: grey;
`;

export const Icon = styled.div`
  margin-top: 8px;
  color: ${(props) => props.color || "white"};
  text-align: center;
  font-size: 12px;
`;

export const SecondPart = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const UL = styled.ul`
  list-style-type: none;
  margin-left: -2em;
`;

export const LI = styled.li`
  color: black;
  padding: 10px 0 3px 0;

  &:hover {
    color: green;
    cursor: pointer;
  }
`;

export const Heading = styled.h3`
  font-weight: 400;
  margin-bottom: 10px;
  color: green;
  font-weight: 500;
`;
