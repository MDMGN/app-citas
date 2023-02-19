import React, {useState} from 'react'
import {Modal, Text, SafeAreaView, TextInput,StyleSheet, View, ScrollView, Pressable} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

function Formulario({modalVisible, setModalVisible}) {
    const [paciente, setPaciente]=useState('')
    const [propietario, setPropietario]=useState('')
    const [email, setEmail]=useState('')
    const [phone, setPhone]=useState('')
    const [date,setDate]=useState(new Date())
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [sintomas, setSintomas]=useState('')


    //Expo Datepicker
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
      };
      const showMode = (currentMode) => {
        if (Platform.OS === 'android') {
          setShow(true);
          // for iOS, add a button that closes the picker
        }
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };
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
                    <Pressable 
                        onPress={()=>setModalVisible(!modalVisible)}
                    >
                        <Text style={styles.btnCerrar}>x Cerrar</Text>
                    </Pressable>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre Paciente</Text>
                        <TextInput 
                            style={styles.input}
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
                            style={styles.input}
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
                            style={styles.input}
                            keyboardType='email-address'
                            placeholder='Email Propietario'
                            placeholderTextColor={'#666'}
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Teléfono Propietario</Text>
                        <TextInput 
                            style={styles.input}
                            keyboardType='number-pad'
                            placeholder='Teléfono Paciente'
                            placeholderTextColor={'#666'}
                            value={phone}
                            onChangeText={setPhone}
                            maxLength= {9}
                        />
                    </View>
                    <View style={styles.campo}>
                    <Text style={styles.label}>Alta</Text>
                    <Pressable onPress={showDatepicker}>
                        <Text style={styles.input}>{date.toLocaleDateString()}</Text>
                    </Pressable>
                        {show && (
                        <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}                        
                        onChange={onChange}
                        />
                    )}
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Sintomas Paciente</Text>
                        <TextInput 
                            style={[styles.input,styles.sintomasInput]}
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
        marginBottom: 10
    },
    label:{
        color: '#FFF',
        marginBottom: 10,
        marginTop: 15,
        fontSize: 20,
        fontWeight: '600',
    },
    input:{
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
    },
    sintomasInput:{
        height: 100,
    },
    btnCerrar:{
        textAlign: 'center',
        padding: 15,
        backgroundColor: 'rgba(0,0,0,.45)',
        marginTop: 20,
        marginHorizontal: 45,
        color: '#FFF'
        }
})

export default Formulario