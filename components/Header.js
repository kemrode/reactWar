import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header({title}){
    return (
        <View style={styles.block}>
            <View style={styles.textBlock}>
                <Text style={styles.textAttributes}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        height:60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
    },
    textAttributes: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
    },
    textBlock: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})