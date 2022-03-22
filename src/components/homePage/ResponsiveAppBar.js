import * as React from "react";
import {
  Container1,
  Button1,
} from "../../styledComponents/homePage/ResponsiveAppBar.styles";

const pages = [
  "HTML",
  "CSS",
  "Bootstrap",
  "JavaScript",
  "NodeJs",
  "AngularJS",
  "jQuery",
  "PHP",
  "Typescript",
  "JSON",
  "SVG",
  "Wordpress",
  "React",
  "EXPRESS",
];

const ResponsiveAppBar = () => {
  return (
    <Container1>
      {pages.map((page) => (
        <Button1>{page}</Button1>
      ))}
    </Container1>
  );
};
export default ResponsiveAppBar;
