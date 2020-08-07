import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  Linking
} from 'react-native';
import {Container, Content, Form, Input, Item, Label, Button, Toast, Icon} from 'native-base';
import {connect} from 'react-redux';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import axios from 'axios';

//import BASE URL
import url from '../../services/api_services';

//import styles 
import stylesLightMode from '../../Assets/Style/LightMode';
import stylesDarkMode from '../../Assets/Style/DarkMode';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email:'',
      password:'',
      icon: "eye-off",
      showPassword: true,

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
    if (email === '') {
      Toast.show({
        text: "Invalid E-mail Adress",
        buttonText: "OK",
        duration: 5000
      });
    } else if(!this.validateEmail(email)){
      Toast.show({
        text: "Silakan masukan email dengan benar",
        buttonText: "OK",
        duration: 5000
      });
    } else if (password === '') {
      Toast.show({
        text: "Silakan masukan password anda",
        buttonText: "OK",
        duration: 5000
      });
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
      is_mobile:true
    }).then((res) =>{
      this.setState({
        loadingLogin:false
      })
      this.afterCallbackApi(res)
    }).catch((error) =>{
      this.setState({
        loadingLogin:false,
        password: '',
      }, () => {
        Toast.show({
          text: error.data.message,
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
    const imageDark = require('../../Assets/Images/logo_langgan.png');
    const imageLight = require('../../Assets/Images/logo_langgan_dark.png');

    const {darkModeProps} = this.props;
    const {password, loadingLogin} = this.state;
    return(
      <Container style={darkModeProps ? stylesDarkMode.containerLoginScreen : stylesLightMode.containerLoginScreen}>
        <View style={darkModeProps ? stylesDarkMode.wrapperTextSDLoginScreen : stylesLightMode.wrapperTextSDLoginScreen}> 
          <Text style={darkModeProps ? stylesDarkMode.textSDLoginScreen : stylesLightMode.textSDLoginScreen}>Selamat Datang di</Text>
        </View>

        {
          darkModeProps
            ?
              <Image resizeMode={'contain'} style={styles.logohHeader} source={imageDark} />
            :
              <Image resizeMode={'contain'}  style={styles.logohHeader} source={imageLight} />
        }

        <View style={darkModeProps ? stylesDarkMode.wrapperTextKelolaLoginScreen : stylesLightMode.wrapperTextKelolaLoginScreen}> 
          <Text style={darkModeProps ? stylesDarkMode.textKelolaMasukLoginScreen : stylesLightMode.textKelolaMasukLoginScreen}>Kelola Websitemu disini :)</Text>
        </View>

        <Form style={darkModeProps ? stylesDarkMode.wrapperFormLoginScreen : stylesLightMode.wrapperFormLoginScreen}>
          <Item floatingLabel last style={darkModeProps ? stylesDarkMode.styleItemInput : stylesLightMode.styleItemInput}>
            <Label style={darkModeProps ? stylesDarkMode.labelFormLoginScreen : stylesLightMode.labelFormLoginScreen}>Email</Label>
            <Input autoCapitalize={'none'} onChangeText={(text) => this.setState({email:text})} keyboardType={'email-address'} style={darkModeProps ? stylesDarkMode.inputLoginScreen : stylesLightMode.inputLoginScreen} />
          </Item>
          
          <Item floatingLabel last style={darkModeProps ? stylesDarkMode.styleItemInput : stylesLightMode.styleItemInput}>
            <Label style={darkModeProps ? stylesDarkMode.labelFormLoginScreen : stylesLightMode.labelFormLoginScreen}>Password</Label>
            <Input value={password} secureTextEntry={this.state.showPassword} onChangeText={(text) => this.setState({password:text})} style={darkModeProps ? stylesDarkMode.inputLoginScreen : stylesLightMode.inputLoginScreen} />
            <Icon type={'Ionicons'} name={this.state.icon} style={{color:'#F7FFFF'}} onPress={() => this._changeIcon()} />
          </Item>
          
          <Button disabled={loadingLogin} onPress={() => this.validationLogin()} style={darkModeProps ? stylesDarkMode.buttonMasukLoginScreen : stylesLightMode.buttonMasukLoginScreen} full primary>
            {
              loadingLogin
                ?
                  <ActivityIndicator size="small" color={darkModeProps ? '#F7FFFF' : '#15BFAE'} />
                :
                  <Text style={darkModeProps ? stylesDarkMode.textButtonMasukLoginScreen : stylesLightMode.textButtonMasukLoginScreen}>Login</Text>
            }
          </Button>
        </Form>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  statusLogin: state.AppReducerPersist.appIsLogin,
  darkModeProps: state.AppReducerPersist.darkMode,
})
export default connect(mapStateToProps)(Login);
 
const styles = StyleSheet.create({
  logohHeader: {
    width: 200, 
    height: 40, 
  },
});

