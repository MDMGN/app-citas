import React, {useState, useEffect} from 'react'
import { Text, SafeAreaView, 
    TextInput,StyleSheet, View, 
    ScrollView, Pressable, Alert} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

export function Formulario({setModalVisible, pacientes, setPacientes, paciente: pacienteApp, setPaciente}) {
    const [mascota, setMascota]=useState('')
    const [propietario, setPropietario]=useState('')
    const [email, setEmail]=useState('')
    const [phone, setPhone]=useState('')
    const [date,setDate]=useState(new Date())
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [sintomas, setSintomas]=useState('')

    useEffect(()=>{
        if(Object.keys(pacienteApp).length > 0){
            setMascota(pacienteApp.mascota)
            setPropietario(pacienteApp.propietario)
            setEmail(pacienteApp.email)
            setPhone(pacienteApp.phone)
            setDate(pacienteApp.date)
            setSintomas(pacienteApp.sintomas)
            setModalVisible(false)
        }
    },[pacienteApp])

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
      const handleModal=()=>{
        setMascota('')
        setPropietario('')
        setEmail('')
        setPhone('')
        setDate(new Date())
        setSintomas('')
        setModalVisible(false)
        setPaciente({})
        
      }
      //Agregar nuevo paciente desde el formulario
      const agregarPaciente=()=>{
        
        if([paciente,propietario,email,phone,date,sintomas].includes('')){
            Alert.alert(
                'Error',
                'Todos los campos son obligatorios.'
            )
            return
        }
        const paciente={
            mascota,
            propietario,
            email,
            phone,
            date,
            sintomas
        }
        if(pacienteApp.id){
            paciente.id=pacienteApp.id;
            const pacienteActulizado=pacientes.map(pacienteState=> 
                pacienteState.id===pacienteApp.id ? paciente : pacienteState)
                setPacientes(pacienteActulizado)
                setPaciente({})
        }else{
            paciente.id=Date.now();
            setPacientes([...pacientes,paciente])
        }

        setMascota('')
        setPropietario('')
        setEmail('')
        setPhone('')
        setDate(new Date())
        setSintomas('')
        setModalVisible(false)
      }
      const formatearFecha=()=>{
            const opciones={ year: 'numeric', month: 'long', day: 'numeric' }
            const fecha=date.toLocaleString('es-ES',opciones)
            return fecha;
      }
  return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.titulo}>{(pacienteApp.id ? 'Modificar' : 'Nueva')} {' '}
                    <Text style={styles.tituloBold}>Cita</Text>
                </Text>
                <Pressable
                    style={[styles.btn,styles.btnCerrar]}
                    onPress={handleModal}
                >
                    <Text style={styles.btnText}>x Cerrar</Text>
                </Pressable>
                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre Paciente</Text>
                    <TextInput 
                        style={styles.input}
                        keyboardType='default'
                        placeholder='Nombre Paciente'
                        placeholderTextColor={'#666'}
                        value={mascota}
                        onChangeText={setMascota}
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
                    <Text style={styles.input}>{formatearFecha()}</Text>
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
                        placeholder='Sintomas del Paciente'
                        placeholderTextColor={'#666'}
                        value={sintomas}
                        onChangeText={setSintomas}
                        multiline={true}
                        numberOfLines={4}
                    />
                </View>
                <Pressable
                    style={[styles.btn,styles.btnAceptar]}
                    onPress={agregarPaciente}
                >
                    <Text style={styles.btnText}>Aceptar</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
  )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor: '#6D28D9',
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
    btn:{
        padding: 15,
        marginTop: 20,
        marginHorizontal: 30,
        borderRadius: 10,
        },
    btnText:{
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 15,
        fontWeight: '900',
        color: '#FFF'
    },
    btnCerrar:{
        backgroundColor: '#6D28A8',
    },
    btnAceptar:{
        backgroundColor: '#FFA500',
        marginBottom: 30,
    }
})