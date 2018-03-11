/**
 * Created by fangyukui on 2018/3/11.
 */

import React,{Component,PureComponent} from 'react'
import {
    View,
    StyleSheet,
    TextInput,
    Text,
    FlatList,
    TouchableOpacity,
    Image
}from 'react-native'
import RepositoryCell from '../Cell/RepositoryCell'
import DataRepository from '../expand/dao/DataRepository'
import ScrollableTabView,{ScrollableTabBar} from 'react-native-scrollable-tab-view'
const Url = 'https://api.github.com/search/repositories?q='
const Query = '&sort=stars'

export default class Popular extends Component{

    render(){
        return (
            <View style={styles.container}>

                <ScrollableTabView renderTabBar={()=><ScrollableTabBar/>}>
                    <TabVC tabLabel="ios">IOS</TabVC>
                    <TabVC tabLabel="python">android</TabVC>
                    <TabVC tabLabel="js">android</TabVC>
                    <TabVC tabLabel="c">android</TabVC>
                    <TabVC tabLabel="reactNative">android</TabVC>
                    <TabVC tabLabel="swift">android</TabVC>

                </ScrollableTabView>
            </View>

        )
    }

}

class TabVC extends Component{
    constructor(props){
        super(props)
        this.dataRepository = new DataRepository()
        this.state = {
            result:[]
        }
    }
    render(){
        return (
            <View style={styles.container}>
                <FlatList
                    data={ this.state.result }
                    keyExtractor={ this._keyExtractor }
                    renderItem={ this._renderItem }
                    onEndReachedThreshold={0.1}
                    onEndReached={ this._onEndReached }
                />

            </View>
        )

    }
    componentDidMount() {
        this.loadData()
    }
    _keyExtractor = (item, index) => index;

    // 加载item布局
    _renderItem = ({item}) =>{
        return(
            <RepositoryCell item={item}/>

        );
    }

    _onEndReached = () => {

    }


    loadData(){
        let url = this.getUrl(this.props.tabLabel)
        this.dataRepository.fetchNetRepository(url)
            .then(result=>{
                this.setState({
                    result:result.items

                })
            })
            .catch(error=>{
                console.log(error)

            })

    }
    getUrl(key){
        return Url + key + Query
    }
}



const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    itemContainer:{

    }

})
