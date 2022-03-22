import style from "styled-components";
import Button from "@mui/material/Button";
import { mobile, tablet, laptop, desktop, tv } from "../../responsive";

export const Container = style.div`
position: -webkit-sticky;
  position: sticky;
  top:0px;
  background-color:white;
  z-index:1;
`;
export const Wrapper = style.div`
height:80px;
width: 95%;
margin-left: auto;
margin-right: auto;
display:flex;
align-items:center;
`;

export const Left = style.div`
flex:1.3;
justify-content: left;

${laptop({ display: "none" })};
${mobile({ display: "none" })};
${tablet({ display: "none" })};

`;

export const ThreeLine = style.div`
${desktop({ display: "none" })};
${tv({ display: "none" })};

`;

export const Button1 = style(Button)`
color:black !important;
font-weight:550 !important;
&:hover
{
  color:green !important;
  background-color: white;
}
`;

export const Button2 = style(Button)`
background-color:white !important;
color:black !important;
font-weight: 550 !important;

&:hover
{
  color:green !important;
  background-color: white;
}
`;

export const Center = style.div`
flex:1;
display:flex;
gap:10px;
justify-content: center;
align-items:center;

${tablet({ justifyContent: "end" })};
${laptop({ justifyContent: "end" })};
`;

export const Logo = style.img`
width:30px;
height:30px;


`;

export const LogoName = style.h1`

${mobile({ display: "none" })};
${tablet({ display: "none" })};
`;

export const Right = style.div`
flex:1;
display:flex;
justify-content:right;
gap:20px;
align-items:center;

${mobile({ justifyContent: "left", gap: "10px" })};
${tablet({ justifyContent: "right", gap: "10px" })};
`;

export const RightBtn = style(Button)`
background-color: black !important;
color:white !important;


&:hover
{
  background-color:green !important;
}

${mobile({ display: "none" })};
`;
