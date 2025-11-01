import { get_function } from "./GMFunctionHandler";
import GMBuffer from "./GMBuffer";

export type MapKey = string|number;

function get_internal_functions() {
    return {
        ds_map_create: get_function("ds_map_create"),
        ds_map_exists: get_function("ds_map_exists"),
        ds_map_destroy: get_function("ds_map_destroy"),
        ds_map_add: get_function("ds_map_add"),
        ds_map_clear: get_function("ds_map_clear"),
        ds_map_copy: get_function("ds_map_copy"),
        ds_map_replace: get_function("ds_map_replace"),
        ds_map_delete: get_function("ds_map_delete"),
        ds_map_empty: get_function("ds_map_empty"),
        ds_map_size: get_function("ds_map_size"),
        ds_map_find_first: get_function("ds_map_find_first"),
        ds_map_find_last: get_function("ds_map_find_last"),
        ds_map_find_next: get_function("ds_map_find_next"),
        ds_map_find_previous: get_function("ds_map_find_previous"),
        ds_map_find_value: get_function("ds_map_find_value"),
        ds_map_keys_to_array: get_function("ds_map_keys_to_array"),
        ds_map_values_to_array: get_function("ds_map_values_to_array"),
        ds_map_set: get_function("ds_map_set"),
        ds_map_read: get_function("ds_map_read"),
        ds_map_write: get_function("ds_map_write"),
        ds_map_secure_save: get_function("ds_map_secure_save"),
        ds_map_secure_save_buffer: get_function("ds_map_secure_save_buffer"),
        ds_map_secure_load: get_function("ds_map_secure_load"),
        ds_map_secure_load_buffer: get_function("ds_map_secure_load_buffer"),
        
    }
}

export default class GMMap {
    static from(ptr: string) {
        const map = new GMMap(false);
        map.ptr = ptr;
        return map;
    }
    static read(is_legacy: boolean){
        const map = new GMMap(false);
        map.ptr = GMMap.InternalFunctions.ds_map_read(undefined, undefined, is_legacy);
        return map;
    }
    static secure_load(fname: string) {
        const map = new GMMap(false);
        
    }
    static InternalFunctions = get_internal_functions();
    static init() {
        GMMap.InternalFunctions = get_internal_functions();
    }
    ptr: string|null = null;
    constructor(create=true) {
        if (create) {
            this.ptr = GMMap.InternalFunctions.ds_map_create();
        }
    }
    exists(key: MapKey){
        return GMMap.InternalFunctions.ds_map_exists(undefined, undefined, this.ptr, key);
    }
    destroy(){
        return GMMap.InternalFunctions.ds_map_destroy(undefined, undefined, this.ptr);
    }
    add(key: MapKey, value: any){
        return GMMap.InternalFunctions.ds_map_add(undefined, undefined, this.ptr, key, value);
    }
    clear() {
        return GMMap.InternalFunctions.ds_map_clear(undefined, undefined, this.ptr);
    }
    copy(source: GMMap){
        return GMMap.InternalFunctions.ds_map_copy(undefined, undefined, this.ptr, source);
    }
    replace(key: MapKey, value: any){
        return GMMap.InternalFunctions.ds_map_replace(undefined, undefined, this.ptr, key, value);
    }
    delete(key: MapKey) {
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
    find_next(key: MapKey) {
        return GMMap.InternalFunctions.ds_map_find_next(undefined, undefined, this.ptr, key);
    }
    find_previous(key: MapKey) {
        return GMMap.InternalFunctions.ds_map_find_previous(undefined, undefined, this.ptr, key);
    }
    find_value(key: MapKey) {
        return GMMap.InternalFunctions.ds_map_find_value(undefined, undefined, this.ptr, key);
    }
    keys_to_array(): ()=>MapKey[] {
        return GMMap.InternalFunctions.ds_map_keys_to_array(undefined, undefined, this.ptr);
    }
    values_to_array(): ()=>any[] {
        return GMMap.InternalFunctions.ds_map_values_to_array(undefined, undefined, this.ptr);
    }
    set(key: MapKey, value: any) {
        return GMMap.InternalFunctions.ds_map_set(undefined, undefined, this.ptr, key, value);
    }
    write() {
        return GMMap.InternalFunctions.ds_map_write(undefined, undefined, this.ptr);
    }
    secure_save(fname: string) {
        return GMMap.InternalFunctions.ds_map_secure_save(undefined, undefined, this.ptr, fname);
    }
    secure_save_buffer(buffer: GMBuffer) {
        return GMMap.InternalFunctions.ds_map_secure_save_buffer(undefined, undefined, this.ptr, buffer.ptr);
    }
};