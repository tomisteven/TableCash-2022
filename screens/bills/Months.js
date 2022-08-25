import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image, ActivityIndicator } from 'react-native'

const Months = (props) => {

    console.log(props);


    return (
        <View style={styles.container}>
            <Text>Months</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
        
    }
})

export default Months