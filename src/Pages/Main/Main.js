import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Toast } from 'native-base';
import {connect} from 'react-redux';
import axios from 'axios';
import { verticalScale, moderateScale } from 'react-native-size-matters';

//import base url
import url from '../../services/api_services';

//import styles 
import stylesAsset from '../../Assets/Style/StyleAsset';

//import pages
import List from './Screens/List/List';
import Dashboard from './Screens/Dashboard/Dashboard';

class MainScreens extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedTab: "",

    }
  }

  componentDidMount(){
    this.setState({
      selectedTab: "dashboard"
    });


    axios.post(`${url.API}/dashboard`, {
      token:this.props.token      
    }).then(res => {
      this.props.dispatch({
        type: 'GET_DATA_LIST',
        payload:axios.get(`${url.API}/list`)
      });

      this.props.dispatch({
        type: 'GET_DATA_DASHBOARD',
        payload:axios.post(`${url.API}/dashboard`, {
          token:this.props.token
        })
      });
    }).catch(error => {
      Toast.show({
        text: "Sesi login anda telah berakhir, silahkan login kembali.",
        buttonText: "",
        buttonText: "OK",
        duration: 5000
      });

      this.props.dispatch({
        type: 'SET_IS_LOGOUT',
      });
      this.props.navigation.navigate('Login')
    });
  }

  renderSelectTab() {
    const {selectedTab} = this.state;

    switch (selectedTab) {
      case "dashboard":
        return <List navigation={this.props.navigation} />;
        break;

      case "profile":
        return <Dashboard navigation={this.props.navigation} />;
        break;

      default:
    }
  }

  render() {
    const {selectedTab} = this.state;
    return (
      <Container>
        {this.renderSelectTab()}
        <Footer style={stylesAsset.wrapperFooterNavbar}>
          <FooterTab style={stylesAsset.wrapperFooterNavbar}>
            <Button vertical onPress={() => this.setState({ selectedTab: "dashboard" })}>
              {
                selectedTab === "dashboard"
                  ?
                    <Image resizeMode={'contain'} style={styles.iconBar} source={require('../../Assets/Images/icon_bar_active.png')} />
                  :
                    <Image resizeMode={'contain'} style={styles.iconBar} source={require('../../Assets/Images/icon_bar.png')} />
              }
            </Button>
          </FooterTab>

          <FooterTab style={stylesAsset.wrapperFooterNavbar}>
            <Button vertical onPress={() => this.setState({ selectedTab: "profile" })}>
              {
                selectedTab === "profile"
                  ?
                    <Image resizeMode={'contain'} style={styles.iconBar} source={require('../../Assets/Images/icon_nobi_active.png')} />
                  :
                    <Image resizeMode={'contain'} style={styles.iconBar} source={require('../../Assets/Images/icon_nobi.png')} />
              }
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  //reducer auth
  token: state.AppReducerPersist.token,
})
export default connect(mapStateToProps)(MainScreens);

const styles = StyleSheet.create({
  iconBar:{
    width:moderateScale(24),
    height:verticalScale(23)
  },
});


