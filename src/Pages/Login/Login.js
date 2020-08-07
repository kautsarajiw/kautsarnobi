import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  ScrollView,
} from 'react-native';
import {Container, Content, Form, Input, Item, Label, Button, Toast, Icon} from 'native-base';
import {connect} from 'react-redux';
import { verticalScale, moderateScale } from 'react-native-size-matters';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';

//import BASE URL
import url from '../../services/api_services';

//import styles 
import stylesAsset from '../../Assets/Style/StyleAsset';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email:'',
      password:'',
      icon: "eye-off",
      showPassword: true,

      //status email
      errorEmail:false,
      errorPassword:false,

      //loading state
      loadingLogin:false
    }
  }

  validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  };

  validationLogin() {
    const { email, password } = this.state;
    if (email === '' && password === ''){
      this.setState({
        errorEmail:true,
        errorPassword:true,
      })
    } else if (email === '') {
      this.setState({
        errorEmail:true,
        errorPassword:false,
      })
    } else if(!this.validateEmail(email)){
      this.setState({
        errorEmail:true
      })
    } else if (password === '') {
      this.setState({
        errorPassword:true,
        errorEmail:false
      })
    } else {
      this.renderLogin();
    }
  }

  async renderLogin(){
    const { email, password } = this.state;
    this.setState({
      loadingLogin:true
    })
    axios.post(`${url.API}/login`,{
      email: email,
      password: password,
    }).then((res) =>{
      this.setState({
        loadingLogin:false,
        errorEmail:false,
        errorPassword:false,
      })
      this.afterCallbackApi(res)
    }).catch((error) =>{
      this.setState({
        loadingLogin:false,
        password: '',
        errorEmail:false,
        errorPassword:false,
      }, () => {
        Toast.show({
          text: 'Incorrect email / password',
          buttonText: "OK",
          duration: 5000
        })
      })
    })
  }

  async afterCallbackApi(res) {
    await this.props.dispatch({
      type: 'SET_IS_LOGIN',
      meta: {
        //token
        token:res.data.token,
      }
    });

    await this.props.navigation.navigate('Main')
  }

  _changeIcon(){
    this.setState(prevState => ({
      icon: prevState.icon === 'eye' ? 'eye-off' : 'eye',
      showPassword: !prevState.showPassword
    }));
  }

  render() {
    const logoImage = require('../../Assets/Images/logo_nobi.png');

    const {password, loadingLogin, showPassword, errorEmail, errorPassword, icon} = this.state;
    return(
      <Container style={stylesAsset.containerLoginScreen}>
        <LinearGradient start={{x: 0, y: 0.55}} end={{x: 0, y: -0.3}} colors={['#000000', '#152A53']} style={styles.linearGradient}>
          <ScrollView>
            <View style={ stylesAsset.wrapperLogoLogin}>
              <Image resizeMode={'contain'} style={styles.logohHeader} source={logoImage} />
            </View>

            <Form style={ stylesAsset.wrapperFormLoginScreen}>
              <Label style={ stylesAsset.labelFormLoginScreen}>E-mail Address</Label>
              <Item regular style={ stylesAsset.styleItemInput}>
                <Input placeholder={'Enter E-mail Address'} placeholderTextColor={'#EAEAEA'} autoCapitalize={'none'} onChangeText={(text) => this.setState({email:text})} keyboardType={'email-address'} style={ stylesAsset.inputLoginScreen} />
              </Item>
              {
                errorEmail
                  ?
                    <Label style={ stylesAsset.labelError}>Invalid E-mail Address</Label>
                  :
                    null
              }
              
              <Label style={[stylesAsset.labelFormLoginScreen, {marginTop:moderateScale(15)}]}>Password</Label>
              <Item regular style={ stylesAsset.styleItemInput}>
                <Input placeholder={'Enter Password'} placeholderTextColor={'#EAEAEA'} value={password} secureTextEntry={showPassword} onChangeText={(text) => this.setState({password:text})} style={ stylesAsset.inputLoginScreen} />
                <Icon type={'Ionicons'} name={icon} style={{color:'#9D9FA0', fontSize:moderateScale(20)}} onPress={() => this._changeIcon()} />
              </Item>
              {
                errorPassword
                  ?
                    <Label style={ stylesAsset.labelError}>Invalid Password</Label>
                  :
                    null
              }
            </Form>
          </ScrollView>
          
          
          <Button disabled={loadingLogin} onPress={() => this.validationLogin()} style={loadingLogin ? stylesAsset.buttonMasukLoginGetAPIScreen : stylesAsset.buttonMasukLoginScreen} full primary>
            {
              loadingLogin
                ?
                  <ActivityIndicator size="small" color={'#FFFFFF50'} />
                :
                  <Text style={stylesAsset.textButtonMasukLoginScreen}>Login</Text>
            }
          </Button>
        </LinearGradient>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  statusLogin: state.AppReducerPersist.appIsLogin,
})
export default connect(mapStateToProps)(Login);
 
const styles = StyleSheet.create({
  logohHeader: {
    width: 60, 
    height: 15, 
  },
  linearGradient: {
    flex: 1,
    paddingLeft: moderateScale(23),
    paddingRight: moderateScale(23),
  },
});

