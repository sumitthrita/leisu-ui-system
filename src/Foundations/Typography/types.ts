import React from "react";

export enum Sizes {
  b1 = "b1",
  b2 = "b2",
  b3 = "b3",
  b4 = "b4",
  b5 = "b5",
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
}

export const pixelToSemanticMapper = {
  48: "h1",
  36: "h2",
  32: "h3",
  28: "h4",
  24: "h5",
  20: "h6",
  18: "b1",
  16: "b2",
  14: "b3",
  12: "b4",
  10: "b5",
};

export enum Weight {
  regular = "regular",
  bold = "bold",
  extraBold = "extraBold",
}

export type SizeTypes = keyof typeof Sizes | keyof typeof pixelToSemanticMapper;

export type ColorTypes = string;

export type WeightTypes = keyof typeof Weight;

export interface TypographyProps extends React.HTMLAttributes<HTMLDivElement> {
  weight?: WeightTypes;
  size?: SizeTypes;
  textColor?: ColorTypes;
  underline?: boolean;
  capitalize?: boolean;
  ellipsis?: boolean;
  lineThrough?: boolean;
}
