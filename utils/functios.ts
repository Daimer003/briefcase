import { MurmurHash3 } from 'murmurhash-wasm';

//* Función para verificar si hay una clave sin valor
export const validateField = (data: any) => {
    for (const clave in data) {
        if (
            data.hasOwnProperty(clave) &&
            data[clave] == ''
        ) {
            return { emptyField: true };
        }
    }
    return { emptyField: false };
}


/**
 * getFingerprint: obtiene la data del navegador 
 * MurmurHash3: comvirte la data en hex
 * @returns codigo hex
 */
export const getFingerprint = async () => {
    const navigatorObj = window.navigator;
    const fingerprint = [
        navigatorObj.userAgent,
        navigatorObj.language,
        navigatorObj.platform,
        navigatorObj.hardwareConcurrency,
        navigatorObj.appName,
        navigatorObj.appVersion,
        navigatorObj.vendor,
        navigatorObj.product,
        `${window.screen.width}x${window.screen.height}`,
        window.screen.colorDepth,
        Intl.DateTimeFormat().resolvedOptions().timeZone,
        Array.from(navigator.plugins).map(plugin => plugin.name).join(',')
    ].join('');
    const hash = await MurmurHash3.hash32(fingerprint, 0);
    const hex = hash.toString('hex');
    return hex;
};


