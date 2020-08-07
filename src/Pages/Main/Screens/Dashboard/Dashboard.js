import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import {Container, Content} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import ContentLoader  from 'react-native-easy-content-loader';
import Spinner from 'react-native-loading-spinner-overlay';
import PTRView from 'react-native-pull-to-refresh';

//import services api
import url from '../../../../services/api_services';

//import styles 
import stylesAsset from '../../../../Assets/Style/StyleAsset';

//import component
import AdsComponent from './Components/AdsDashboard';
import DataComponent from './Components/DataComponent';


class Dashboard extends Component {
  constructor(props){
    super(props);

    this.state = {
      spinner:false,
    }

    this._refreshPage = this._refreshPage.bind(this);

  }

  spinnerOverlay(){
    this.setState({
      spinner:true
    }, () => {
      setTimeout(() => {
        this.setState({
          spinner:false
        })
      }, 5000);
    })
  }

  _refreshPage() {
    return new Promise((resolve) => {
      this.props.dispatch({
        type: 'GET_DATA_DASHBOARD',
        payload:axios.post(`${url.API}/dashboard`, {
          token:this.props.token
        })
      });
      setTimeout(()=>{resolve()}, 2000)
    });
  }

  render() {
    const {statusGetData} = this.props;

    const {spinner} = this.state;
    return (
      <Container style={stylesAsset.containerBackground}>
        <Spinner
          visible={spinner}
          textContent={'Process Deposit...'}
          textStyle={styles.spinnerTextStyle}
          overlayColor={'#b8bbbe99'}
        />
        <LinearGradient start={{x: 0, y: 0.55}} end={{x: 0, y: -0.3}} colors={['#000000', '#152A53']} style={styles.linearGradient}>
          <PTRView onRefresh={this._refreshPage} offset={100}>
            <Content padder style={{padding:moderateScale(5)}}>
              <ContentLoader title={false} pRows={1} animationDuration={3} paragraphStyles={styles.bannerLoader} active aSize={'large'} loading={statusGetData}>
                <AdsComponent />          
              </ContentLoader>

              <ContentLoader title={false} pRows={5} animationDuration={3} paragraphStyles={styles.stylesParagraph} containerStyles={styles.wrapperLoading} active aSize={'large'} loading={statusGetData}>
                <DataComponent navigation={this.props.navigation} deposit={() => this.spinnerOverlay()}/>
              </ContentLoader>
            </Content>
          </PTRView>
        </LinearGradient>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.AppReducerPersist.token,
  statusGetData:state.ReducerDashboard.statusGetData,
})

export default connect(mapStateToProps)(Dashboard);

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  bannerLoader:{
    width:'100%', 
    height:verticalScale(80),
    paddingLeft:30
  },
  wrapperLoading:{
    marginTop:moderateScale(55),
  },
  stylesParagraph:{
    marginTop:verticalScale(30), 
    width:'100%', 
    height:verticalScale(20),
    paddingLeft:30
  },
  spinnerTextStyle: {
    color: '#FFF'
  },
});