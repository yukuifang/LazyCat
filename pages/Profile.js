/**
 * Created by fangyukui on 2018/3/3.
 */


import React,{Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class Profile extends Component {

    render() {
        return(
            <View style={styles.containers}>
                <Text>Profile</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    containers: {
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
    }
});