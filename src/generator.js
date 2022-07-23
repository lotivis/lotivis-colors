import * as d3Color from "d3-color";
import * as d3Array from "d3-array";
import { colorSchemeDefault, tintColor } from "./schemes.js";
import { colorScale } from "./scales.js";

function darker(color) {
  return color.darker();
}

export function ColorsGenerator(c, d) {
  // private

  let colorScheme = c || colorSchemeDefault,
    data = d || [],
    groupColors,
    labelColors,
    groupsToLabels,
    groups;

  function fallback() {
    return Array.isArray(colorScheme) && colorScheme.length
      ? colorScheme[0]
      : tintColor;
  }

  function generator(index) {
    return colorScheme[(+index || 0) % colorScheme.length];
  }

  function calc() {
    groupColors = new Map();
    labelColors = new Map();
    groupsToLabels = d3Array.group(
      data,
      (d) => d.group || d.label,
      (d) => d.label
    );
    groups = Array.from(groupsToLabels.keys());

    groups.forEach((group) => {
      let labels = Array.from((groupsToLabels.get(group) || []).keys());
      let groupColor = colorScheme[groups.indexOf(group) % colorScheme.length];
      let c1 = d3Color.color(groupColor);
      let groupScale = colorScale(c1, darker(c1));

      groupColors.set(group, c1);

      labels.forEach((label, index) => {
        labelColors.set(label, groupScale(index / labels.length));
      });
    });

    return generator;
  }

  // public

  generator.data = function (_) {
    return arguments.length ? ((data = _), calc()) : data;
  };

  generator.colorScheme = function (_) {
    return arguments.length ? ((colorScheme = _), calc()) : colorScheme;
  };

  generator.group = function (group) {
    return groupColors ? groupColors.get(group) || fallback() : fallback();
  };

  generator.label = function (label) {
    return labelColors ? labelColors.get(label) || fallback() : fallback();
  };

  return generator;
}

export const colorsGenerator = ColorsGenerator;
