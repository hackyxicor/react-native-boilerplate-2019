import { combineReducers } from 'redux';

import { reducer as network } from 'react-native-offline';
import user from './user.reducer';

const rootReducer = combineReducers({
    user,
    network
});

export default rootReducer;