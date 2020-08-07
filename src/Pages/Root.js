import React, {Component} from 'react';
import {
    View,
    StatusBar,
    ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';

class Root extends Component {
    constructor(props) {
      super(props);
      this._cekState();
    }
  
    //cek state status user sedang login atau tidak
    _cekState() {
      const {appIsLogin} = this.props;
      if(appIsLogin) {
        this.props.navigation.navigate('Main');
      } else {
        this.props.navigation.navigate('Login');
      }
    }

    render() {
      return (
        <View>
          <ActivityIndicator/>
          <StatusBar barStyle="default"/>
        </View>
      );
    }
}

const mapStateToProps = (state) => ({
  appIsLogin: state.AppReducerPersist.appIsLogin,
});

export default connect(mapStateToProps)(Root);
