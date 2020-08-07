import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Linking} from 'react-native';
import {connect} from 'react-redux';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import {Container, Content, Card, CardItem, Body} from 'native-base';

//import styles 
import stylesLightMode from '../../../../Assets/Style/LightMode';
import stylesDarkMode from '../../../../Assets/Style/DarkMode';

class Dashboard extends Component {

  componentLogoHeaderDark = () => (
    <Image resizeMode={'contain'} style={styles.logohHeader} source={require('../../../../Assets/Images/logo_langgan.png')} />
  )

  componentLogoHeaderLight = () => (
    <Image resizeMode={'contain'} style={styles.logohHeader} source={require('../../../../Assets/Images/logo_langgan_dark.png')} />
  )
  
  
  render() {
    const {
      navigation,
      darkModeProps,
    } = this.props;
    return (
      <Container style={darkModeProps ? stylesDarkMode.containerBackground : stylesLightMode.containerBackground}>

        <Content padder style={{padding:moderateScale(5)}}>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  darkModeProps: state.AppReducerPersist.darkMode,

})
export default connect(mapStateToProps)(Dashboard);

const styles = StyleSheet.create({
  logohHeader: {
    width: scale(150), 
    height: verticalScale(30), 
    alignSelf: 'center',
    marginLeft:moderateScale(5)
  },
  wrapperJumlah:{
    flexDirection:'row', 
    marginTop:moderateScale(19)
  },
  jumlahPendapatan :{
    fontSize:21, 
    color:'#10BAB1'
  },
  totalTransaksi :{
    fontSize:21, 
    color:'#10BAB1'
  },
  textPelangganTerdaftar :{
    fontSize:21, 
    color:'#10BAB1'
  },
  jumlahPelanggan:{
    fontSize:21, 
    color:'#10BAB1'
  },

  //banner marketing
  wrapperBanner:{
    marginBottom:moderateScale(11),
    borderTopLeftRadius:5
  },  
  slide1: {
    flex: 1,
    borderRadius:5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },

  slide2: {
    flex: 1,
    borderRadius:5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },

  slide3: {
    flex: 1,
    borderRadius:5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
});