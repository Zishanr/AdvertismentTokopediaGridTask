import React from 'react';
import { StyleSheet, Platform, Dimensions } from 'react-native';

const GLOBAL_COLORS = require('../constants/Colors');
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height -50;
const MARGIN = 5;


export default Styles = StyleSheet.create(
    {
        ContainerStyle: {
            flex: 1,
            
        },
        GridViewBlockStyle: {
            justifyContent: 'center',
            flex: 1,
            alignItems: 'center',
            height: (HEIGHT/3) - MARGIN,
            width : (WIDTH/3) - MARGIN,
            margin: MARGIN,
            backgroundColor: '#00BCD4'

        },
        GridViewInsideTextItemStyle: {

            color: '#fff',
            padding: 10,
            fontSize: 18,
            justifyContent: 'center',
        },
    }
);