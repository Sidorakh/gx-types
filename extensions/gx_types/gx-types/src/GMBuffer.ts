import { get_function } from "./GMFunctionHandler";

export enum BufferTypes {
    Fixed= 0,
    Grow= 1,
    Wrap= 2,
    Fast= 3,
}

export enum DataType {
    U8 = 1,
    S8 = 2,
    U16 = 3,
    S16 = 4,
    U32 = 5,
    S32 = 6,
    U64 = 12,
    F16 = 7,
    F32 = 8,
    F64 = 9,
    Bool = 10,
    String = 11,
    Text = 13,
}

export enum SeekType {
    Start = 0,
    Relative = 1,
    End = 2,
}

function get_internal_functions() {
    return {
        buffer_create: get_function("buffer_create"),
        buffer_read: get_function("buffer_read"),
        buffer_write: get_function("buffer_write"),
        buffer_seek: get_function("buffer_seek"),
    }
}

export default class GMBuffer {
    from(buffer: string){
        const buff = new GMBuffer(1,BufferTypes.Fixed,1,false);
        buff.ptr = buffer;
        return buff;
    }
    static InternalFunctions = get_internal_functions();
    static init() {
        GMBuffer.InternalFunctions = get_internal_functions();
    }
    
    ptr: string|null = null;
    constructor(size: number,type: BufferTypes, alignment: number, create=true) {
        if (create) {
            this.ptr = GMBuffer.InternalFunctions.buffer_create(undefined, undefined, size,type,alignment);
        }
    }
    read(type: DataType){
        return GMBuffer.InternalFunctions.buffer_read(undefined,undefined,this.ptr,type);
    }
    write(type: DataType, data: number|string) {
        return GMBuffer.InternalFunctions.buffer_write(undefined,undefined,this.ptr,type,data);
    }
    seek(type: SeekType, offset: number) {
        return GMBuffer.InternalFunctions.buffer_seek(undefined,undefined,this.ptr,type,offset);
    }
}