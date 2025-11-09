# GMDraw

This is a class of static functions for dealing with drawing

## Types

## Variables

### static.InternalFunctions

Type: Object

Contains all GameMaker functions called by this class

## Static Functions

### init()

`init(): void`

Arguments: N/A

Returns: N/A

Internal setup function, used to collate internal methods in the InternalFunctions object

### arrow()

`arrow(x1: number, y1: number, x2: number, y2: number, size: number): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| x1 | number | x-coordinate for the start of the line |
| y1 | number | y-coordinate for the start of the line | 
| x2 | number | x-coordinate for the end of the line |
| y2 | number | y-coordinate for the end of the line |
| size | number | Length of the arrow in pixels |

Returns: N/A

Wraps [`draw_arrow`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_arrow.htm)

### circle()

`circle(x: number, y: number, radius: number, outline: boolean): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| x | number | The x-coordinate for the circle |
| y | number | The y-coordinate for the circle |
| radius | number | The circles radius |
| outline | boolean | Whether the circle is an outline (true) or drawn filled (false) |

Returns: N/A

Wraps [`draw_circle`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_circle.htm)

### circle_color()

`circle_color(x: number, y: number, radius: number, col1: number, col2: number, outline: boolean): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| x | number | The x-coordinate for the circle |
| y | number | The y-coordinate for the circle |
| radius | number | The circles radius |
| col1 | number | Colour at the centre of the circle |
| col2 | number | Colour at the edge fo the circle |
| outline | boolean | Whether the circle is an outline (true) or drawn filled (false) |

Returns: N/A

Wraps [`draw_circle_colour`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_circle_colour.htm)

### ellipse()

`ellipse(x1: number, y1: number, x2: number, y2: number, outline: boolean): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| x1 | number | The x-coordinate of the left of the ellipse |
| y1 | number | The y-coordinate of the top of the ellipse |
| x2 | number | The x-coordinate of the right of the ellipse |
| y2 | number | The y-coordinate of the bottom of the ellipse |
| outline | boolean | Whether the ellipse is an outline (true) or drawn filled (False) |

Returns: N/A

Wraps [`draw_ellipse`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_ellipse.htm)

### ellipse_color()

`ellipse_color(x1: number, y1: number, x2: number, y2: number, col1: number, col2: number, outline: boolean): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| x1 | number | The x-coordinate of the left of the ellipse |
| y1 | number | The y-coordinate of the top of the ellipse |
| x2 | number | The x-coordinate of the right of the ellipse |
| y2 | number | The y-coordinate of the bottom of the ellipse |
| col1 | number | Colour of the centre |
| col2 | number | Colour of the edge |
| outline | boolean | Whether the ellipse is an outline (true) or drawn filled (false) |

Returns: N/A

Wraps [`draw_ellipse_color`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_ellipse_colour.htm)

### line()

`line(x1: number, y1: number, x2: number, y2: number): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| x1 | number | The x-coordinate of the start of the line |
| y1 | number | The y-coordinate of the start of the line |
| x2 | number | The x-coordinate of the end of the line |
| y2 | number | The y-coordinate of the end of the line |

Returns: N/A

Wraps `draw_line`

### line_color()

`line_color(x1: number, y1: number, x2: number, y2: number, col1: number, col2: number): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| x1 | number | The x-coordinate of the start of the line |
| y1 | number | The y-coordinate of the start of the line |
| x2 | number | The x-coordinate of the end of the line |
| y2 | number | The y-coordinate of the end of the line |
| col1 | number | Colour for the start of the line |
| col2 | number | Colour for the end of the line |

Returns: N/A

Wraps [`draw_line_colour`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_line_colour.htm)

### line_width()

`line_width(x1: number, y1: number, x2: number, y2: number, width: number): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| x1 | number | The x-coordinate of the start of the line |
| y1 | number | The y-coordinate of the start of the line |
| x2 | number | The x-coordinate of the end of the line |
| x2 | number | The y-coordinate of the end of the line |
| width | number | The width of the line in pixels |

Returns: N/A

Wraps [`draw_line_width`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_line_width.htm)

