# GMSprite

`new GMSprite(): GMSprite`;

References a [GameMaker Sprite](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprites.htm)

## Types

### SpeedType

| Field | Constant | Definition |
| - | - | - |
| FramesPerSecond | spritespeed_framespersecond | Frames per second |
| FramesPerGameFrame | spritespeed_framespergameframe | Frames per game frame |

Speed type used by the  sprite

### BoundingBoxMode

| Field | Constant | Definition |
| - | - | - |
| Automatic | bboxmode_automatic | Automatically sized bounding box |
| FullImage | bboxmode_fullimage | Bounding box will use the full width and height of the sprite |
| Manual | bboxmode_manual | The bounding box is set manually |

Bounding box mode used by the sprite

### BoundingBoxKind

| Field | Constant | Definition |
| - | - | - |
| Precise | bboxkind_precise | A precise collision mask that will only cover non-transparent pixels in the sprite |
| Rectangular | bboxkind_rectangular | A non-rotating rectangular mask shape |
| Ellipse | bboxkind_ellipse | An ellliptical mask shape |
| Diamond | bboxkind_diamond | A diamond mask shape |
| Spine | bboxkind_spine | Specific for Spine sprites |

### SpriteNineslice

| Field | Type | Definition |
| - | - | - |
| left | number | Left of center |
| top | number | Top of center |
| right | number | Right of center |
| bottom | number | Bottom of center |
| enabled | number | Whether nineslice is enabled |
| tilemode | number[] | Tiling mode for each segment |

## Variables
### ptr

Type: `string` | `null`

Pointer to the buffer inside the GameMaker runner, or `null` if unset

### static.InternalFunctions

Type: Object

Contains all GameMaker functions called by this class

## Static functions

### init()

`init(): void`

Arguments: N/A

Returns: N//A

Internal setup function, used to collect internal methods. Returns nothing

### from()

`from(name_or_handle: string): GMSprite`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| name_or_handle | string | Intenral sprite resource name or handle |


Returns: returntype

Creates a new GMSprite instance wrapped aroudn a given Sprite handle 


### add()

`add(fname: string,imgnum: number,removeback: boolean,smooth: boolean,xorigin: number,yorigin: number)`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| fname | string | Filename or base64 url to import |
| imgnum | number | Number of subimages in the sprite |
| removeback | boolean | Whether or not to make all pixels with the background colour (bottom-left corner pixel) transparent |
| smooth | boolean | Whether or not to smooth sprite edges |
| xorigin | number | The x-posiiton of the sprites origin |
| yorigin | number | The y-position of the sprites origin |


Returns: GMSprite

Wraps [`sprite_add`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_add.htm)

### add_ext()

`add_ext(fname: string,imgnum: number,xorigin: number,yorigin: number,prefetch: boolean): GMSprite`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| fname | string | Filename or base64 url to import |
| imgnum | number | Number of subimages in the sprite |
| xorigin | number | The x-posiiton of the sprites origin |
| yorigin | number | The y-position of the sprites origin |
| prefetch | boolean | Whether or not to load the sprite into video memory |


Returns: GMSprite

Wraps [`sprite_add_ext`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_add_ext.htm)

### from_surface()

`from_surface(surface: GMSurface,x: number,y: number,width: number,height: number,removeback: boolean,smooth: boolean,xorigin: number,yorigin: number): GMSprite`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| surface | [GMSurface](GMSurface) | Surface to create sprite from |
| x | number | The x-posiiton on the surface to copy from |
| y | number | The y-posiiton on the surface to copy from |
| width | number | Width of the area on the surface to copy |
| height | number | Height of the area on the surface to copy |
| removeback | boolean | Whether or not to make all pixels with the background colour (bottom-left corner pixel) transparent |
| smooth | boolean | Whether or not to smooth sprite edges |
| xorigin | number | The x-posiiton of the sprites origin |
| yorigin | number | The y-position of the sprites origin |


Returns: GMSprite

Wraps [`sprite_create_from_surface`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_create_from_surface.htm)

