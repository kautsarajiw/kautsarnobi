import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, FlatList} from 'react-native';
import {connect} from 'react-redux';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { List, ListItem, Left, Right } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class DataList extends Component {
  render() {
    const {
      dataList,
      dataFilter
    } = this.props;
    
    return (
      <View style={styles.wrapperDataList}>
        <FlatList 
          data={dataFilter.length === 0 ? dataList : dataFilter}
          keyExtractor={(item, index) => index.toString()}
          style={{width:'100%', height:'100%'}}
          renderItem={({item, index}) => ( 
            <List>
              <ListItem style={{borderBottomColor:'#9D9FA0'}}>
                <Left>
                  <Image style={styles.imageList} resizeMode={'contain'} source={{uri:item.image}} />
                  <Text style={{color:'#fff', fontWeight:'bold', fontSize:hp('1.2%')}}>{item.ticker}</Text>
                </Left>
                <Right>
                  <Text style={{color:'#fff', fontSize:hp('1.2%')}}>{item.amount.slice(0, 10)}</Text>
                </Right>
              </ListItem>
            </List>
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  dataList:state.ReducerList.dataList
})

export default connect(mapStateToProps)(DataList);

const styles = StyleSheet.create({
  wrapperDataList:{
    alignItems:'center'
  },
  imageList:{
    width:moderateScale(16), 
    height:moderateScale(16),
    alignSelf: 'center',
    marginRight:moderateScale(10)
  }
});