# Color

All available colors and their variants.

## Import

```js
import { grey } from "sushiweb/tokens/color";
```

## Example

```js
import { white, black, red } from "sushiweb/tokens/color";

// Color variants
const redColor = red.z500;
const lightRedColor = red.z100;

// colors without variants
const blackColor = black;
const whiteColor = white;

// Use with a component
<Button btnColor={red.z500} />;
```

<!-- STORY -->
