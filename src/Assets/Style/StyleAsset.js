import {
  Dimensions,
  Platform,
  StyleSheet
} from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const { height, width } = Dimensions.get('window');

const StyleAsset = StyleSheet.create({
  //style Login Screen ###LS01
    containerLoginScreen: {
      flex: 1,
    },
    wrapperLogoLogin: {
      alignItems: 'center',
      paddingTop:moderateScale(22),
      marginBottom:moderateScale(45)
    },
    wrapperFormLoginScreen: {
      width:'100%',      
    },
    labelFormLoginScreen :{
      color:'#9D9FA0',
      marginBottom:moderateScale(15),
      fontSize:hp('2%'),
    },
    styleItemInput:{
      borderColor: '#11203C',
      backgroundColor:'#11203C',
      borderRadius:5,
    },
    inputLoginScreen:{
      color:'#EAEAEA',
      textAlign:'center',
      fontSize:15,
      opacity:.5,
    },
    buttonMasukLoginScreen: {
      marginBottom: moderateScale(49),
      marginLeft: moderateScale(27),
      marginRight: moderateScale(27),
      borderRadius: moderateScale(7),
      backgroundColor:'#0e46fb',
      height:verticalScale(40),
    },
    buttonMasukLoginGetAPIScreen: {
      marginBottom: moderateScale(49),
      marginLeft: moderateScale(27),
      marginRight: moderateScale(27),
      borderRadius: moderateScale(7),
      backgroundColor:'#0e46fb50',
      height:verticalScale(40),
    },
    textButtonMasukLoginScreen: {
      color:'#FFFFFF',
      fontSize:hp('2%'),
    },
    labelError:{
      color:'#F6BC45',
      fontSize:hp('1.3%'),
      marginTop:moderateScale(8),
      fontStyle:'italic'
    },
    
  //style Footer ###FTR
    wrapperFooterNavbar:{
      backgroundColor:'#000000',
      padding:0,
      borderColor:'#000000',
      height:verticalScale(72)
    },
    styleFontActiveNavbar:{
      fontSize: hp('1.3%'),
      color:'#15BFAE'
    },
    styleFontNonActiveNavbar:{
      fontSize: hp('1.3%'),
      color:'#8E8E93'
    },

  //style Dashboard Screen ###DS01
 
});

export default StyleAsset;