import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity, Modal } from 'react-native';

export default function ButtonBlock() {
    
    const [modalVisible, setModalVisible] = useState(false);
    

    return (
        <View>
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {                    
                    setModalVisible(!modalVisible);
                }}
            >
            <View>
                <View>
                    {/* <Text style={styles.modalText}>Hello World!</Text>
                    <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                    >
                    <Text style={styles.textStyle}>Hide Modal</Text>
                    </Pressable> */}
                </View>
            </View>
            </Modal>
        </View>
        <View style={styles.blockAttributes}>
            <TouchableOpacity style={styles.buttonAttributs}
                // onPress={}
            />
        </View>

    )
}

const styles=StyleSheet.create({
    blockAttributes: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonAttributs: {
        height: 70,
        width: '85%',
        backgroundColor: 'orange',
        color: 'white',
        fontWeight: 'bold',
        borderWidth: 1,
        borderRadius: 45,
    }
})