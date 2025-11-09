# GMSurface

`new GMSurface(width: number, height: number, format: SurfaceFormat = SurfacerFormat.Default)`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| width | number | Surface width |
| height | number | Surface height |
| format | [SurfaceFormat](GMSurface.md?id=surfaceformat) | Surface format, default: `surface_rgba8unorm` (`SurfaceFormat.Default`) |

## Types

### SurfaceFormat

| Field | Constant | Description |
| - | - | - |
| Default | `surface_rgba8unorm` | 4 colour channels, 8 bits each (the default) |
| R8 | `surface_r8unorm` | Red colour channel, 8 bit value |
| RG8 | `surface_rg8unorm` | Red and Green colour channels, 8 bit values |
| RGBA4 | `surface_rgba4unorm` | 4 colour chanels, 4 bit values |
| RGBA16 | `surface_rgba16float` | 4 colour channels, 16 bit values |
| R16 | `surface_r16float` | Red colour channel, 16 bit value |
| RGBA32 | `surface_rgba32float` | 4 colour channels, 32 bit values |
| R32 | `surface_r32float` | Red colour channel, 32 bit value |

## Variables

### ptr

Type: `string` | `null`

Pointer to the surface inside the GameMaker runner, or `null` if unset

### static.InternalFunctions

Type: Object

Contains all GameMaker functions called by this class

## Static Functions

### get_target()

`get_target(): GMSurface`

Arguments: N/A

Returns: [GMSurface](GMSurface.md)

Wraps [`surface_get_target`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_get_target.htm)

### get_target_ext()

`get_target_ext(render_target: number): GMSurface`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| render_target | number | Render target to check |

Returns: [GMSurface](GMSurface.md)

Wraps [`surface_get_target_ext`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_get_target_ext.htm)

### get_target_depth()

`get_target_depth(): GMSurface`

Arguments: N/A

Returns: [GMSurface](GMSurface.md)

Wraps [`surface_get_target_depth`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_get_target_depth.htm)

### depth_disable()

`depth_disable(disable: boolean): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| disable | boolean | if true, a depth buffer will not be generated for new surfaces |

Returns: N/A

Wraps [`surface_depth_disable`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_depth_disable.htm)

### get_depth_disable()

`get_depth_disable(): boolean`

Arguments: N/A

Returns: boolean

Wraps [`surface_get_depth_disable`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_get_depth_disable.htm)

### format_is_supported()

`format_is_supported(format: SurfaceFormat): boolean`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| format | [SurfaceFormat](GMSurface.md?id=surfaceformat) | Format to check |

Returns: boolean

Wraps [`surface_format_is_supported`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_format_is_supported.htm)

## Methods

### exists()

`exists(): boolean`

Arguments: N/A

Returns: boolean

Wraps [`surface_exists`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_exists.htm)

### resize()

`resize(width: number, height: number): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| width | number | New width for the surface |
| height | number | New height for the surface |

Returns: N/A

Wraps [`surface_resize`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_resize.htm)

### set_target()

`set_target(): boolean`

Arguments: N/A

Returns: boolean

Wraps [`surface_set_target`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_set_target.htm). Sets the drawing target to this surface

### set_target_ext()

`set_target_ext(render_target: number): boolean`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| render_target | number | Render target index to use |

Returns: boolean

Wraps [`surface_set_target_ext`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_set_target_ext.htm)

### reset_target()

`reset_target(): boolean`

Arguments: N/A

Returns: boolean

Wraps [`surface_reset_target`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_reset_target.htm)

### copy()

`copy(x; number, y: number, source: GMSurface): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| x | number | The x position to copy tp |
| y | number | The y position to copy tp |
| source | [GMSurface](GMSurface.md) | The surface to copy from |

Returns: N/A

Wraps [`surface_copy`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_copy.htm)

### copy_part()

`copy_part(x: number, y: number, source: GMSurface, source_x: number, source_y: number, width: number, height: number): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| x | number | The x position to copy to |
| y | number | The y position to copy to |
| source | [GMSurface](GMSurface.md) |  |
| source_x | number | The x position to copy from |
| source_y | number | The y position to copy from |
| width | number | Width of the area to copy from |
| height | number | Height of the area to copy from |

Returns: N/A

Wraps [`surface_copy_part`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_copy_part.htm)

### get_height()

`get_height(): number`

Arguments: N/A

Returns: number

Wraps [`surface_get_height`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_get_height.htm)

### get_width()

`get_width(): number`

Arguments: N/A

Returns: number

Wraps [`surface_get_width`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_get_width.htm)

### get_texture()

`get_texture(): number`

Arguments: N/A

Returns: number

Wraps [`surface_get_texture`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_get_texture.htm)

### get_texture_depth()

`get_texture_depth(): number`

Arguments: N/A

Returns: number

Wraps [`surface_get_texture_depth`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_get_texture_depth.htm)

### has_depth()

`has_depth(): boolean`

Arguments: N/A

Returns: boolean

Wraps [`surface_has_depth`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_has_depth.htm)

### getpixel()

`getpixel(x: number, y: number): number | [number,number,number]`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| x | number | x position on the surface to check |
| y | number | y position on the surface to check |

Returns: number | [number,number,number]

Wraps [`surface_getpixel`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_getpixel.htm) Returns a `number` if the surface foramt is Default, R8, RG8, or RGBA4, or a three-element array of numbers otherwise

### getpixel_ext()

`getpixel_ext(x: number, y: number): number | [number,number,number,number]`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| x | number | x position to check |
| y | number | y position to check |

Returns: number | [number,number,number,number]

Wraps [`surface_getpixel_ext`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_getpixel_ext.htm). Returns a `number` if the surface foramt is Default, R8, RG8, or RGBA4, or a four-element array of numbers otherwise

### get_format()

`get_format(): SurfaceFormat`

Arguments: N/A

Returns: [SurfaceFormat](GMSurface.md?id=surfaceformat)

Wraps [`surface_get_format`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_get_format.htm)

### free()

`free(): void`

Arguments: N/A

Returns: N/A

Wraps [`surface_free`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_free.htm)

### save()

`save(fname: string): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| fname | string | Name of the saved image file |

Returns: N/A

Wraps [`surface_save`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_save.htm)

### save_part()

`save_part(fname: string, x: number, y: number, width: number, height: number): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| fname | string | Name of the saved image file |
| x | number | Starting x position in the surface |
| x | number | Starting x position in the surface |
| width | number | Width of the part to save |
| height | number | Height of the part to save |

Returns: N/A

Wraps [`surface_save_part`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_save_part.htm)

