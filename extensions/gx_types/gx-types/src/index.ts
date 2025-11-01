import { fetch_gml_functions } from "./GMFunctionHandler";
import GMBuffer, { BufferTypes } from "./GMBuffer";
import GMJSON from "./GMJSON";
import GMMap from "./GMMap";
// @ts-ignore
window.gxtypes_init = async function() {
    
    const out = fetch_gml_functions();
    console.log(out)
    
    GMBuffer.init();
    GMJSON.init();
    GMMap.init();

    window.GMBuffer = GMBuffer;
    window.GMJSON = GMJSON;
    window.GMMap = GMMap;

}

// @ts-ignore
window.gxtypes_test = function() {
    // @ts-ignore
    const buff = new GMBuffer(128,BufferTypes.Fixed,1);
    const map = new GMMap();
    map.set('test',true);
    map.set('test123',false);
    map.set('a string','blah blah blah');
    map.set('a number',42069);
    map.set('undefined',undefined);
    map.set('array',['a',1,2,3,'b']);
    // @ts-ignore
    console.log(buff.ptr);
    // @ts-ignore
    console.log(typeof(buff.ptr));
    console.log(map.ptr);
    console.log(typeof(map.ptr));

    console.log(GMJSON.ds.stringify(map,true));
    console.log(map.keys_to_array());
    console.log(map.values_to_array());
}

// @ts-ignore
window.gxtypes_testmap = function(ptr: string) {
    // @ts-ignore
    const map = GMMap.from(ptr);
    console.log(map.find_value("struct"));
}