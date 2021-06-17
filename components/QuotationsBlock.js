import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';

export default function QuotationsBlock(){

    var quotationDict = ["Intimer un ordre c'est intimider un regard","On ne trouve pas de gens intrépides dans ceux qui ont à perdre",
    " L'impossible est le refuge des poltrons", " Le succès suit le grand homme", "Vaincre n'est rien, il faut profiter du succès",
    "N'interrompez jamais un ennemi qui est en train de commettre une erreur","On tient fort à ce que les jeunes gens étudient la guerre dans les livres, c'est un bon moyen pour avoir de mauvais généraux",
    "Le hasard est le seul roi légitime dans l'univers"];

    const[selection, setSelection] = useState(7);

    function selectQuotation() {
        setSelection = randomGenerate(1,7);
    }

    function randomGenerate(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random()*(max-min + 1)) + min;        
    }
    return (
        <View style={styles.quotationBlock}>
            <View style={styles.blok}>
                <Text style={styles.quotationText}>{quotationDict[selection]}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    quotationBlock: {
        height: 100,
        alignItems:'center',
    },
    blok: {
        justifyContent:'center',
        alignItems:'center',
        marginRight: 5,
        marginLeft: 5,       
    },
    quotationText: {
        fontSize: 34,
        fontWeight: 'bold',
        textAlign: 'justify',
    }
})