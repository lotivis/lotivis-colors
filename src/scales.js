import { colorSchemeDefault } from "./schemes.js";
import * as d3 from "d3-scale";

export function colorScale(...colors) {
  if (!colors.length) throw new Error("no colors");
  return d3
    .scaleLinear()
    .domain(colors.map((c, i) => i / (colors.length - 1)))
    .range(colors);
}

export const colorScale1 = colorScale("Yellow", "Orange", "Red", "Purple");

export const colorScale2 = colorScale(
  "White",
  colorSchemeDefault[2],
  colorSchemeDefault[0]
);
