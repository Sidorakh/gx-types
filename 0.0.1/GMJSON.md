# GMJSON

This is a class of static functions for dealing with JSON 

## Functions


### ds.json_stringify()

`ds.json_stringify(ds: GMList | GMMap): string`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| ds | [GMList](GMList) \| [GMMap](GMMap) | List or Map to encode |

Returns: string

Wraps [`json_encode`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/json_encode.htm)


### ds.json_parse()

`ds.json_parse(string: string): GMMap`

Arguments:

| Argument | Type | Description |
| - | - | - |
| string | string | JSON string to decode |

Returns: [GMMap](GMMap)

Wraps [`json_decode`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/json_decode.htm)

