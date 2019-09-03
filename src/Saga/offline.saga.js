import { offlineActionTypes } from 'react-native-offline';
import { takeLatest } from 'redux-saga/effects';
import Snackbar from 'react-native-snackbar';

function* networkChange(params, d) {
    if (params.payload === false) {
        Snackbar.show({
            title: 'No Internet connection!!! ',
            duration: Snackbar.LENGTH_INDEFINITE,
            action: {
                title: 'Dismiss',
                onPress: () => {
                    Snackbar.dismiss()
                },
                color: '#43de32'
            },
            color: '#fff'
        })
    }
}

export default function* () {
    yield takeLatest(offlineActionTypes.CONNECTION_CHANGE, networkChange)
};