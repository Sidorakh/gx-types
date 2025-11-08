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
3. Use the classes on the Window object


## Important information

Each class that has a constructor has a final optional argument, `create`, that is by default `true`. This argument tells the class whetyher or not to actually create the udnerlying structure, or if it's going to be added later. 