### line_width_color()

`line_width_color(x1: number, y1: number, x2: number, y2: number, width: number, col1: number, col2: number): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| x1 | number | The x-coordinate of the start of the line |
| y1 | number | The y-coordinate of the start of the line |
| x2 | number | The x-coordinate of the end of the line |
| y2 | number | The y-coordinate of the end of the line |
| col1 | number | Colour for the start of the line |
| col2 | number | Colour for the end of the line |
| width | number | The width of the line in pixels |

Returns: returntype

Wraps [`draw_line_width_colour`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_line_width_colour.htm)

### point()

`point(x: number,y: number): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| x | number | The x-coordinate of the point |
| y | number | The y-coordinate of the point |

Returns: N/A

Wraps [`draw_point`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_point.htm)

### point_color()

`point_color(x: number, y: number, col: number): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| x | number | The x-coordinate of the point |
| y | number | The y-coordinate of the point |
| col | number | The colour of the point |

Returns: N/A

Wraps [`draw_point_colour`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_point_colour.htm)

### rectangle()

`rectangle(x1: number, y1: number, x2: number, y2: number, outline: boolean): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| x1 | number | The x-coordinate for the top-left corner |
| y1 | number | The y-coordinate for the top-left corner |
| x2 | number | The x-coordinate for the bottom-right corner |
| y2 | number | The y-coordinate for the bottom-right corner |
| outline | boolean | Whether the rectangle is drawn as an outline (true) or drawn filled (false) |

Returns: N/A

Wraps [`draw_rectangle`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_rectangle.htm)

### rectangle_color()

`rectangle_color(x1: number, y1: number, x2: number, y2: number, col1: number, col2: number, col3: number, col4: number, outline: boolean): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| x1 | number | The x-coordinate for the top-left corner |
| y1 | number | The y-coordinate for the top-left corner |
| x2 | number | The x-coordinate for the bottom-right corner |
| y2 | number | The y-coordinate for the bottom-right corner |
| col1 | number | Colour for the top-left corner |
| col2 | number | Colour for the top-right corner |
| col3 | number | Colour for the bottom-right corner |
| col4 | number | Colour for the bottom-left corner |
| outline | boolean | Whether the rectangle is drawn as an outline (true) or drawn filled (false) |

Returns: N/A

Wraps [`draw_rectangle_colour`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_rectangle_colour.htm)

### roundrect()

`roundrect(x1: number, y1: number, x2: number, y2: number, outline: boolean): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| x1 | number | x-coordinate for the top-left corner |
| y1 | number | y-coordinate for the top-left corner |
| x2 | number | x-coordinate for the bottom-right corner |
| y2 | number | y-coordinate for the bottom-right corner |
| outline | boolean | Whether the rounded rectangle is drawn as an outline (true) or drawn filled (false) |


Returns: N/A

Wraps [`draw_roundrect`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_roundrect.htm)

### roundrect_color()

`roundrect_color(x1: number, y1: number, x2: number, y2: number, col1: number, col2: number, outline: boolean): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| x1 | number | x-coordinate for the top-left corner |
| y1 | number | y-coordinate for the top-left corner |
| x2 | number | x-coordinate for the bottom-right corner |
| y2 | number | y-coordinate for the bottom-right corner |
| col1 | number | The centre colour |
| col2 | number | The outside edge colour |
| outline | boolean | Whether the rounded rectangle is drawn as an outline (true) or drawn filled (false) |

Returns: returntype

Wraps [`draw_roundrect_colour`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_roundrect_colour.htm)

### roundrect_ext()

`roundrect_ext(x1:number, y1: number, x2: number, y2: number, x_radius: number, y_radius: number, outline: boolean): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| x1 | number | x-coordinate for the top-left corner |
| y1 | number | y-coordinate for the top-left corner |
| x2 | number | x-coordinate for the bottom-right corner |
| y2 | number | y-coordinate for the bottom-right corner |
| x_radius | number | Corner radius on the x-axis |
| y_radius | number | Corner radius on the y-axis |
| outline | boolean | Whether the rounded rectangle is drawn as an outline (true) or drawn filled (false) |

