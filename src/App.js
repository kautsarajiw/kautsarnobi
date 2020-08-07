import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Root} from 'native-base';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './Store/Store';
import Navigation from './Navigation/Navigation';

export default class App extends Component {
    render() {
      return (
        <Provider store={store}>
          <PersistGate loading={<View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}><Text
            style={{textAlign: 'center'}}>Loading...</Text></View>} persistor={persistor}>
            <Root>
              <Navigation/>
            </Root>
          </PersistGate>
        </Provider>
      );
    }
}
