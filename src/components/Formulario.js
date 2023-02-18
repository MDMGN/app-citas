import React, {useState} from 'react'
import {Modal, Text, SafeAreaView, TextInput,StyleSheet, View, ScrollView} from 'react-native'

function Formulario({modalVisible}) {
    const [paciente, setPaciente]=useState('')
    const [propietario, setPropietario]=useState('')
    const [email, setEmail]=useState('')
    const [phone, setPhone]=useState('')
    const [sintomas, setSintomas]=useState('')
  return (
        <Modal
        animationType='slide'
        visible= {modalVisible}
        >
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <Text style={styles.titulo}>Nueva {' '}
                        <Text style={styles.tituloBold}>Cita</Text>
                    </Text>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre Paciente</Text>
                        <TextInput 
                            style={styles.label}
                            keyboardType='default'
                            placeholder='Nombre Paciente'
                            placeholderTextColor={'#666'}
                            value={paciente}
                            onChangeText={setPaciente}
                        />
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre Propietario</Text>
                        <TextInput 
                            style={styles.label}
                            keyboardType='default'
                            placeholder='Nombre Propietario'
                            placeholderTextColor={'#666'}
                            value={propietario}
                            onChangeText={setPropietario}
                        />
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Email Propietario</Text>
                        <TextInput 
                            style={styles.label}
                            keyboardType='email-address'
                            placeholder='Nombre Paciente'
                            placeholderTextColor={'#666'}
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Teléfono Propietario</Text>
                        <TextInput 
                            style={styles.label}
                            keyboardType='number-pad'
                            placeholder='Nombre Paciente'
                            placeholderTextColor={'#666'}
                            value={phone}
                            onChangeText={setPhone}
                            maxLength= {9}
                        />
                    </View>
                    <View style={styles.campo}>
                        <Text style={[styles.label, styles.sintomasInput]}>Sintomas Paciente</Text>
                        <TextInput 
                            style={styles.label}
                            keyboardType='default'
                            placeholder='Nombre Paciente'
                            placeholderTextColor={'#666'}
                            value={sintomas}
                            onChangeText={setSintomas}
                            multiline={true}
                            numberOfLines={4}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Modal>
  )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor: '#6D28D9',
        flex: 1,
    },
    titulo:{
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 30,
        color: '#FFF'
    },
    tituloBold:{
        fontWeight: '900',
    },
    campo:{
        marginTop: 40,
        marginHorizontal: 30,
        marginBottom: 100
    },
    label:{
        color: '#FFF',
        marginBottom: 10,
        marginTop: 15,
        fontSize: 20,
        fontWeight: '600',
    },
    input:{
        background: '#FFF',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
    },
    sintomasInput:{
        height: 100,
    }
})

export default Formulario