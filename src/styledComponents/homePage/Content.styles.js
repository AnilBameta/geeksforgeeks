import styled from "styled-components";
import { mobile, tablet, laptop } from "../../responsive";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  border-bottom: solid 1px grey;

  ${mobile({ flexDirection: "column" })};
  ${tablet({ flexDirection: "column" })};
  ${laptop({ flexDirection: "column" })};
`;
