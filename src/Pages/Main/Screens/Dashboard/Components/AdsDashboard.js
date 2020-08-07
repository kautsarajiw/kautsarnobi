import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import {connect} from 'react-redux';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import {Container, Content} from 'native-base';


class AdsDashboard extends Component {
  render() {
    const {
      navigation,
    } = this.props;

    const adsImage = require('../../../../../Assets/Images/ads.png');
    
    return (
      <View style={styles.wrapperAdsComponent}>
        <Image resizeMode={'contain'} style={styles.logohHeader} source={adsImage} />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(AdsDashboard);

const styles = StyleSheet.create({
  wrapperAdsComponent:{
    alignItems:'center'
  },
  logohHeader:{
    width:moderateScale(330),
    height:verticalScale(72)
  }
});