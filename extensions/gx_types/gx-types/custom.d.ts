import GMBuffer from './src/GMBuffer';
import GMJSON from './src/GMJSON';
import GMMap from './src/GMMap';

declare global {
    interface Window {
        GMBuffer,
        GMJSON,
        GMMap,
    }
}

export {};