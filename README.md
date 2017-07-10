# hoc-loader

> **⚠️ Warning**: This loader is tested only with a single loader ([desvg-loader])
and a simple use case in mind.

**hoc-loader** is a webpack loader that allows to wrap the result of
the previous loader in the chain into a high-order component.

## Installation

```bash
npm i hoc-loader --save-dev
# or
yarn add --dev hoc-loader
```

## Configuration

```javascript
// ...
{
  test: /\.svg$/,
  use: [
    {
      loader: 'hoc', // 👈 Add loader
      options: {
        // 👇 The path to the HoC file. It must be absolute to the FS root
        // or relative to the instrumented file.
        path: '/path/to/Icon/index.jsx',

        // 👇 Depending on how HoC file is built, (e.g. if you use Babel
        // along with ES Modules) you may need to enable this option,
        // so the HoC file will be required as `require('path/to/hoc').default`.
        //
        // `false` by default
        useDefault: true,

        // 👇 The name of the export var used by the previous loader.
        // It depends on the loader, e.g. css-loader exports CSS Modules
        // into `exports.locals`, while svg-loader uses `module.exports`.
        //
        // `module.exports` by default
        exportVar: 'exports.locals'
      }
    },
    'desvg/react',
    'svg'
  ],

  // or if you prefer classic:

  loader: `hoc?useDefault&path=/path/to/Icon/index.jsx!desvg/react&exportVar!svg`
},
// ...
```

## Example

See a HoC example (in combination with [desvg]):

```js
import React from 'react'
import { Wrapper } from './style.css'

export default function (Svg) {
  return function Icon ({ width = '2rem' }) {
    return (
      <div style={{ width }}>
        <Svg fill='currentColor' />
      </div>
    )
  }
}
```

## License

[MIT © Sasha Koss](https://kossnocorp.mit-license.org/)

[desvg-loader]: https://github.com/kossnocorp/desvg-loader
[desvg]: https://github.com/kossnocorp/desvg
