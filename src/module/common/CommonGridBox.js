import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Style from '../Style';

const CommonGridBox = ({ value, onPress }) => {
    if (onPress === undefined) {
        return (
            <View style={Style.GridViewBlockStyle}>
                <Text style={Style.GridViewInsideTextItemStyle}>{value}</Text>
            </View>
        );
    } else {
        return (
            <TouchableOpacity style={Style.GridViewBlockStyle}
                onPress={onPress} >

                <Text style={Style.GridViewInsideTextItemStyle}>{value}</Text>
            </TouchableOpacity>
        )
    }

}

export default CommonGridBox;