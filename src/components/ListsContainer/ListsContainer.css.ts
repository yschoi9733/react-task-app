import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css";

export const listsContainer = style({
  display: 'flex',
  flexWrap: 'wrap',
  height: 'max-content',
  rowGap: vars.spacing.listspacing,
  margin: vars.spacing.listspacing,
})