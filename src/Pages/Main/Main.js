import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Toast } from 'native-base';
import {connect} from 'react-redux';
import axios from 'axios';

//import base url
import url from '../../services/api_services';

//import styles 
import stylesLightMode from '../../Assets/Style/LightMode';
import stylesDarkMode from '../../Assets/Style/DarkMode';

//import pages
import Dashboard from './Screens/Dashboard/Dashboard';

class MainScreens extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedTab: "",

      pageNow:1,
      tampilanDataPerpage:50,
    }
  }

  componentDidMount(){
    const {
      pageNow,
      tampilanDataPerpage
    } = this.state;

    this.setState({
      selectedTab: "dashboard"
    });

    // axios.get(`${url.API}/dashboard`, {
    //   headers: { Authorization: `Bearer ${this.props.token}` }
    // }).then(res => {
  
    // }).catch(error => {
    //   Toast.show({
    //     text: "Sesi login anda telah berakhir, silahkan login kembali.",
    //     buttonText: "",
    //     buttonText: "OK",
    //     duration: 5000
    //   });

    //   this.props.dispatch({
    //     type: 'SET_IS_LOGOUT',
    //   });
    //   this.props.navigation.navigate('Login')
    // });
  }

  renderSelectTab() {
    const {selectedTab} = this.state;

    switch (selectedTab) {
      case "dashboard":
        return <Dashboard navigation={this.props.navigation} />;
        break;

      default:
    }
  }

  render() {
    const {selectedTab} = this.state;
    const {darkModeProps} = this.props;
    return (
      <Container>
        {this.renderSelectTab()}
        <Footer style={darkModeProps ? stylesDarkMode.wrapperFooterNavbar : stylesLightMode.wrapperFooterNavbar}>
          <FooterTab style={darkModeProps ? stylesDarkMode.wrapperFooterNavbar : stylesLightMode.wrapperFooterNavbar}>
            <Button vertical onPress={() => this.setState({ selectedTab: "dashboard" })}>
              <Icon
                name="dashboard"
                type={"MaterialIcons"}
                style = {
                  selectedTab === "dashboard"
                    ? 
                      darkModeProps 
                        ?
                          stylesDarkMode.iconNavbarActive
                        :
                          stylesLightMode.iconNavbarActive
                    : 
                      darkModeProps 
                        ?
                          stylesDarkMode.iconNonNavbarActive
                        :
                          stylesLightMode.iconNonNavbarActive
                }
              />
              <Text
                style = {
                  selectedTab === "dashboard"
                    ? 
                      darkModeProps
                        ?
                          stylesDarkMode.styleFontActiveNavbar
                        :
                          stylesLightMode.styleFontActiveNavbar
                    : 
                      darkModeProps
                        ?
                          stylesDarkMode.styleFontNonActiveNavbar
                        :
                          stylesLightMode.styleFontNonActiveNavbar
                }
              >
                Dashboard
              </Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  darkModeProps: state.AppReducerPersist.darkMode,

  //reducer auth
  token: state.AppReducerPersist.token,

  //data id list provinsi, kota, kecamatan
  id_kota: state.AppReducerPersist.id_kota,
  id_prov: state.AppReducerPersist.id_prov,
  id_kecamatan: state.AppReducerPersist.id_kecamatan,
})
export default connect(mapStateToProps)(MainScreens);

const styles = StyleSheet.create({

});


