import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import Style from './Style';
import CommonGridBox from './common/CommonGridBox';

let CURRENT_ELEMENT_INDEX = 0;
const MAX_ELEMENTS_TO_SHOW = 8;
const MASTER_DATA = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const GLOBAL_STRING = require('../../src/constants/String');

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ItemsToShow: [],
        }
    }

    componentWillMount() {
        this._loadData();
    }

    render() {
        return (
            <View style={Style.ContainerStyle}>
                <FlatList
                    data={this.state.ItemsToShow}
                    renderItem={this._renderGridItem}
                    numColumns={3}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }

    _loadData = () => {
        const elementsToShow = [];
        for (var j = 0; j < MAX_ELEMENTS_TO_SHOW; j++) {
            if (CURRENT_ELEMENT_INDEX >= MASTER_DATA.length) {
                CURRENT_ELEMENT_INDEX = 0;
            }
            elementsToShow.push(MASTER_DATA[CURRENT_ELEMENT_INDEX++]);
        }

        elementsToShow.push(GLOBAL_STRING.LOAD_DATA);
        this.setState({ ItemsToShow: elementsToShow });
    }

    // FlatList Item View
    _renderGridItem = ({ item, index }) => {
        if (index === MAX_ELEMENTS_TO_SHOW ) {
            return (
                <CommonGridBox
                    value={item}
                    onPress={() => this._loadNextData()} />
            );
        }
        return (
            <CommonGridBox
                value={item} />
        );
    }

    _loadNextData(){
        this._loadData();
    }
}

export default Main;

