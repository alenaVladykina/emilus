import {call, put, takeEvery} from "redux-saga/effects";
import ExampleService from "../../services/UsersServise";
import {
    FETCH_USERS,
    USERS_FETCH,
    USER_DELETE, IS_LOADING,
} from '../constants/UserString';


export function* fetchUserSaga() {
    try {
        const users = yield call(ExampleService.getPostRequest)
        yield put({type: "USERS_FETCH", users});
    } catch (e) {
        console.log('Error', e.message)
    }
}

export function* deleteUserSaga(action) {
    const userId = action.payload
    yield put({type: IS_LOADING, isLoad: true});
    try {
        yield put({type: "USERS_USER_DELETE", userId});
        yield new Promise((resolve => { setTimeout(resolve, 500)}));
    } catch (e) {
    } finally {
       yield put({type: IS_LOADING, isLoad: false});
    }
}


export default function* rootSaga() {
    yield takeEvery(FETCH_USERS, fetchUserSaga)
    yield takeEvery(USER_DELETE, deleteUserSaga)
}
