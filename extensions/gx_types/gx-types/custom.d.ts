import GMBuffer from './src/GMBuffer';
import GMJSON from './src/GMJSON';
import GMMap from './src/GMMap';
import GMList from './src/GMList';
import GMEvents from './src/GMEvents';
import GMSurface from './src/GMSurface';
declare global {
    interface Window {
        GMBuffer,
        GMJSON,
        GMMap,
        GMList
        GMEvents,
        GMAssets,
        GMSurface
    }
}

export {};