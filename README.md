# flat-color-generator
Flat color generator based on Mariam Maarouf's [flat-color-generator](https://github.com/mariamrf/flat-color-generator)


Read the original documentation by Mariam Maarouf [here](https://github.com/mariamrf/flat-color-generator)

## Install
Install using [npm](https://npmjs.com/).
```
npm install flat-color-generator
```

## Usage
```js
const flatuicolor = require('flat-color-generator');

const color = flatuicolor();

console.log(color.hex); // prints the hex value of the color
```

You can pass in an optional hue value to choose a random color from that hue value/degree.

```js
const hue = 45;
const color = flatuicolor(hue);
```


The return object has the following properties:

| property |                        |
|----------|------------------------|
| h        | hue                    |
| s        | saturation             |
| v        | value                  |
| r        | red                    |
| g        | green                  |
| b        | blue                   |
| hex      | hex value of the color |

## Credits
[flat-color-generator](https://github.com/mariamrf/flat-color-generator) by Mariam Maarouf

## Licence
MIT