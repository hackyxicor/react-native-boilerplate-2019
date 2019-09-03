import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist';
import {
    createNetworkMiddleware,
    offlineActionTypes,
    checkInternetConnection
} from 'react-native-offline';

import saga from '../Saga/index.saga';
import reducer from '../Reducer/index.reducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['user'],
    blacklist: [],
};
const persistedReducer = persistReducer(persistConfig, reducer);

const networkMiddleware = createNetworkMiddleware({
    queueReleaseThrottle: 200,
    regexActionType: /FETCH.*REQUEST/,
});

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, __DEV__ ? logger : null, networkMiddleware];

const store = createStore(persistedReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store, null, () => {
    checkInternetConnection().then(isConnected => {
        store.dispatch({
            type: offlineActionTypes.CONNECTION_CHANGE,
            payload: isConnected,
        });
    });
});

sagaMiddleware.run(saga);

export default store;
export { persistor };