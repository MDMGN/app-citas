import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Pressable } from 'react-native';
import { useState } from 'react';
import Formulario from './src/components/Formulario';

export default function App() {
  const [modalVisible,setModalVisible]=useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Administrador de citas{' '}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>
      <Pressable
      style={styles.btnNuevaCita}
      onPress={()=> setModalVisible(!modalVisible)}
      >
        <Text style={styles.btnTextNuevaCita}>Nueva Cita</Text>
      </Pressable>
      <Formulario modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <StatusBar style='dark' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    marginVertical: 50,
  },
  titulo:{
    textAlign: 'center',
    fontSize:30,
    textTransform: 'uppercase',
    color: '#374151',
    fontWeight: '600',
  },
  tituloBold:{
    fontWeight: '900',
    color: '#6D28D9'
  },
  btnNuevaCita:{
    backgroundColor: '#6D28D9',
    padding: 20,
    marginVertical: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  btnTextNuevaCita:{
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase',
  }
});
