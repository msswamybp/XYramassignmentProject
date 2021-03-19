/*
 * Redux saga class
 * fetches the my courses
 */

import { put, call } from "redux-saga/effects";
// import AboutUs from "@api/methods/AboutUs";
import * as AboutActions from "@actions/AboutActions";

export default function* aboutUsAsync(action) {
    // yield put(AboutActions.enableLoader());
    // try {
    //     const response = yield call(AboutUs, action.props);

    //     if (response.success == true) {

    //         yield put(AboutActions.disableLoader({}));
    //         yield put(AboutActions.aboutResponse(response.contentData));

    //     } else {

    //         yield put(AboutActions.disableLoader({}));
    //     }
    // } catch (error) {

    //     yield put(AboutActions.disableLoader({}));
    // }
}