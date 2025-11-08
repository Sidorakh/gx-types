# GMMap

`new GMMap()`

## Types

### MapKey

Represents a DS Map key (at least those usable form JavaScript), as either a string or number

Type: `string` | `number`


## Variables

### ptr
Type: `string` | `null`

Pointer to the [DS Map](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/DS_Maps.htm) inside the GameMaker runner, or `null` if unset

### static.InternalFunctions

Type: Object

Contains all GameMaker functions called by this class

## Static Functions

### init()

`init(): void`

Arguments: N/A

Returns: N/A

Internal setup function, used to collate internal methods in the InternalFunctions object

### from()

`from(ptr: string): GMMap`

Arguments: 

| Argument | Type | Description |
| - | - | - | 
| ptr | string | DS Map reference |

Returns: [GMMap](GMMap)

Returns a new GMMap instance, wrapped around the given DS Map reference

### read()

`read(string: string, is_legacy: boolean=false)`

Arguments:
| Argument | Type | Description |
| - | - | - | 
| string | string | Encoded map created by `ds_map_save` |
| is_legacy | boolean | Whether the map data is in the legacy format or not |

Returns: [GMMap](GMMap)

Wraps [`ds_map_read`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_read.htm)


### secure_load()

`secure_load(fname: string): GMMap`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| fname | string | File to load the map data from |

Wraps [`ds_map_secure_load`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_secure_load.htm)

### secure_load_buffer()

`secure_load_buffer(buffer: GMBuffer)`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| buffer | [GMBuffer](GMBuffer) | Buffer to load from |

Returns: [GMMap](GMMap)

Wraps [`ds_map_secure_load_buffer`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_secure_load_buffer.htm)

## Methods

### exists()

`exists(key: string): boolean`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| key | string | Map key to check |

Returns: boolean

Wraps [`ds_map_exists`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_exists.htm). Checks if `key` is present in the ds map


### destroy()

`destroy(): void`


Arguments: N/A

Returns: N/A

Wraps [`ds_map_destroy`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_destroy.htm). Deletes the referenced DS Map

### add()

`add(key: MapKey, value: any)`


Arguments:

| Argument | Type | Description |
| - | - | - | 

| key | MapKey | Key to add to the map |
| value | any | Value to set |

Returns; boolean

Wraps [`ds_map_add`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_add.htm)

### clear()

`clear(): void`

Arguments: N/A

Returns: N/A

Wraps [`ds_map_clear`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_clear.htm)


### copy()

`copy(source: GMMap): void`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| source | [GMMap](GMMap) | Map to copy data from |



Wraps [`ds_map_copy`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_copy.htm)


### replace()

`replace(key: string, value: any): boolean`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| key | string | The key to create or update |

| value | any | The value to set |

### delete()

`delete(key: string): void`


Arguments:

| Argument | Type | Description |
| - | - | - | 
| key | string | The key to delete |

Returns: N/A

Wraps [`ds_map_delete`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_delete.htm). Deletes the given key from the DS map. 


### empty()

`empty(): boolean`


Arguments: N/A

Returns: boolean

Wraps [`ds_map_empty`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_empty.htm). Returns `true` if the map is empty and `false` otherwise 

### size()

`size(): number`

Arguments: N/A

Returns: number

Wraps [`ds_map_size`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_size.htm). Returns the number of keys stored in the Map. 

### find_first()

`find_first(): MapKey | undefined`

Arguments: N/A

Returns: MapKey | undefined

Wraps [`ds_map_find_first`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_find_first.htm). Returns the first key stored in the ds map, or `undefined` if the map is empty

### find_last()

`find_last(): MapKey | undefined`

Arguments: N/A

Returns: MapKey | undefined

Wraps [`ds_map_find_last`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_find_last.htm). Returns the last key stored in the ds map, or `undefined` if the map is empty

### find_next()

`find_next(key: MapKey): MapKey`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| key | MapKey | The previous (or first) key in the map |

Returns: MapKey | undefined

Wraps [`ds_map_find_next`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_find_next.htm). Returns the enxt stored key or `undefined` if there are no more keys

### find_previous()

`find_previous(key: MapKey): MapKey`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| key | MapKey | The next (or last) key in the map |

Returns: MapKey | undefined

Wraps [`ds_map_find_previous`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_find_previous.htm). Returns the enxt stored key or `undefined` if there are no more keys


### find_value()

`find_value(key: MapKey)`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| key | MapKey | The key to find the value of |

Returns: any

Wraps [`ds_map_find_value`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_find_value.htm)

### keys_to_array()

`keys_to_array(): MapKey[]`

Arguments: N/A

Returns: MapKey[]

Wraps [`ds_map_keys_to_array`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_keys_to_array.htm)

### values_to_array()

`values_to_array(): any[]`

Arguments: N/A

Returns: any[]

Wraps [`ds_map_values_to_array`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_values_to_array.htm)

### set()

`set(key: MapKey, value: any): void`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| key | MapKey | The key to set the value of |
| value | any | Value to set the key to |

Returns: N/A

Wraps [`ds_map_set`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_set.htm)

### write()

`write(): string`

Arguments: N/A

Returns: string

Wraps [`ds_map_write`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_write.htm)


### secure_save()

`secure_save(fname: string): void`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| fname | string | name of output file |

Returns: N/A

Wraps [`ds_map_secure_save`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_secure_save.htm)

### secure_save_buffer()

`secure_save_buffer(): GMBuffer`

Arguments: N/A

Returns: [GMBuffer](GMBuffer)

Wraps [`ds_map_secure_save_buffer`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_secure_save_buffer.htm)

### add_list()

`add_list(key: MapKey, list: GMList): void`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| key | MapKey | The key to add the list to |
| key | [GMList](GMList) | The DS List |

Returns: N/A

Wraps [`ds_list_add_list`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_add_list.htm)

### add_map()

`add_map(key: MapKey, map: GMMap)`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| key | MapKey | The key to add the map to |
| map | [GMMap](GMMap) | The DS Map to add |

Returns: N/A

Wraps [`ds_map_add_map`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_add_map.htm)

### replace_list()

`replace_list(key: MapKey, list: GMList): void`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| key | MapKey | The key to replace the list in |
| key | [GMList](GMList) | The DS List |

Returns: N/A

Wraps [`ds_map_replace_list`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_replace_list.htm)

### replace_map()

`replace_map(key: MapKey, list: GMList): void`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| key | MapKey | The key to replace the map in |
| key | [GMMap](GMMap) | The DS Map |

Returns: N/A

Wraps [`ds_map_replace_map`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_replace_map.htm)

### is_list() 

`is_list(key: MapKey): boolean`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| key | MapKey | Key to check |

Returns: boolean

Wraps [`ds_map_is_list`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_is_list.htm)

### is_map() 

`is_map(key: MapKey): boolean`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| key | MapKey | Key to check |

Returns: boolean

Wraps [`ds_map_is_map`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_is_map.htm)
