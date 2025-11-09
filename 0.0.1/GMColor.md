# GMColor

This is a class of static functions for dealing with colours

## Types

### Color
| Field | Constant | Definition |
| - | - | - |
| Aqua | c_aqua | 16776960 |
| Black | c_black | 0 |
| Blue | c_blue | 16711680 |
| DarkGray | c_dkgray | 4210752 |
| Fuchsia | c_fuchsia | 16711935 |
| Gray | c_gray | 8421504 |
| Green | c_green | 32768 |
| Lime | c_lime | 65280 |
| LightGray | c_ltgray | 12632256 |
| Maroon | c_maroon | 128 |
| Navy | c_navy | 8388608 |
| Olive | c_olive | 32896 |
| Orange | c_orange | 4235519 |
| Purple | c_purple | 8388736 |
| Red | c_red | 255 |
| Silver | c_silver | 12632256 |
| Teal | c_teal | 8421376 |
| White | c_white | 16777215 |
| Yellow | c_yellow | 65535 |

BGR colour constants from GameMaker, for more information [check the documentation](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Colour_And_Alpha/Colour_And_Alpha.htm)


## Functions

### get_blue()

`get_blue(col: number): number`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| col | number | Colour to check |

Returns: number

Wraps [`colour_get_blue`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Colour_And_Alpha/colour_get_blue.htm)

### get_green()

`get_green(col: number): number`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| col | number | Colour to check |

Returns: number

Wraps [`colour_get_green`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Colour_And_Alpha/colour_get_green.htm)


### get_red()

`get_red(col: number): number`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| col | number | Colour to check |

Returns: number

Wraps [`colour_get_red`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Colour_And_Alpha/colour_get_red.htm)


### get_hue()

`get_hue(col: number): number`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| col | number | Colour to check |

Returns: number

Wraps [`colour_get_hue`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Colour_And_Alpha/colour_get_hue.htm)

### get_saturation()

`get_saturation(col: number): number`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| col | number | Colour to check |

Returns: number

Wraps [`colour_get_saturation`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Colour_And_Alpha/colour_get_saturation.htm)

### get_value(col: number): number`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| col | number | Colour to check |

Returns: number

Wraps [`colour_get_value`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Colour_And_Alpha/colour_get_value.htm)

### rgb_to_bgr()

`rgb_to_bgr(col: number): number`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| col | number | Colour to convert |

Returns: number

Converts a given RGB colour to BGR

### bgr_to_rgb()

`bgr_to_rgb(col: number): number`


Arguments:

| Argument | Type | Description |
| - | - | - | 
| col | number | Colour to convert |

Return: number

Converts a given BGR colour to RGB

### make_color_rgb()

`make_color_rgb(r: number, g: number, b: number): number`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| r | number | Red channel |
| g | number | Green channel |
| b | number | Blue channel |

Returns: number

Wraps [`make_colour_rgb`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Colour_And_Alpha/make_colour_rgb.htm). Returns a colour constructed from the given R, G, and B channels

### make_color_hsv()

`make_color_hsv(hue: number, saturation: number, value: number): number`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| hue | number | Hue of the colour |
| saturation | number | Saturation of the colour |
| value | number | Value of the colour |

Returns: number

Wraps [`make_colour_hsv`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Colour_And_Alpha/make_colour_hsv.htm). Returns a colour constructed from the given hue, saturation, and value parameters


### merge_color()

`merge_color(col1: number, col2: number, amount: number): number`


Arguments:

| Argument | Type | Description |
| - | - | - | 
| col1 | number | The first colour |
| col1 | number | The second colour |
| amount | number | Amount to merge |

Returns: number

Wraps [`merge_colour`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Colour_And_Alpha/merge_colour.htm)