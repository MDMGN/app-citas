import { SafeAreaView, StyleSheet, Text, View, Pressable } from "react-native";

export function InformacionPaciente({
  paciente,
  setPaciente,
  setModalPaciente,
}) {
  return (
    <SafeAreaView style={styles.contenedor}>
      <Text style={styles.titulo}>
        Información del {""}
        <Text style={styles.tituloBold}>Paciente</Text>
      </Text>

      <Pressable
        style={styles.btnCerrar}
        onPress={() => {
          setModalPaciente(false);
          setPaciente({});
        }}
      >
        <Text style={styles.btnCerrarTexto}>Cerrar X</Text>
      </Pressable>

      <View style={styles.contenido}>
        <View style={styles.campo}>
          <Text style={styles.label}> Paciente: </Text>
          <Text style={styles.valor}>{paciente.mascota}</Text>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Propietario:</Text>
          <Text  style={styles.valor}>{paciente.propietario}</Text>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Email:</Text>
          <Text  style={styles.valor}>{paciente.email} </Text>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Teléfono:</Text>
          <Text style={styles.valor}>{paciente.phone}</Text>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Fecha de alta:</Text>
          <Text style={styles.valor}>{paciente.date.toLocaleString()}</Text>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Sintomas:</Text>
          <Text style={styles.valor} numberOfLines={4}>
            {paciente.sintomas}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: "#F59E08",
    flex: 1,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 30,
    color: "#FFF",
  },
  tituloBold: {
    fontWeight: "900",
  },
  btnCerrar: {
    marginVertical: 30,
    backgroundColor: "#5827A4",
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 10,
  },
  btnCerrarTexto: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "900",
    fontSize: 16,
    textTransform: "uppercase",
  },
  contenido: {
    backgroundColor: "#FFF",
    marginHorizontal: 30,
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  campo: {
    marginBottom: 10,
  },
  label: {
    textTransform: "uppercase",
    color: "#374151",
    fontWeight: "600",
    fontSize: 12,
  },
  valor: {
    fontWeight: "700",
    fontSize: 20,
    color: "#334155",
  },
});
