# GMAssets

This is a class of static functions for dealing with assets

## Types

### AssetType

| Field | Constant | Definition |
| - | - | - |
| Unknown | asset_unknown | An asset that does not exist or is not a recognised type |
| Sprite | asset_sprite | A sprite asset |
| Object | asset_object | An object asset |
| Script | asset_script | A script asset |
| Room | asset_room | A room asset |
| Path | asset_path | A path asset |
| Sound | asset_sound | A sound asset |
| Tileset | asset_tileset | A tileset asset |
| Timeline | asset_timeline | A timeline asset |
| Font | asset_font | A font asset |
| Shader | asset_shader | A shader asset |
| Sequence | asset_sequence | A sequence asset |
| AnimationCurve | asset_animationcurve | An animation curve asset |
| ParticleSystem | asset_particlesystem | A particle system asset |

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

### get_index()

`get_index(): string`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| name | string | Name of asset to fetch |

Returns: string

Wraps [`asset_get_index`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Assets_And_Tags/asset_get_index.htm)

### get_type()

`get_type(name_or_ref: string): AssetType`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| name_or_ref | string | Name or reference of asset to check type of |

Returns: [AssetType](GMAsset?id=assettype)

Wraps [`asset_get_type`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Assets_And_Tags/asset_get_type.htm)

### tag_get_asset_ids()

`tag_get_asset_ids(tag: string|string[], type: AssetType): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| tag | string \| string[] | Tag or tag list |
| type | [AssetType](GMAssets?id=assettype) | Type of asset to fetch |

Returns: string[]

Wraps [`tag_get_asset_ids`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Assets_And_Tags/tag_get_asset_ids.htm)

### tag_get_assets()

`tag_get_assets(tag: string | string[]): string[]`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| tag | string \| string[] | Tag or list of tags to check |

Returns: string[]

Wraps `tag_get_assets`. Returns an array of name sof all assets found with at least one matching tag

### get_ids()

`get_ids(type: AssetType): string[]`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| type | [AssetType](GMAssets?id=assettype) | Type of asset to list |

Returns: string[]

Wraps `asset_get_ids`. Retruns an array of asset references. 

### get_tags()

`get_tags(ref: string, type?: AssetType): string[]`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| ref | string | Asset name or reference |
| type | [AssetType](GMAssets?id=assettype) \| undefined | (Optional) Type of asset |


Returns: string[]

Wraps [`asset_get_tags`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Assets_And_Tags/asset_get_tags.htm). Returns the tags applied to the given asset. Asset type is only required if the `ref` argument is an asset number, and not an asset reference or name

### add_tags()

`add_tags(ref: string, tags: string | string[], type?: AssetType): boolean`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| ref | string | Asset name or reference |
| tags | string \| string[] | A single tag or an array of tags to apply |
| type | [AssetType](GMAssets?id=assettype) \| undefined | (Optional) Type of asset |

Returns: boolean

Wraps [`asset_add_tags`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Assets_And_Tags/asset_add_tags.htm)

### remove_tags()

`remove_tags(): boolean`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| ref | string | Asset name or reference |
| tags | string \| string[] | A single tag or an array of tags to remove |
| type | [AssetType](GMAssets?id=assettype) \| undefined | (Optional) Type of asset |

Returns: boolean

Wraps [`asset_remove_tags`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Assets_And_Tags/asset_remove_tags.htm)

### has_tags()

`has_tags(ref: string, tags: string | string[], type?: AssetType): boolean`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| ref | string | Asset name or reference |
| tags | string \| string[] | A single tag or array of tags to check |
| type | [AssetType](GMAssets?id=assettype) | (Optional) Type of asset |

Returns: boolean

Wraps [`asset_has_tags`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Assets_And_Tags/asset_has_tags.htm)

### has_any_tag()

`has_any_tag(ref: string, tags: string | string[], type?: AssetType): boolean`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| ref | string | Asset name or reference |
| tags | string \| string[] | A single tag or array of tags to check |
| type | [AssetType](GMAssets?id=assettype) | (Optional) Type of asset |

Returns: boolean

Wraps [`asset_has_any_tag`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Assets_And_Tags/asset_has_any_tag.htm)

### clear_tags()

`clear_tags(ref: string, type?: AssetType): boolean`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| ref | string | Asset name or reference |
| type | [AssetType](GMAssets?id=assettype) | (Optional) Type of asset |

Returns: boolean

Wraps [`asset_clear_tags`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Assets_And_Tags/asset_clear_tags.htm)


