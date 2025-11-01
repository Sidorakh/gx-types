// JSDoc type init
/**
 * @typedef {string|number} GMMapKey
 */

function gxtypes_init() {
    window.__gmfn = __js_get_gml();

    //console.log(__gmfn);
    //console.log(__gmfn["buffer_create"]);
    class GMBuffer {
        from(buffer){
            const buff = new GMBuffer(1,BufferTypes.Fixed,1,false);
            buff.ptr = buffer;
            return buff;
        }
        /** 
         * @readonly
         * @enum {number}
         */
        static DataTypes = {
            U8: 1,
            S8: 2,
            U16: 3,
            S16: 4,
            U32: 5,
            S32: 6,
            U64: 12,
            F16: 7,
            F32: 8,
            F64: 9,
            Bool: 10,
            String: 11,
            Text: 13,
        };
        /** 
         * @readonly
         * @enum {number}
         */
        static BufferTypes = {
            Fixed: 0,
            Grow: 1,
            Wrap: 2,
            Fast: 3,
        }
        /** 
         * @readonly
         * @enum {number}
         */
        static ErrorTypes = {
            General: -1,
            OutOfSpace: -2,
            InvalidType: -4,
        }
        /** 
         * @readonly
         * @enum {number}
         */
        static SeekTypes = {
            Start: 0,
            Relative: 1,
            End: 2,
        }
        static InternalFunctions = {
            buffer_create: window.__gmfn["buffer_create"],
            buffer_read: window.__gmfn["buffer_read"],
            buffer_write: window.__gmfn["buffer_write"],
            buffer_seek: window.__gmfn["buffer_seek"],
        }
        ptr = null;
        constructor(/** @type {number} */ size, /** @type {type: keyof typeof logTypes GMBuffer.BufferTypes} */ type, /** @type {number} */ alignment, create=true) {
            if (create) {
                this.ptr = GMBuffer.InternalFunctions.buffer_create(undefined, undefined, size,type,alignment);
            }
        }
        read(/** @type {type: keyof typeof logTypes GMBuffer.DataTypes} */ type){
            return GMBuffer.InternalFunctions.buffer_read(undefined,undefined,this.ptr,type);
        }
        write(/** @type {type: keyof typeof logTypes GMBuffer.DataTypes} */ type,/** @type {number|string} */ data) {
            return GMBuffer.InternalFunctions.buffer_write(undefined,undefined,this.ptr,type,data);
        }
        seek(/** @type {type: keyof typeof logTypes GMBuffer.SeekTypes} */ type, /** @type {number} */ offset) {
            return GMBuffer.InternalFunctions.buffer_seek(undefined,undefined,this.ptr,type,offset);
        }
    }
    window.GMBuffer = GMBuffer;
    
    class GMJSON {
        static InternalFunctions = {
            json_encode: window.__gmfn["json_encode"],
            json_decode: window.__gmfn["json_decode"],
        }
        static struct = {
            stringify() {},
            parse(){},
        }
        static ds = {
            stringify(/** @type {GMMap} */ ds, prettify=false){
                return GMJSON.InternalFunctions.json_encode(undefined, undefined, ds.ptr, prettify);
            },
            parse(/** @type {string} */ string){
                const map = new GMMap(false);
                map.ptr = GMJSON.InternalFunctions.json_decode(undefined, undefined, string);
                return map;
            },
        }
    }
    window.GMJSON = GMJSON;

    class GMMap {
        static from(ptr) {
            const map = new GMMap(false);
            map.ptr = ptr;
            return map;
        }
        static read(is_legacy){
            const map = new GMMap(false);
            map.ptr = GMMap.InternalFunctions.ds_map_read(undefined, undefined, is_legacy);
            return map;
        }
        static InternalFunctions = {
            ds_map_create: window.__gmfn["ds_map_create"],
            ds_map_exists: window.__gmfn["ds_map_exists"],
            ds_map_destroy: window.__gmfn["ds_map_destroy"],
            ds_map_add: window.__gmfn["ds_map_add"],
            ds_map_clear: window.__gmfn["ds_map_clear"],
            ds_map_copy: window.__gmfn["ds_map_copy"],
            ds_map_replace: window.__gmfn["ds_map_replace"],
            ds_map_delete: window.__gmfn["ds_map_delete"],
            ds_map_empty: window.__gmfn["ds_map_empty"],
            ds_map_size: window.__gmfn["ds_map_size"],
            ds_map_find_first: window.__gmfn["ds_map_find_first"],
            ds_map_find_last: window.__gmfn["ds_map_find_last"],
            ds_map_find_next: window.__gmfn["ds_map_find_next"],
            ds_map_find_previous: window.__gmfn["ds_map_find_previous"],
            ds_map_find_value: window.__gmfn["ds_map_find_value"],
            ds_map_keys_to_array: window.__gmfn["ds_map_keys_to_array"],
            ds_map_values_to_array: window.__gmfn["ds_map_values_to_array"],
            ds_map_set: window.__gmfn["ds_map_set"],
            ds_map_read: window.__gmfn["ds_map_read"],
            ds_map_write: window.__gmfn["ds_map_write"],
            ds_map_secure_save: window.__gmfn["ds_map_secure_save"],
            ds_map_secure_save_buffer: window.__gmfn["ds_map_secure_save_buffer"],

            json_decode: window.__gmfn["json_decode"],
            json_encode: window.__gmfn["json_encode"],
        }
        
        ptr = null;
        constructor(create=true) {
            if (create) {
                this.ptr = GMMap.InternalFunctions.ds_map_create();
            }
        }
        exists(/** @type {GMMapKey} */ key){
            return GMMap.InternalFunctions.ds_map_exists(undefined, undefined, this.ptr, key);
        }
        destroy(){
            return GMMap.InternalFunctions.ds_map_destroy(undefined, undefined, this.ptr);
        }
        add(/** @type {GMMapKey} */ key, value){
            return GMMap.InternalFunctions.ds_map_add(undefined, undefined, this.ptr, key, value);
        }
        clear() {
            return GMMap.InternalFunctions.ds_map_clear(undefined, undefined, this.ptr);
        }
        copy(/** @type {GMMap} */ source){
            return GMMap.InternalFunctions.ds_map_copy(undefined, undefined, this.ptr, source);
        }
        replace(/** @type {GMMapKey} */ key, value){
            return GMMap.InternalFunctions.ds_map_replace(undefined, undefined, this.ptr, key, value);
        }
        delete(/** @type {GMMapKey} */ key) {
            return GMMap.InternalFunctions.ds_map_delete(undefined, undefined, this.ptr, key);
        }
        empty() {
            return GMMap.InternalFunctions.ds_map_empty(undefined, undefined, this.ptr);
        }
        size(){
            return GMMap.InternalFunctions.ds_map_size(undefined, undefined, this.ptr);
        }
        find_first() {
            return GMMap.InternalFunctions.ds_map_find_first(undefined, undefined, this.ptr);
        }
        find_last() {
            return GMMap.InternalFunctions.ds_map_find_last(undefined, undefined, this.ptr);
        }
        find_next(/** @type {GMMapKey} */ key) {
            return GMMap.InternalFunctions.ds_map_find_next(undefined, undefined, this.ptr, key);
        }
        find_previous(/** @type {GMMapKey} */ key) {
            return GMMap.InternalFunctions.ds_map_find_previous(undefined, undefined, this.ptr, key);
        }
        find_value(/** @type {GMMapKey} */ key) {
            return GMMap.InternalFunctions.ds_map_find_value(undefined, undefined, this.ptr, key);
        }
        keys_to_array() {
            return GMMap.InternalFunctions.ds_map_keys_to_array(undefined, undefined, this.ptr);
        }
        values_to_array() {
            return GMMap.InternalFunctions.ds_map_values_to_array(undefined, undefined, this.ptr);
        }
        set(/** @type {GMMapKey} */ key, value) {
            return GMMap.InternalFunctions.ds_map_set(undefined, undefined, this.ptr, key, value);
        }
        write() {
            return GMMap.InternalFunctions.ds_map_write(undefined, undefined, this.ptr);
        }
        secure_save(/** @type {string} */ fname) {
            return GMMap.InternalFunctions.ds_map_secure_save(undefined, undefined, this.ptr);
        }
        secure_save_buffer(/** @type {GMBuffer} */ buffer) {
            return GMMap.InternalFunctions.ds_map_secure_save_buffer(undefined, undefined, this.ptr, buffer.ptr);
        }



    };
    window.GMMap = GMMap;
    
}
function test(){
    const buff = new GMBuffer(128,GMBuffer.BufferTypes.Fixed,1);
    const map = new GMMap();
    map.set('test',true);
    map.set('test123',false);
    map.set('a string','blah blah blah');
    map.set('a number',42069);
    map.set('undefined',undefined);
    map.set('array',['a',1,2,3,'b']);
    console.log(buff.ptr);
    console.log(typeof(buff.ptr));
    console.log(map.ptr);
    console.log(typeof(map.ptr));

    console.log(GMJSON.ds.stringify(map,true));
    console.log(map.keys_to_array());
    console.log(map.values_to_array());
    
}

function testmap(ptr){
    const map = GMMap.from(ptr);
    console.log(map.find_value("struct"));
    const inst = map.find_value("struct").idx;
    window.__gmfn.variable_instance_set(undefined, undefined, inst, "x", 300);
}