# GMList

`new GMList()`

## Variables

### ptr

Type: `string` | `null`

Pointer to the [DS List](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Lists/DS_Lists.htm) inside the GameMaker runner, or `null` if unset

### static.InternalFunctions

Type: Object

Contains all GameMaker functions called by this class

## Static Functions

### init()

`init(): void`

Arguments: N/A

Returns: [GMList](GMList)

### read()

`read(string: string, legacy: booelan = false): GMList`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| string | string | String to read from |
| legacy | boolean | Whether or not the string is in the legacy format (default: false) |

Returns: [GMList](GMList)

Wraps `ds_list_read`

## Methods

### destroy()

`destroy(): void`

Arguments: N/A

Returns: N/A

Wraps `ds_list_destroy`

### clear()

`clear(): void`

Arguments: N/A

Returns: N/A

Wraps `ds_list_clear`

### empty()

`empty(): boolean`

Arguments: N/A

Returns: boolean

Wraps `ds_list_empty`

### size()

`size(): number`

Arguments: N/A

Returns: number

Wraps `ds_list_size`

### add()

`add(value: any): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| value | any | Value to add to the list |

Returns: N/A

Wraps `ds_list_add`, lets you add a value to the DS List

### set()

`set(index: number, value: any): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| index | number | Index to set |
| value | any | Value to set the index to |

Returns: returntype

desc for set

### delete()

`delete(): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| index | number | Index to delete from the DS List |

Returns: N/A

Wraps `ds_list_delete`. Removes the value at position `index` from the list

### find_index()

`find_index(value: number): number`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| value | any | Value to find the index of |

Returns: number

Wraps `ds_list_find_index`, returns the index of `value` in the list, or `-1` if not found

### find_value()

`find_value(index: number): any`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| index | number | Index to fetcht he value of |

Returns: any

Wraps `ds_list_find_value`. Returns the value found at the specified index in the list

### insert()

`insert(index: number, value: any): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| index | number | Index to insert the value at |
| value | any | Value to insert into the list |

Returns: N/A

Wraps `ds_list_insert`

### replace()

`replace(index: number, value: any): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| index | number | Index to replace the value at |
| value | any | Value to replace at the specified index |

Returns: N/A

Wraps `ds_list_replace`

### shuffle()

`shuffle(): void`

Arguments: N/A

Returns: N/A

Wraps `ds_list_shuffle`

### sort()

`sort(ascending: boolean): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| ascending | boolean | Whether to sort the list in ascending order (true) or descending (false) |

Returns: N/A

Wraps `ds_list_sort`. Sorts the List in place. 

### copy()

`copy(source: GMList): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| source | [GMList](GMList) | The list to copy data from |

Returns: N/A

Wraps `ds_list_copy`, the calling list is the destination

### write()

`write(): string`

Arguments: N/A

Returns: string

Wraps `ds_list_write`, returns an encoded list as a string

### mark_as_list()

`mark_as_list(): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| index | number | Position to mark as a DS List |

Returns: N/A

Wraps `ds_list_mark_as_list`

### mark_as_map()

`mark_as_map(): void`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| index | number | Position to mark as a DS Map |

Returns: N/A

Wraps `ds_list_mark_as_map`

### is_list()

`is_list(): boolean`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| index | number | Position to check |

Returns: boolean

Wraps `ds_map_is_list`

### is_map()

`is_map(): boolean`

Arguments: 

| Argument | Type | Description |
| - | - | - |
| index | number | Position to check |

Returns: boolean

Wraps `ds_map_is_map`

