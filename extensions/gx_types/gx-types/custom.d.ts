import GMBuffer from './src/GMBuffer';
import GMJSON from './src/GMJSON';
import GMMap from './src/GMMap';
import GMList from './src/GMList';
import GMEvents from './src/GMEvents';

declare global {
    interface Window {
        GMBuffer,
        GMJSON,
        GMMap,
        GMList
        GMEvents,
        GMAssets,
    }
}

export {};