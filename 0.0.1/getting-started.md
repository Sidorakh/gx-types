# Getting Started

## Installing
---
1. Download the latest .yymp from [releases](https://github.com/Sidorakh/gx-types/releases/)
2. Open your existing GameMaker project and drag the .yymp file into the IDE (or go to the Tools menua nd select Import Local Package)
3. Ensure you import the `GX Types` folder (optionally, you can import everything which includes some examples)
4. You're done!


## Updating GX Types
---
1. Delete the `GX Types` folder in the IDE
2. Follow the steps in [Installing](#installing) with the new version


## Using GX Types
---

1. Follow initial setup instructions for this extension
2. Create an extension with a JavaScript file
3. Use the classes on the Window object in your own extensions

## To modify the extension

To build the extension manually
1. Ensure you have Node.JS and NPM installed
2. Open a terminal in the `extensions/gx_types/gx-types` directory
3. Make changes as needed to the ./ts files in the ./src directory
4. Run `npm run build` to build the extension when you're done

## Important information

Each class that has a constructor has a final optional argument, `create`, that is by default `true`. This argument tells the class whetyher or not to actually create the udnerlying structure, or if it's going to be added later. 