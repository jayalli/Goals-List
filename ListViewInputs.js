import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const ListViewInputs = props => {

    return (
        <TouchableOpacity acticeOpacity= {1.0} onPress = {props.onDelete.bind(this, props.keys)}>
            <View style={styled.listitem} >
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styled = StyleSheet.create({

    listitem: {
        padding: 10,
        backgroundColor: '#ccc',
        borderColor: 'blue',
        borderWidth: 1,
        marginVertical: 10

    }


})

export default ListViewInputs