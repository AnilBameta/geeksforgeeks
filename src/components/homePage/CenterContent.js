import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import {
  Container,
  HeadingIcons,
  Icon,
  Heading,
} from "../../styledComponents/homePage/CenterContent.styles";

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
  );
};

export default CenterContent;
