/**
 * Created by fangyukui on 2018/3/11.
 */

import React,{PureComponent} from 'react'
import {
    View,
    StyleSheet,
    TextInput,
    Text,
    FlatList,
    TouchableOpacity,
    Image
}from 'react-native'

export default class RepositoryCell extends PureComponent{
    render(){
        return (
            <View>
                <TouchableOpacity
                    onPress={this._onPress}>
                    <View style={styles.container}>
                        <Text style={{fontSize:18,color:'blue',fontWeight:'bold'}}>{this.props.item.full_name}</Text>
                        <Text style={{fontSize:13}}>{this.props.item.description}</Text>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Text>autho: </Text>
                            <Image style={{width:35,height:35,borderRadius:17,marginRight:44}} source={{uri:this.props.item.owner.avatar_url}}/>
                            <Text>star: {this.props.item.stargazers_count}</Text>
                        </View>
                        <View style={{position:'absolute',left:8,right:8,bottom:-6,height:1, backgroundColor:'lightgray'}}></View>

                    </View>
                </TouchableOpacity>
            </View>

        )
    }

}

const styles =StyleSheet.create({
    container:{
        flexDirection:'column',
        margin:15


    }
})


