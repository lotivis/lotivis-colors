# lotivis-colors [![Node.js CI](https://github.com/lukasdanckwerth/lotivis-colors/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/lukasdanckwerth/lotivis-colors/actions/workflows/node.js.yml)

Colors for lotivis.js.

```js
let data = [ /* */ ];
let colorsGenerator = lotivis.colorsGenerator(data);
let labelColor = colorsGenerator.label("label-1");
```

## Installing

If you use npm, `npm install lotivis-colors`. You can also download the [latest realease on GitHub](https://github.com/lukasdanckwerth/lotivis-colors/releases/latest). For using in browsers, you can load the UMD bundle from an npm-based CDN such as jsDelivr.

```html
<script src="https://cdn.jsdelivr.net/..."></script>
<script>

let dataController = lotivis.dataController();

</script>

```

## API Reference

### Colors Generator

```js
let data = [ /* */ ];
let colorsGenerator = lotivis.colorsGenerator(data);

// receive color for a specific label
let labelColor = colorsGenerator.label("label-1");

// receive color for a specific group
let groupColor = colorsGenerator.group("group-1");

// change data of generator
colorsGenerator.data(otherData);

// change color scheme of generator
colorsGenerator.colorScheme(lotivis.colorSchemeTableau10);
```

#### colorsGenerator.**[data](./src/generator.js)**(_)

Gets or sets the generators data.

#### colorsGenerator.**[colorScheme](./src/generator.js)**(_)

Gets or sets the generators [color scheme](#color-schemes).

#### colorsGenerator.**[group](./src/generator.js)**(group)

Returns the color for the specified `group`.

#### colorsGenerator.**[label](./src/generator.js)**(label)

Returns the color for the specified `label`.

### Color Scales

#### lotivis.**[colorScale](./src/scales.js)**(...colors)

Returns a generated color scale from the specified colors.

#### lotivis.**[colorScale1](./src/scales.js)**

Colro scale with "Yellow", "Orange", "Red" and "Purple".

#### lotivis.**[colorScale2](./src/scales.js)**

Color scale with "White", colorSchemeDefault[2] and colorSchemeDefault[0].

### Color Schemes

A color scheme is an array of HTML colors.

#### lotivis.**[colorSchemeLotivis10](./src/schemes.js)**

```html
[
  "RoyalBlue",
  "MediumSeaGreen",
  "MediumPurple",
  "Violet",
  "Orange",
  "Tomato",
  "Turquoise",
  "LightGray",
  "Gray",
  "BurlyWood",
]
```

#### lotivis.**[colorSchemeCategory10](./src/schemes.js)**

Copy of `d3.schemeCategory10`.

#### lotivis.**[colorSchemeTableau10](./src/schemes.js)**

Copy of `d3.colorSchemeTableau10`.

#### lotivis.**[colorSchemeDefault](./src/schemes.js)**

Copy of `colorSchemeCategory10`.

#### lotivis.**[tintColor](./src/schemes.js)**

Holds the __first__ color of th default color scheme ([`colorSchemeDefault`](#lotiviscolorschemedefault)).

## Development`

```bash
# build module
yarn build

# develop module
yarn build:watch
```