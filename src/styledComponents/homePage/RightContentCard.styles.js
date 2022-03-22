import styled from "styled-components";
import { tablet, laptop } from "../../responsive";

export const Container = styled.div`
  margin-top: 10px;
  box-shadow: 1px 1px 5px 0.1px whitesmoke;
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 0px 5px 0px 5px;
`;

export const Img = styled.img`
  flex: 1;
  height: 130px;
  width: 42px;
  margin: 0;
  margin-left: -5px;

  ${laptop({ flex: "0.5" })};
  ${tablet({ flex: "0.6" })};
`;

export const Content = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ${laptop({ alignItems: "start" })};
`;

export const H2 = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 500;
`;

export const Btn = styled.button`
  justify-content: right;
  margin-bottom: 5px;
  border: none;
  padding: 5px;
  background-color: white;
  color: green;

  ${laptop({ marginTop: "30px", marginLeft: "600px" })};
`;
