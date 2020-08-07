import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {verticalScale, moderateScale } from 'react-native-size-matters';
import {Container, Header, Left, Button, Icon, Item, Input} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {ContentLoader, Bullets}  from 'react-native-easy-content-loader';
import PTRView from 'react-native-pull-to-refresh';
import axios from 'axios';

//import base url
import url from '../../../../services/api_services';

//import component
import DataList from './Components/DataList';

//import styles 
import stylesAsset from '../../../../Assets/Style/StyleAsset';

class List extends Component {
  constructor(props){
    super(props);

    this.state = {
      //search semua data
      stateSearch:'',
      newDataAfterFilter:[],
    }

    this._refreshPage = this._refreshPage.bind(this);

  }

  searchData(value){
    const newData = this.props.dataList.filter((item) => {
      return item.ticker.indexOf(value.toUpperCase()) > -1;
    });

    this.setState({
      newDataAfterFilter: newData,
      stateSearch:value,
    });
  }

  _refreshPage() {
    return new Promise((resolve) => {
      this.props.dispatch({
        type: 'GET_DATA_LIST',
        payload:axios.get(`${url.API}/list`)
      });
      setTimeout(()=>{resolve()}, 2000)
    });
  }

  render() {
    const {
      stateSearch,
      newDataAfterFilter
    } = this.state;

    const {
      statusGetDataList
    } = this.props;

    return (
      <Container style={stylesAsset.containerBackground}>
        <LinearGradient start={{x: 0, y: 0.55}} end={{x: 0, y: -0.3}} colors={['#000000', '#152A53']} style={styles.linearGradient}>
          <PTRView onRefresh={this._refreshPage} offset={100}>
            <Header transparent searchBar style={{marginTop:moderateScale(16)}}>
              <Left style={{flex: null}}>
                <Button transparent onPress={() => alert('Use Nobi')}>
                  <Icon name="chevron-back"/>
                </Button>
              </Left>
              <Item style={{backgroundColor:'#223965', borderRadius:10}}>
                <Icon name="search" style={{color:'#FFFFFF'}}/>
                <Input 
                  placeholder="Search" placeholderTextColor={'#9D9FA0'} 
                  style={{color:'#EAEAEA'}}
                  value={stateSearch}
                  onChangeText={(text) => this.searchData(text)}
                />
              </Item>
            </Header>

            <View style={{padding:moderateScale(20)}}>
              {
                statusGetDataList
                  ?
                    <Bullets active listSize={7} animationDuration={3} containerStyles={{paddingTop:moderateScale(20)}} titleStyles={styles.listLoader} active loading={true} />
                  :
                    <DataList dataFilter={newDataAfterFilter}/>
              }
            </View>
          </PTRView>
        </LinearGradient>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  dataList:state.ReducerList.dataList,
  statusGetDataList:state.ReducerList.statusGetDataList,
})

export default connect(mapStateToProps)(List);

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  listLoader:{
    width:'100%', 
    height:verticalScale(20),
  },
});