import React, {Component} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import {connect} from 'react-redux';
import {verticalScale, moderateScale } from 'react-native-size-matters';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Button, Icon} from 'native-base';

class DataComponent extends Component {

  validasiLogout(){
    Alert.alert(
      "Warning",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Yes", onPress: () => this.logout() }
      ],
      { cancelable: false }
    );
  }

  //action logout
  logout() {
    this.props.dispatch({
      type: 'SET_IS_LOGOUT',
    });
    this.props.navigation.navigate('Login')
  }

  render() {
    const {
      total_asset,
      hour24change,
    } = this.props;

    const adsImage = require('../../../../../Assets/Images/ads.png');
    
    return (
      <View style={styles.wrapperAdsComponent}>
        <Text style={styles.textChanges}>24H Changes <Text style={styles.dataTextChanges}>+ {hour24change}%</Text></Text>
        <Text style={styles.dataMoney}>${total_asset}</Text>
        
        <Button onPress={this.props.deposit} style={styles.buttonDeposit} full primary>
          <Icon type={'AntDesign'} name='download' style={{marginLeft:moderateScale(-10)}}/>
          <Text style={styles.textButtonDeposit}>Deposit</Text>
        </Button>

        <Text style={styles.textOR}>OR</Text>

        <Button onPress={() => this.validasiLogout()} style={styles.buttonLogout} full primary>
          <Icon type={'AntDesign'} name='logout' style={{marginLeft:moderateScale(-10)}}/>
          <Text style={styles.textButtonLogout}>Logout</Text>
        </Button>

      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  total_asset:state.ReducerDashboard.total_asset,
  hour24change:state.ReducerDashboard.hour24change,
})

export default connect(mapStateToProps)(DataComponent);

const styles = StyleSheet.create({
  wrapperAdsComponent:{
    alignItems:'center',
    marginTop:moderateScale(55)
  },
  textChanges:{
    fontSize:hp('2%'),
    color:'#9D9FA0',
  },
  dataTextChanges:{
    fontSize:hp('2%'),
    color:'#05BE90',
  },
  dataMoney:{
    fontSize:hp('7%'),
    color:'#EAEAEA',
    fontWeight:'bold',
    marginTop:moderateScale(10),
    marginBottom:moderateScale(37)
  },
  buttonDeposit:{
    marginBottom: moderateScale(25),
    marginLeft: moderateScale(27),
    marginRight: moderateScale(27),
    borderRadius: moderateScale(10),
    backgroundColor:'#00cb98',
    height:verticalScale(40),
  },
  textButtonDeposit:{
    color:'#FFFFFF',
    fontSize:hp('2.5%'),
    fontWeight:'bold'
  },
  textOR:{
    fontSize:hp('2%'),
    color:'#F6BC45',
  },
  buttonLogout:{
    marginTop: moderateScale(25),
    marginLeft: moderateScale(27),
    marginRight: moderateScale(27),
    borderRadius: moderateScale(10),
    backgroundColor:'#e74c3c',
    height:verticalScale(40),
  },
  textButtonLogout:{
    color:'#FFFFFF',
    fontSize:hp('2.5%'),
    fontWeight:'bold'
  },
});