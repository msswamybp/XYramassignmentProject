/*
 * Redux saga class init
 * Called on app init on Entrypoint
 */
import { takeEvery } from "redux-saga/effects";
import * as actionTypes from '../actions/actionTypes';

import AboutSaga from "./AboutSaga";



export default function* watch() {
    
    yield takeEvery(actionTypes.ABOUT_FETCH, AboutSaga);
   

    

}