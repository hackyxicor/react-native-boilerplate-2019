import { all } from 'redux-saga/effects';
import { networkSaga } from 'react-native-offline';

import loginSaga from './login.saga';
import offlineSaga from './offline.saga';

export default function* rootSaga() {
    yield all([
        loginSaga(),
        networkSaga(),
        offlineSaga(),
    ])
}