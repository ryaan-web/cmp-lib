import React from "react";
import ColorPalette from "../Common";

import { indigo, brown, teal, orange, pink, lime, cider } from "ZColors";

const allColors = [
  {
    name: "Indigo",
    color: indigo.z500,
    variant: "z500",
    offsets: indigo
  },
  {
    name: "Brown",
    color: brown.z500,
    variant: "z500",
    offsets: brown
  },
  {
    name: "Teal",
    color: teal.z500,
    variant: "z500",
    offsets: teal
  },
  {
    name: "Orange",
    color: orange.z500,
    variant: "z500",
    offsets: orange
  },
  {
    name: "Pink",
    color: pink.z500,
    variant: "z500",
    offsets: pink
  },
  {
    name: "Lime",
    color: lime.z500,
    variant: "z500",
    offsets: lime
  },
  {
    name: "Cider",
    color: cider.z500,
    variant: "z500",
    offsets: cider
  }
];

const SecondaryColorsContainer = () => (
  <ColorPalette colors={allColors} heading="Secondary Colors" />
);

export default SecondaryColorsContainer;
