import {all} from 'redux-saga/effects';
import Auth from './Auth';
import UserSaga from './UserSaga';

export default function* rootSaga(getState) {
    yield all([
        Auth(),
        UserSaga()
    ]);
}
