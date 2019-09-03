import React, { Fragment, PureComponent } from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ReduxNetworkProvider } from 'react-native-offline';
import { AndroidBackHandler } from 'react-navigation-backhandler';
import { useScreens } from 'react-native-screens';


import IndexNavigation, { getPersistenceFunctions } from './src/Navigation/index.navigation';
import store, { persistor } from './src/Store/index.store';

useScreens();
class App extends PureComponent {
  onBackButtonPressAndroid = () => {
    return false;
  }

  render() {
    return (
      <Fragment>
        <StatusBar />
        <SafeAreaView style={{ flex: 1 }} >
          <ReduxProvider
            store={store}
          >
            <ReduxNetworkProvider
              pingServerUrl={'https://www.google.com'}
              pingInterval={3000}
            >
              <PersistGate
                loading={null}
                persistor={persistor}
              >
                <IndexNavigation
                  {...getPersistenceFunctions()}
                />
              </PersistGate>
            </ReduxNetworkProvider>
          </ReduxProvider>
        </SafeAreaView>
      </Fragment>
    );
  }
}

export default App;
