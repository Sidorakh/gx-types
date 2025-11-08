# GMBuffer

`new GMBuffer(size: number, type: BufferType, alignment: number)`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| size | number | Size of buffer to create |
| type | [BufferType](GMBuffer?id=buffertype) | Type of buffer to create |
| alignment | number | Alignment to use for this buffer |

References a [GameMaker Buffer](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/Buffers.htm)

## Types

### BufferType

| Field | Constant| Definition |
| - | - | - |
| Fixed | buffer_fixed | A fixed buffer |
| Grow | buffer_grow | A grow buffer |
| Wrap | buffer_wrap | A wrap buffer |
| Fast | buffer_fast | A fast buffer |

For more information, view the table on the `buffer_create` page [here](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_create.htm)

### DataType
| Field | Constant | Definition |
| - | - | - |
| U8 | buffer_u8 | Unsigned 8-bit integer |
| S8 | buffer_s8 | Signed 8-bit integer |
| U16 | buffer_u16 | Unsigned 16-bit integer |
| S16 | buffer_s16 | Signed 16-bit integer |
| U32 | buffer_u32 | Unsigned 32-bit integer |
| S32 | buffer_s32 | Signed 32-bit integer |
| U64 | buffer_u64 | Unsigned 64-bit integer |
| F16 | buffer_f16 | 16-bit floating point value |
| F32 | buffer_f32 | 32-bit floating point value |
| F64 | buffer_f64 | 64-bit floating point value |
| Bool | buffer_bool | 8-bit value that will only ever be 0 or 1 |
| String | buffer_string | A null-terminated string |
| Text | buffer_text | A string without a null terminator |

For more information, view the table on the `buffer_write` page [here](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_write.htm)

### SeekType
| Field | Constant | Definition |
| - | - | - |
| Start | buffer_seek_start | Start of the buffer |
| Relative | buffer_seek_relative | Relative to curent head position |
| End | buffer_seek_end | End of the buffer |

For more information, view the table on the `buffer_seek` page [here](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_seek.htm)

---

## Variables

### ptr

Type: `string` | `null`

Pointer to the buffer inside the GameMaker runner, or `null` if unset

### static.InternalFunctions
Type: Object

Contains all GameMaker functions called by this class

---

## Static functions


### init()

`init(): void`

Arguments: N/A

Internal setup function, used to collect internal methods. Returns nothing

### from()

`from(buffer: string): GMBuffer`

Arguments:
| Argument | Type | Description |
| - | - | - | 
| buffer | string | Buffer reference |

Returns; GMBuffer

Returns a new GMBuffer wrapped around the given GameMaker Buffer reference

### from_vertex_buffer()

`from_vertex_buffer(vbuff: string, type: BufferType, alignment: number): GMBuffer`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| vbuff | string | Vertex buffer pointer |
| type | [BufferType](GMBuffer?id=buffertype) | Type of buffer to create |
| alignment | number | Buffer alignment |

Returns: GMBuffer

Wraps [buffer_create_from_vertex_buffer](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_create_from_vertex_buffer.htm). `vbuff` is a vertex buffer pointer (GameMaker stringifies these). Returns a new GMBuffer

### from_vertex_buffer_ext

`from_vertex_buffer_ext(vbuff: string, type: BufferType, alignment: number, start_vertex: number, num_vertices: number): GMBuffer`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| vbuff | string | Vertex buffer pointer |
| type | [BufferType](GMBuffer?id=buffertype) | Type of buffer to create |
| alignment | number | Buffer alignment |
| start_vertex | number | Starting vertex |
| num_vertices | number | Number of vertices to copy |

Wraps [buffer_create_from_vertex_buffer](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_create_from_vertex_buffer_ext.htm). `vbuff` is a vertex buffer pointer (GameMaker stringifies these). Returns a new GMBuffer

### load()

`load(fname: string): GMBuffer`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| fname | string | Name of file  to load |

Wraps [buffer_load](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_load.htm). Returns a new GMBuffer

### base64_decode()

`base64_decode(string: string): GMBuffer`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| string | string | base64 string to decode |

