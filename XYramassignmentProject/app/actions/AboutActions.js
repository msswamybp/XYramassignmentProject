/*
 * Reducer actions related with About screen
 */
import * as types from "./actionTypes";


export function enableLoader() {
    return {
        type: types.ABOUT_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.ABOUT_DISABLE_LOADER
    };
}