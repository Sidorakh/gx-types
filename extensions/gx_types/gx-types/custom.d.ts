import GMBuffer from './src/GMBuffer';
import GMJSON from './src/GMJSON';
import GMMap from './src/GMMap';
import GMList from './src/GMList';
import GMEvents from './src/GMEvents';
import GMSurface from './src/GMSurface';
import GMDraw from './src/GMDraw';
import GMColor from './src/GMColor';

declare global {
    interface Window {
        gxtypes_init: ()=>void,
        GMBuffer,
        GMJSON,
        GMMap,
        GMList
        GMEvents,
        GMAssets,
        GMSurface,
        GMDraw,
        GMColor
    }
}

export {};