### create_nineslice()

`create_nineslice(): SpriteNinceslice`

Arguments: N/A

Returns: [SpriteNineslice](GMSprite?id=spritenineslice)

Wraps [`sprite_nineslice_create`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_nineslice_create.htm). Returns a [SpriteNineslice](GMSprite?id=spritenineslice) struct that can be used with [`set_nineslice`](GMSprite?id=setnineslice)

## Methods

### exists()

`exists(): boolean`

Arguments: N/A

Returns: boolean

Wraps [`sprite_exists`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_exists.htm)

### get_name()

`get_name(): string`

Arguments: N/A

Returns: string

Wraps [`sprite_get_name`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Information/sprite_get_name.htm)

### get_number()

`get_number(): number`

Arguments: N/A

Returns: number

Wraps [`sprite_get_number`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Information/sprite_get_number.htm)

### get_speed()

`get_speed(): number`

Arguments: N/A

Returns: number

Wraps [`sprite_get_speed`](https://manual.gamemaker.io/beta/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Information/sprite_get_speed.htm)

### get_speed_type()

`get_speed_type(): SpeedType`

Arguments: N/A

Returns: [SpeedType](GMSprite?id=speedtype)

Wraps [`sprite_get_speed_type`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Information/sprite_get_speed_type.htm)

### get_width()

`get_width(): number`

Arguments: N/A

Returns: number

Wraps [`sprite_get_width`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Information/sprite_get_width.htm)

### get_height()

`get_height(): number`

Arguments: N/A

Returns: number

Wraps [`sprite_get_height`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Information/sprite_get_height.htm)

### get_xoffset()

`get_xoffset(): number`

Arguments: N/A

Returns: number

Wraps [`sprite_get_xoffset`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Information/sprite_get_xoffset.htm)

### get_yoffset()

`get_yoffset(): number`

Arguments: N/A

Returns: number

Wraps [`sprite_get_yoffset`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Information/sprite_get_yoffset.htm)

### delete()

`delete(): boolean`

Arguments: N/A

Returns: boolean

Wraps [`sprite_delete`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_delete.htm). Returns `true` if sprite could be deleted and `false` otherwise

### replace()

`replace(fname: string,imgnum: number,removeback: boolean,smooth: boolean,xorigin: number,yorigin: number): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| fname | string | Filename or base64 url to import |
| imgnum | number | Number of subimages in the sprite |
| removeback | boolean | Whether or not to make all pixels with the background colour (bottom-left corner pixel) transparent |
| smooth | boolean | Whether or not to smooth sprite edges |
| xorigin | number | The x-posiiton of the sprites origin |
| yorigin | number | The y-position of the sprites origin |


Returns: N/A

Wraps [`sprite_replace`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_replace.htm)

### duplicate()

`duplicate(): GMSprite`

Arguments: N/A

Returns: [GMSprite](GMSprite)

Wraps [`sprite_duplicate`](https://manual.gamemaker.io/lts/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_duplicate.htm)

### assign()

`assign(sprite: GMSprite | string)`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| sprite | GMSprite \| string | The sprite to copy data from |


Returns: N/A

Wraps [`sprite_assign`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_assign.htm)

### merge()

`merge(sprite: GMSprite | string): N/A`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| sprite | GMSprite \| string | Sprite to merge into this sprite |


Returns: N/A

Wraps [`sprite_merge`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_merge.htm)

### set_alpha_from_sprite()

`set_alpha_from_sprite(sprite: GMSprite | string): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| sprite | GMSprite \| string | Desc |


Returns: N/A

Wraps [`sprite_set_alpha_from_sprite`]https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_merge.htm

### add_from_surface()

`add_from_surface(surface: GMSurface,x: number,y: number,width: number,height: number,removeback: boolean,smooth: boolean): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| surface | [GMSurface](GMSurface) | Surface to create sprite from |
| x | number | The x-posiiton on the surface to copy from |
| y | number | The y-posiiton on the surface to copy from |
| width | number | Width of the area on the surface to copy |
| height | number | Height of the area on the surface to copy |
| removeback | boolean | Whether or not to make all pixels with the background colour (bottom-left corner pixel) transparent |
| smooth | boolean | Whether or not to smooth sprite edges |


Returns: N/A

Wraps [`sprite_add_from_surface`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_add_from_surface.htm)

### get_bbox_bottom()

`get_bbox_bottom(): number`

Arguments: N/A

Returns: number

Wraps [`sprite_get_bbox_bottom`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Information/sprite_get_bbox_bottom.htm)

### get_bbox_left()

`get_bbox_left(): number`

Arguments: N/A

Returns: number

Wraps [`sprite_get_bbox_left`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Information/sprite_get_bbox_left.htm)

### get_bbox_top()

`get_bbox_top(): number`

Arguments: N/A

Returns: number

Wraps [`sprite_get_bbox_top`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Information/sprite_get_bbox_top.htm)

### get_bbox_right()

`get_bbox_right(): number`

Arguments: N/A

Returns: number

Wraps [`sprite_get_bbox_right`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Information/sprite_get_bbox_right.htm)

### get_bbox_mode()

`get_bbox_mode(): BoundingBoxMode`

Arguments: N/A

Returns: [BoundingBoxMode](GMSprite?id=boundingboxmode)

Wraps [`sprite_get_bbox_mode`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Information/sprite_get_bbox_mode.htm)

### get_convex_hull()

`get_convex_hull(max_points?: number,subimg?: number): number[]`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| max_points? | number | The maximum number of points to return in the array or no maximum if not specified |
| subimg? | number | The subimage of the sprite |


Returns: number[]

Wraps [`get_convex_hull`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Information/sprite_get_convex_hull.htm)

### get_nineslice()

`get_nineslice(): SpriteNIneslice`

Arguments: N/A

Returns: [SpriteNineslice](GMSprite?id=spritenineslice)

Wraps [`sprite_get_nineslice`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Information/sprite_get_nineslice.htm)

### set_nineslice()

`set_nineslice(nineslice: SpriteNineslice): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| nineslice | SpriteNineslice | The Nineslice struct to apply |


Returns: N/A

Wraps [`set_nineslice`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_set_nineslice.htm)

### get_tpe()

`get_tpe(subimage: number): unknown`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| subimage | number | Subimage of the sprite to fetch |


Returns: Texture Page Entry (Unknown)

Wraps [`sprite_get_tpe`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Information/sprite_get_tpe.htm). Haven't tested in GX.Games

### get_texture()

`get_texture(subimage: number): number`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| subimage | number | Subimage of the sprite to fetch |


Returns: number

Wraps [`sprite_get_texture`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Information/sprite_get_texture.htm)

### get_uvs()

`get_uvs(subimage: number): number[]`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| subimage | number | Subimage of the sprite to fetch |


Returns: number[]

Wraps [`sprite_get_uvs`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Information/sprite_get_uvs.htm). Reutrn value is an 8 element array, see GameMaker docs for more information. 

### get_info()

`get_info(): Object`

Arguments: N/A

Returns: Object

Wraps [`sprite_get_info`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Information/sprite_get_info.htm)

### set_collision_mask()

`set_collision_mask(sepmasks: boolean,mode: BoundingBoxMode,left: number,top: number,right: number,bottom: number,kind: BoundingBoxKind,tolerance: number): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| sepmasks | boolean | Whether ro use separate masks per frame or not |
| mode | BoundingBoxMode | Bounding box mode |
| left | number | The minimum x position of the bounding box |
| top | number | The minimum y position of the bounding box |
| right | number | The maximum x position of the bounding box |
| bottom | number | The maximum y position of the bounding box |
| kind | BoundingBoxKind | The kind of mask |
| tolerance | number | Alpha tolerance for handlign transparent pixels |


Returns: N/A

Wraps [`sprite_collision_mask`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_collision_mask.htm)

### set_offset()

`set_offset(x: number,y: number): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| x | number | New x-position of the origin |
| y | number | New y-position of the origin |


Returns: N/A

Wraps [`sprite_set_offset`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_set_offset.htm)

### set_bbox_mode()

`set_bbox_mode(mode: BoundingBoxMode): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| mode | BoundingBoxMode | Bounding box mode to use |


Returns: N/A

Wraps [`sprite_set_bbox_mode`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_set_bbox_mode.htm)

### set_bbox()

`set_bbox(left: number,top: number,right: number,bottom: number): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| left | number | The minimum x position of the bounding box |
| top | number | The minimum y position of the bounding box |
| right | number | The maximum x position of the bounding box |
| bottom | number | The maximum y position of the bounding box |


Returns: N/A

Wraps [`sprite_set_bbox`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_set_bbox.htm)

### set_speed()

`set_speed(speed: number,type: SpeedType): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| speed | number | The speed value to set |
| type | SpeedType | The speed type to use |


Returns: N/A

Wraps `set_speed`

### save()

`save(subimage: number,fname: string): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| subimage | number The subimage to save |
| fname | string | The filename for the saved sprite |


Returns: N/A

Wraps [`sprite_save`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_save.htm)

### save_strip()

`save_strip(fname: string): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| fname | string | The filename for the saved sprite strip |


Returns: returntype

Wraps [`sprite_save_strip`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_save_strip.htm)

### draw()

`draw(subimage: number,x: number,y: number): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| subimage | number | Subimage to draw |
| x | number | The x coordinate to draw the sprite |
| y | number | The y coordinate to draw the sprite |


Returns: N/A

Wraps [`draw_sprite`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_sprite.htm)

### draw_ext()

`draw_ext(subimage: number,x: number,y: number,xscale: number,yscale: number,angle: number,colour: number,alpha: number): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| subimage | number | Subimage to draw |
| x | number | The x coordinate of where to draw the sprite |
| y | number | The y coordinate of where to draw the sprite |
| xscale | number | The xscale to draw the sprite with |
| yscale | number | The yscale to draw the sprite with |
| angle | number | The angle to draw the sprite at |
| colour | number \| [Color](GMColor?id=color) | The colour to blend the sprite with ([Color.White](GMColor?id=Color) to display it normally) |
| alpha | number | The alpha to draw the sprite with |


Returns: N/A

Wraps [`draw_sprite_ext`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_sprite_ext.htm)

### draw_general()

`draw_general(subimage: number,left: number,top: number,width: number,height: number,x: number,y: number,xscale: number,yscale: number,angle: number,col1: number,col2: number,col3: number,col4: number,alpha: number): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| subimage | number | The subimage to draw |
| left | number | The x position on the sprite of the top left corner of the area to draw |
| top | number | The y position on the sprite of the top left corner of the area to draw |
| width | number | The width of the area to draw |
| height | number | The height of the area to draw |
| x | number | The x coordinate of where to draw the sprite |
| y | number | The y coordinate of where to draw the sprite |
| xscale | number | The xscale to draw the sprite with |
| yscale | number | The yscale to draw the sprite with |
| angle | number | The angle to daw the sprite at |
| col1 | number \| [Color](GMColor?id=color) | Colour of the top-left corner |
| col2 | number \| [Color](GMColor?id=color) | Colour of the top-right area |
| col3 | number \| [Color](GMColor?id=color) | Colour of the bottom-right area |
| col4 | number \| [Color](GMColor?id=color) | Colour of the bottom-left area |
| alpha | number | The alpha to draw the sprite with |


Returns: N/A

Wraps [`draw_sprit_general`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_sprite_general.htm)

### draw_part()

`draw_part(subimage: number,left: number,top: number,width: number,height: number,x: number,y: number): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| subimage | number | The subimage to draw |
| left | number | The x position on the sprite of the top left corner of the area to draw |
| top | number | The y position on the sprite of the top left corner of the area to draw |
| width | number | The width of the area to draw |
| height | number | The height of the area to draw |
| x | number | The x coordinate of where to draw the sprite |
| y | number | The y coordinate of where to draw the sprite |


Returns: N/A

Wraps [`draw_sprite_part`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_sprite_part.htm)

### draw_part_ext()

`draw_part_ext(subimage: number,left: number,top: number,width: number,height: number,x: number,y: number,xscale: number,yscale: number,colour: number,alpha: number): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| subimage | number | The subimage to draw |
| left | number | The x position on the sprite of the top left corner of the area to draw |
| top | number | The y position on the sprite of the top left corner of the area to draw |
| width | number | The width of the area to draw |
| height | number | The height of the area to draw |
| x | number | The x coordinate of where to draw the sprite |
| y | number | The y coordinate of where to draw the sprite |
| xscale | number | The xscale to draw the sprite with |
| yscale | number | The yscale to draw the sprite with |
| colour | number \| [Color](GMColor?id=color) | The colour to blend the sprite with ([Color.White](GMColor?id=Color) to display it normally) |
| alpha | number | The alpha to draw the sprite with |


Returns: N/A

Wraps [`draw_sprite_part_ext`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_sprite_part_ext.htm)

### draw_stretched()

`draw_stretched(subimage: number,x: number,y: number,width: number,height: number): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| subimage | number | The subimage to draw |
| x | number | The x coordinate of where to draw the sprite |
| y | number | The y coordinate of where to draw the sprite |
| width | number | The width of the area to draw |
| height | number | The height of the area to draw |


Returns: N/A

Wraps [`draw_sprite_stretched`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_sprite_stretched.htm)

### draw_stretched_ext()

`draw_stretched_ext(subimage: number,x: number,y: number,width: number,height: number,colour: number,alpha: number)`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| subimage | number | The subimage to draw |
| x | number | The x coordinate of where to draw the sprite |
| y | number | The y coordinate of where to draw the sprite |
| width | number | The width of the area to draw |
| height | number | The height of the area to draw |
| colour | number \| [Color](GMColor?id=color) | The colour to blend the sprite with ([Color.White](GMColor?id=Color) to display it normally) |
| alpha | number | The alpha to draw the sprite with |


Returns: N/A

Wraps [`draw_stretched_ext`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_sprite_stretched_ext.htm)

### draw_pos()

`draw_pos(subimage: number,x1: number,y1: number,x2: number,y2: number,x3: number,y3: number,x4: number,y4: number,alpha: number): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| subimage | number | The subimage to draw |
| x1 | number | The first x coordinate |
| y1 | number | The first y coordinate |
| x2 | number | The second x coordinate |
| y2 | number | The second y coordinate |
| x3 | number | The third x coordinate |
| y3 | number | The third y coordinate |
| x4 | number | The fourth x coordinate |
| y4 | number | The fourth y coordinate |
| alpha | number | The alpha to draw at |


Returns: N/A

Wraps [`draw_sprite_pos`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_sprite_pos.htm)

### draw_tiled()

`draw_tiled(subimage: number,x: number,y: number): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| subimage | number | Desc |
| x | number | The x coordinate of where to draw the sprite |
| y | number | The y coordinate of where to draw the sprite |


Returns: N/A

Wraps [`draw_sprite_tiled`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_sprite_tiled.htm)

### draw_tiled_ext()

`draw_tiled_ext(subimage: number,x: number,y: number,xscale: number,yscale: number,colour: number,alpha: number): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| subimage | number | The subimage to draw |
| x | number | The x coordinate of where to draw the sprite |
| y | number | The y coordinate of where to draw the sprite |
| xscale | number | The xscale to draw the sprite with |
| yscale | number | The yscale to draw the sprite with |
| colour | number \| [Color](GMColor?id=color) | The colour to blend the sprite with ([Color.White](GMColor?id=Color) to display it normally) |
| alpha | number | The alpha to draw the sprite with |


Returns: N/A

Wraps [`draw_sprite_tiled_ext`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_sprite_tiled_ext.htm)