Wraps [buffer_base64_decode](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_base64_decode.htm). Returns a new GMBuffer

---

## Methods

### exists()

`exists(): boolean`

Arguments: N/A

Returns: boolean

Wraps [`buffer_exists`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_exists.htm). Returns whether or not the Buffer this instance points to exists. Will return `false` if either the `ptr` field is `null`


### delete()

`delete(): void`

Arguments: N/A

Returns: N/A

Wraps [`buffer_delete`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_delete.htm). Deletes the buffer the GMBuffer instance points to


### read()

`read(type: DataType): string | number`

Arguments: 

| Argument | Type | Description |
| - | - | - | 
| type | [DataType](GMBuffer?id=datatype) | Type of data to read |

Returns: string or number

Wraps [`buffer_read`](https://manual.gamemaker.io/lts/en/GameMaker_Language/GML_Reference/Buffers/buffer_read.htm). Return value depends on `type`, returns a string for `DataType.Text` or `DataType.String`, and a number otherwise


### write()

`write(type: DataType, data: string | number): void`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| type | DataType | Type of data to write |
| data | number \| string | Data to write to buffer |

Returns: N/A

Wraps [`buffer_write`](https://manual.gamemaker.io/lts/en/GameMaker_Language/GML_Reference/Buffers/buffer_write.htm). Data argument should be a string for `DataType.Text` or `DataType.String`, and a number otherwise

### fill()

`fill(offset: number, type: DataType, value: string | number, size: number): void`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| offset | number | Position to start writing in the buffer |
| type | DataType | Type of data to write |
| data | string \| number | Data to write |

Wraps [`buffer_fill`](https://manual.gamemaker.io/lts/en/GameMaker_Language/GML_Reference/Buffers/buffer_fill.htm). Data argument should be a string for `DataType.Text` or `DataType.String`, and a number otherwise

### seek()

`seek(type: SeekType, offset: number): void`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| type | [SeekType](GMBuffer?id=seektype) | Base seek position |
| offset | number | Offset value |

Wraps [`buffer_seek`](https://manual.gamemaker.io/lts/en/GameMaker_Language/GML_Reference/Buffers/buffer_seek.htm). Sets buffer read/write position

### tell()

`tell(): number`

Arguments: N/A

Returns: number

Wraps [`buffer_tell`](https://manual.gamemaker.io/lts/en/GameMaker_Language/GML_Reference/Buffers/buffer_tell.htm). Returns buffer read/write position 

### peek()

`peek(offset: number, type: DataType): string | number`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| offset | number | Position to read from in the buffer |
| type | [DataType](GMBuffer?id=datatype) | Type of data to read from the buffer |

Returns: number | string

Wraps [`buffer_peek`](https://manual.gamemaker.io/lts/en/GameMaker_Language/GML_Reference/Buffers/buffer_peek.htm). Return value depends on `type`, will be a string for `DataType.Text` and `DataType.String`, and a number otherwise


### poke()

`poke(offset: number, type: DataType, data: string | number): void`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| offset | number | Position to write to in the buffer |
| type | [DataType](GMBuffer?id=datatype) | Type of data to write |
| data | string \| number | Data to write to buffer |

Returns: N/A

Wraps [`buffer_poke`](https://manual.gamemaker.io/lts/en/GameMaker_Language/GML_Reference/Buffers/buffer_poke.htm). `data` argument type depends on `type` -  should be a string for `DataType.Text` or `DataType.String`, and a number otherwise

### save()

`save(fname: string): void`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| fname | string | Name of file to save as |

Returns: N/A

Wraps [`buffer_save`](https://manual.gamemaker.io/lts/en/GameMaker_Language/GML_Reference/Buffers/buffer_save.htm)


### save_ext()

`save_ext(fname: string, offset: number, size: number): void`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| fname | string | Name of file to save as |
| offset | number | Offset in buffer to save from |
| size | number | Number of bytes to save |

Returns: N/A

Wraps [`buffer_save_ext`](https://manual.gamemaker.io/lts/en/GameMaker_Language/GML_Reference/Buffers/buffer_save_ext.htm)



### save_async()

`save_async(fname: string, offset: number, size: number): number`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| fname | string | Name of file to save as |
| offset | number | Offset in bytes to save from |
| size | number | Number of bytes to save |

Returns: N/A

Wraps [`buffer_save_async`](https://manual.gamemaker.io/lts/en/GameMaker_Language/GML_Reference/Buffers/buffer_save_async.htm)


### load_ext()

`load_ext(fname: string, offset: number)`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| fname | string | Name of file to load from |
| offset | number | Ofset in the file to load from |

Returns: N/A

Wraps [`buffer_load_ext`](https://manual.gamemaker.io/lts/en/GameMaker_Language/GML_Reference/Buffers/buffer_load_ext.htm)

### load_async()

`load_async(fname: string, source_offset: number, size: number): void`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| fname | string | Name of file to load |
| offset | number | Position in file to start loading from |
| size | number | Size of data to load | 

Returns: number

Wraps [`buffer_load_async`](https://manual.gamemaker.io/lts/en/GameMaker_Language/GML_Reference/Buffers/buffer_load_async.htm). Reutrns an Async Request ID (a number)

### load_partial()

`load_partial(fname: string, source_offset: number, size: number, dest_offset: number): void`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| fname | string | Name of file to load |
| source_offset | number | Position in file to start loading from |
| size | number | Size of data to load |
| dest_offset | number | Position in buffer to start copying data to |

Returns: N/A

Wraps [`buffer_load_partial`](https://manual.gamemaker.io/lts/en/GameMaker_Language/GML_Reference/Buffers/buffer_load_partial.htm)

### compress()

`compress(offset,size): GMBuffer`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| offset | number | Start position of data to compress |
| size | number | Length of data to compress |

Returns: GMBUffer

Wraps [`buffer_compress`](https://manual.gamemaker.io/lts/en/GameMaker_Language/GML_Reference/Buffers/buffer_compress.htm), returns a wrapped GMBuffer instance

### decompress()

`decompress(): GMBuffer`

Arguments: N/A

Wraps [`buffer_decompress`](https://manual.gamemaker.io/lts/en/GameMaker_Language/GML_Reference/Buffers/buffer_decompress.htm). Attempts to decompress the GMBuffer instance and returns a wrapped GMBuffer instance. 

### async_group_begin
Not yet implemented

### async_group_option
Not yet implemented

### async_group_end
Not yet implemented

### copy()

`copy(source_buffer: GMBuffer, source_offset: number, size: number, dest_offset: number): void`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| source_buffer | GMBuffer | Buffer to copy from |
| source_offset | number | Position to start copying from |
| size | number | Length of data to copy |
| dest_offset | number | Position in target buffer to copy data to |

Returns: N/A

Wraps [`buffer_copy`](https://manual.gamemaker.io/lts/en/GameMaker_Language/GML_Reference/Buffers/buffer_copy.htm), the current GMBuffer is the destination buffer. 

### copy_from_vertex_buffer()

`copy_from_vertex_buffer(vbuff: string, start_vertex: number, num_vertices: number, offset: number): void`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| vbuff | string | Vertex Buffer to copy from |
| start_vertex | number | Vertext to start copying from |
| num_vertices | number | Number of vertices to copy |
| offset | number | Position within the buffer to start coyping to |

Wraps [`buffer_copy_from_vertex_buffer`](https://manual.gamemaker.io/lts/en/GameMaker_Language/GML_Reference/Buffers/buffer_copy_from_vertex_buffer.htm)


### get_type()

`get_type(): BufferType`

Arguments: N/A

Returns: BufferType

Wraps [`buffer_get_type`](https://manual.gamemaker.io/lts/en/GameMaker_Language/GML_Reference/Buffers/buffer_get_type.htm)

### get_alignment()

`get_alignment(): number`

Arguments: N/A

Returns: number

Wraps [`buffer_get_alignment`](https://manual.gamemaker.io/lts/en/GameMaker_Language/GML_Reference/Buffers/buffer_get_alignment.htm)


### get_address()

`get_address(): string`

Arguments: N/A

Returns: string

Wraps [`buffer_get_address`](https://manual.gamemaker.io/lts/en/GameMaker_Language/GML_Reference/Buffers/buffer_get_address.htm)

### get_size()

`get_size(): number`

Arguments: N/A

Returns: number

Wraps [`buffer_get_size`](https://manual.gamemaker.io/lts/en/GameMaker_Language/GML_Reference/Buffers/buffer_get_size.htm)

### get_used_size(): number

Arguments: N/A

Returns: number

Wraps [`buffer_get_used_size`](https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_get_used_size.htm). Returns the used size in a buffer


### copy_from_surface

`copy_from_surface(surface: string, offset: number): void`

Arguments:

| Argument | Type | Description |
| - | - | - | 
| surface | string | Surface to copy data from |
| offset | number | Position in surface to start writing to |

Returns: N/A

Wraps [`buffer_get_surface`](https://manual.gamemaker.io/lts/en/GameMaker_Language/GML_Reference/Buffers/buffer_get_surface.htm)

### copy_to_surface(surface: stirng, offset: number): void

Arguments:

| Argument | Type | Description |
| - | - | - | 
| surface | string | Surface to copy data to |
| offset | number | Position in buffer to read data from |

Returns: N/A

Wraps [`buffer_set_surface`](https://manual.gamemaker.io/lts/en/GameMaker_Language/GML_Reference/Buffers/buffer_set_surface.htm)

### resize(new_size: number): void

Arguments:

| Argument | Type | Description |
| - | - | - | 
| new_size | number | New buffer size |

Returns: N/A

Wraps [`buffer_resize`](https://manual.gamemaker.io/lts/en/GameMaker_Language/GML_Reference/Buffers/buffer_resize.htm)


### md5(offset: number, size: number): string

Arguments:

| Argument | Type | Description |
| - | - | - | 
| offset | number | Position in buffer to start calculating hash from |
| size | number | Length of data to hash |

Returns: string

Wraps [`buffer_md5`](https://manual.gamemaker.io/lts/en/GameMaker_Language/GML_Reference/Buffers/buffer_md5.htm)

### sha1(offset: number, size: number): string

Arguments:

| Argument | Type | Description |
| - | - | - | 
| offset | number | Position in buffer to start calculating hash from |
| size | number | Length of data to hash |

Returns: string

Wraps [`buffer_sha1`](https://manual.gamemaker.io/lts/en/GameMaker_Language/GML_Reference/Buffers/buffer_sha1.htm)

### crc32(offset: number, size: number): number

Arguments:

| Argument | Type | Description |
| - | - | - | 
| offset | number | Position in buffer to start calculating check from |
| size | number | Length of data to check |

Returns: number

Wraps [`buffer_crc32`](https://manual.gamemaker.io/lts/en/GameMaker_Language/GML_Reference/Buffers/buffer_crc32.htm)

### base64_encode(offset: number, size: number): string

Arguments:

| Argument | Type | Description |
| - | - | - | 
| offset | number | Posiiton to start base64 encoidng from |
| size | number | Amount of data to encode |

Returns: string

Wraps [`buffer_base64_encode`](https://manual.gamemaker.io/lts/en/GameMaker_Language/GML_Reference/Buffers/buffer_base64_encode.htm)

### base64_decode_ext(string: string, offset: number): void

Arguments:

| Argument | Type | Description |
| - | - | - | 
| string | string | Base 64 string to decode |
| offset | number | Offset within buffer to write data to |

Returns: N/A

Wraps [`buffer_base64_decode_ext`](https://manual.gamemaker.io/lts/en/GameMaker_Language/GML_Reference/Buffers/buffer_base64_decode_ext.htm)


### set_used_size(size: number)

Arguments:

| Argument | Type | Description |
| - | - | - | 
| size | number | New used size |

Returns: N/A

Wraps [`buffer_set_used_size`](https://manual.gamemaker.io/beta/en/GameMaker_Language/GML_Reference/Buffers/buffer_set_used_size.htm)