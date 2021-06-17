import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
//import of main components
import Header from './components/Header';
import CompanionBlock from './components/CompanionBlock';
import QuotationsBlock from './components/QuotationsBlock';
import ButtonBlock from './components/ButtonBlock';


export default function App() {
  
const [playerName, setPlayerName] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
        <Header title='ReactWar'/>
        {/* CompanionBlock */}
        <CompanionBlock playerName={playerName}/>
        {/* quotationBlock */}
        <QuotationsBlock/>
        {/* buttonBlock */}
        <ButtonBlock/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
});
