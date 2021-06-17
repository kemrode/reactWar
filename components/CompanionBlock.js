import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CompanionBlock(props) {
    return(
        <View style={styles.companionBlock}>
            <View style={styles.textBlock}>
                <Text style={styles.textAttributes}>Compagnon de :</Text>
            </View>
            <View>
                <Text style={styles.underlineText}>{props.playerName || 'kemrode'}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    companionBlock: {
        height: 90,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 20,
    },
    textBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginRight: 10,
    },
    textAttributes: {
        fontSize: 22, 
    },
    underlineText: {
        borderBottomWidth: 2,
        fontSize: 22,
        borderBottomColor: 'black',
        fontWeight: 'bold',
    }
})