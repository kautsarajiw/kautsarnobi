import {
  Dimensions,
  Platform,
  StyleSheet
} from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

/*
  NAVBAR & HEADER : #262626
  LINE : #575758
  BACKGROUND : #363639
  FONT : #F7FFFF
  MERAH : #FF453A
  HIJAU : #15BFAE
  ICON NON ACTIVE : #8E8E93
*/

//cheatsheet kode nama2 style tinggal copy lalu CTRL + F
//style Login Screen 01 = ###LS01
//style Footer = ###FTR
//style Dashboard Screen 01 = ###DS01



const { height, width } = Dimensions.get('window');

const StylesDarkMode = StyleSheet.create({
  //style Login Screen ###LS01
    containerLoginScreen: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#363639',
      paddingLeft:moderateScale(30),
      paddingRight:moderateScale(30),
    },
    wrapperFormLoginScreen: {
      width:'100%',      
    },
    labelFormLoginScreen :{
      color:'#F7FFFF'
    },
    inputLoginScreen:{
      color:'#F7FFFF'
    },
    buttonMasukLoginScreen: {
      marginTop: moderateScale(30),
      borderRadius: moderateScale(7),
      backgroundColor:'#15BFAE',
      height:verticalScale(32)
    },
    textButtonMasukLoginScreen: {
      color:'#F7FFFF',
      fontWeight: 'bold',
      fontSize: 14,
    },
    wrapperTextKelolaLoginScreen: {
      justifyContent:'flex-start',
      alignItems: 'flex-start',
      marginTop: moderateScale(10),
      marginBottom: moderateScale(40),
    },
    textKelolaMasukLoginScreen: {
      color:'#F7FFFF',
      fontSize: 16,
      textAlign:'center'
    },
    styleItemInput:{
      borderBottomColor: '#F7FFFF',
    },
    wrapperTextSDLoginScreen: {
      justifyContent:'flex-start',
      alignItems: 'flex-start',
      marginBottom: moderateScale(10),
    },
    textSDLoginScreen: {
      color:'#F7FFFF',
      fontSize: 18,
      textAlign:'center'
    },
    textDisiniLoginScreen:{
      color:'#F7FFFF',
      fontSize: 12,
      fontWeight:'bold',
      marginLeft:moderateScale(2)
    },
    
  //style Footer ###FTR
    wrapperFooterNavbar:{
      backgroundColor:'#262626',
      padding:0,
      borderColor:'#262626'
    },
    iconNavbarActive: {
      color: "#15BFAE"
    },
    iconNonNavbarActive: {
      color: "#8E8E93"
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
    wrapperHeaderDashboard: {
      backgroundColor:'#565656'
    },
    containerCard:{
      backgroundColor:'#565656',
      borderTopLeftRadius:5, 
      borderTopRightRadius:5, 
      borderBottomLeftRadius:5, 
      borderBottomRightRadius:5, 
      shadowOffset: { width: 3, height: 3 },
      shadowOpacity: .3,
      shadowRadius: 3,
      elevation: 1,
      borderWidth:0,
      borderColor:'#565656'
    },
    wrapperCard:{
      backgroundColor:'#565656',
      height:verticalScale(140), 
      borderTopLeftRadius:5, 
      borderTopRightRadius:5, 
      borderBottomLeftRadius:5, 
      borderBottomRightRadius:5,
      borderWidth:0,
      borderColor:'#565656'
    },
    sectionDescription:{
      width:'57%', 
      height:'100%',
    },
    textPendapatanCard:{
      fontSize:12, 
      color:'#FFFFFF'
    },
    textTransaksiCard:{
      fontSize:12, 
      color:'#FFFFFF', 
      alignSelf: 'center', 
      marginLeft:moderateScale(10)
    },
    sectionChart:{
      width:'43%', 
      height:'100%', 
      justifyContent:'center', 
      alignItems: 'center', 
      padding:moderateScale(5),
    },
    textPelangganCard:{
      fontSize:12, 
      color:'#FFFFFF', 
      alignSelf: 'center', 
      marginLeft:moderateScale(10)
    },    
});

export default StylesDarkMode;