Returns: N/A

Wraps [`draw_roundrect_ext`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_roundrect_ext.htm)

### roundrect_color_ext()

`roundrect_color_ext(x1:number, y1: number, x2: number, y2: number, x_radius: number, y_radius: number, col1: number, col2: number, outline: boolean): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| x1 | number | x-coordinate for the top-left corner |
| y1 | number | y-coordinate for the top-left corner |
| x2 | number | x-coordinate for the bottom-right corner |
| y2 | number | y-coordinate for the bottom-right corner |
| x_radius | number | Corner radius on the x-axis |
| y_radius | number | Corner radius on the y-axis |
| col1 | number | The centre colour |
| col2 | number | The outside edge colour |
| outline | boolean | Whether the rounded rectangle is drawn as an outline (true) or drawn filled (false) |

Returns: N/A

Wraps [`draw_roundrect_colour_ext`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_roundrect_colour_ext.htm)

### triangle()

`triangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, outline: boolean): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| x1 | number | The x-coordinate of the triangles first corner |
| y1 | number | The y-coordinate of the triangles first corner |
| x2 | number | The x-coordinate of the triangles second corner |
| y2 | number | The y-coordinate of the triangles second corner |
| x3 | number | The x-coordinate of the triangles third corner |
| y3 | number | The y-coordinate of the triangles third corner |
| outline | boolean | Whether the triangle is drawn as an outline (true) or filled (false) |

Returns: N/A

Wraps [`draw_triangle`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_triangle.htm)

### triangle_color()

`triangle_color(): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| x1 | number | The x-coordinate of the triangles first corner |
| y1 | number | The y-coordinate of the triangles first corner |
| x2 | number | The x-coordinate of the triangles second corner |
| y2 | number | The y-coordinate of the triangles second corner |
| x3 | number | The x-coordinate of the triangles third corner |
| y3 | number | The y-coordinate of the triangles third corner |
| col1 | number | The colour for the triangles first corner |
| col2 | number | The colour for the triangles first corner |
| col3 | number | The colour for the triangles first corner |
| outline | boolean | Whether the triangle is drawn as an outline (true) or filled (false) |

Returns: N/A

Wraps [`draw_triangle_colour`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Basic_Forms/draw_triangle_colour.htm)

### clear()

`clear(col: number): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| col | number | Colour to clear the screen with |

Returns: N/A

Wraps [`draw_clear`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Colour_And_Alpha/draw_clear.htm)

### clear_alpha()

`clear_alpha(): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| col | number | Colour to clear the screen with |
| alpha | number | Transparency of the colour |

Returns: N/A

Wraps [`draw_clear_alpha`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Colour_And_Alpha/draw_clear_alpha.htm)

### set_alpha()

`set_alpha(alpha): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| alpha | number | Alpha to set |

Returns: N/A

Wraps [`draw_set_alpha`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Colour_And_Alpha/draw_set_alpha.htm)

### set_color()

`set_color(col: number): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| col | number | Colour to set |

Returns: returntype

Wraps [`draw_set_colour`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Colour_And_Alpha/draw_set_colour.htm)

### getpixel()

`getpixel(x: number, y: number): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| x | number | The x-coordinate of the pixel to check |
| y | number | The y-coordinate of the pixel to check |

Returns: number

Wraps [`draw_getpixel`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Colour_And_Alpha/draw_getpixel.htm)

### getpixel_ext()

`getpixel_ext(x: number, y: number): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| x | number | The x-coordinate of the pixel to check |
| y | number | The y-coordinate of the pixel to check |

Returns: N/A

Wraps [`draw_getpixel_ext`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Colour_And_Alpha/draw_getpixel_ext.htm)

### get_colour()

`get_colour(): number`

Arguments: N/A

Returns: number

Wraps [`draw_get_colour`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Colour_And_Alpha/draw_get_colour.htm)

### get_alpha()

`get_alpha(): number`

Arguments: N/A

Returns: number

Wraps [`draw_get_alpha`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Colour_And_Alpha/draw_get_alpha.htm)


