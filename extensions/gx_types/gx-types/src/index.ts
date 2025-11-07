import { fetch_gml_functions } from "./GMFunctionHandler";
import GMBuffer, { BufferType, DataType, SeekType } from "./GMBuffer";
import GMJSON from "./GMJSON";
import GMMap from "./GMMap";
import GMList from "./GMList";
import GMEvents, { AsyncEvent } from "./GMEvents";
import GMAssets, { AssetType } from "./GMAssets";
import GMSurface from "./GMSurface";
import GMDraw from "./GMDraw";
import GMColor, {Color} from "./GMColor";




window.gxtypes_init = function() {
    
    const out = fetch_gml_functions();
    console.log(out)
    
    GMBuffer.init();
    GMJSON.init();
    GMMap.init();
    GMList.init();
    GMEvents.init();
    GMAssets.init();
    GMSurface.init();
    GMDraw.init();
    GMColor.init();




    window.GMBuffer = GMBuffer;
    window.GMJSON = GMJSON;
    window.GMMap = GMMap;
    window.GMList = GMList;
    window.GMEvents = GMEvents;
    window.GMSurface = GMSurface;
    window.GMDraw = GMDraw;
    window.GMColor = GMColor;
}

// @ts-ignore
window.gxtypes_test = function() {
    // @ts-ignore
    const buff = new GMBuffer(128,BufferType.Fixed,1);
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
    console.log(typeof(buff.get_address()))
    console.log(buff.get_address())
}

// @ts-ignore
window.gxtypes_testmap = function(ptr: string) {
    //const buff = GMBuffer.from(ptr);
    //console.log(`Address: ${buff.get_address()}\nAlignment:${buff.get_alignment()}\nType: ${buff.get_type()}`);
    /*
    const map = new GMMap();
    map.set("id","hello world");
    map.set("what","social event");
    map.set("yup","blah");
    console.log(map);
    console.log(AsyncEvent.Social);
    GMEvents.perform_async(AsyncEvent.Social,map);
    */
   const surf = GMSurface.from(ptr);
   // const buff = new GMBuffer(64*64*4,BufferType.Fixed,1);
   // buff.seek(SeekType.Start,0);
   // buff.write(DataType.String,"Hi world");
   // buff.seek(SeekType.Start,0);
   // console.log(`Read: ${buff.read(DataType.String)}`);
   // buff.get_surface(surf.ptr!,0);
   // buff.seek(SeekType.Start,0);
   // console.log(`Read: ${buff.read(DataType.U8)}`);
   
    
   surf.set_target();
   GMDraw.clear_alpha(GMColor.merge_color(Color.Red,Color.Blue,0.5),1)
   GMDraw.set_color(Color.Black);
   GMDraw.arrow(16,16,48,48,5);
   surf.reset_target();

}