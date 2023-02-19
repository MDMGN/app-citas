import React from 'react'
import {Text,View, StyleSheet} from 'react-native'

function Paciente({item}) {
  return (
    <View style={styles.container}>
        <View>
            <Text  style={styles.label}>Paciente: </Text>
            <Text  style={styles.texto}>{item.mascota}</Text>
        </View>
        <View>
            <Text  style={styles.label}>Alta: </Text>
            <Text  style={styles.texto}>{item.date.toLocaleString()}</Text>
        </View>
        <View>
            <Text  style={styles.label}>Sintomas: </Text>
            <Text  style={styles.texto}>{item.sintomas}</Text>
        </View>
        <View style={styles.containerBtn}>
            <Text style={[styles.btn,styles.btnEditar]}>Editar</Text>
            <Text style={[styles.btn,styles.btnEliminar]}>Eliminar</Text>
        </View>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFF',
        marginHorizontal: 20,
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        borderBottomWidth:10
    },
    label:{
        fontSize: 18,
        fontWeight: 'bold',
    },
    texto:{
        fontSize: 16,
        fontWeight: '900',
        color: '#6D28A9',
        textAlign: 'center'
    },
    containerBtn:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btn:{
        backgroundColor:'#ffe'
    }
})

export default Paciente