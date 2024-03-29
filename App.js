import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Pressable, FlatList, Modal } from 'react-native';
import { useState } from 'react';
import {Formulario, InformacionPaciente, Paciente} from './src/components/';

export default function App() {
  const [modalVisible,setModalVisible]=useState(false);
  const [modalPaciente, setModalPaciente] = useState(false)
  const [pacientes,setPacientes]=useState([])
  const [paciente,setPaciente]=useState({})

  const eliminarPaciente=(id)=>{
    const pacientesActualizados= pacientes.filter((paciente)=> paciente.id != id)
    setPacientes(pacientesActualizados)
  }

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
      <Modal
          visible={modalVisible} 
        >
        <Formulario 
          setModalVisible={setModalVisible} 
          setPacientes={setPacientes}
          pacientes={pacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
      </Modal>
      {pacientes.length===0 ?
        <Text style={styles.textoNohayPacientes}>No hay pacientes</Text> :
        <FlatList
          data={pacientes}
          keyExtractor={(item)=> item.id}
          renderItem={({item})=>
            (<Paciente 
                item={item}
                setPaciente={setPaciente}
                setModalPaciente={setModalPaciente}
                eliminarPaciente={eliminarPaciente}
            />)
          }
        />
        }
        <Modal visible={modalPaciente}>
          <InformacionPaciente
              paciente={paciente}
              setPaciente={setPaciente}
              setModalPaciente={setModalPaciente}
          />
        </Modal>
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
    fontSize:25,
    textTransform: 'uppercase',
    color: '#374151',
    fontWeight: '000',
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
  },
  textoNohayPacientes:{
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 18,
    marginVertical:10,
  }
});
