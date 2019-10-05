import React, { useState } from "react";
import {
  SafeAreaView,
  Alert,
  StyleSheet,
  AsyncStorage,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import api from "../services/api";

export default function Book({ navigation }) {
  const [date, setDate] = useState("");
  const id = navigation.getParam("id");

  async function handlerSubmit() {
    const user_id = await AsyncStorage.getItem("user");

    await api.post(`/spots/${id}/bookings`, { date }, { headers: { user_id } });

    Alert.alert("Solicitação de reserva enviada.");

    navigation.navigate("List");
  }

  function handleCancel() {
    navigation.navigate("List");
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>SEU EMAIL *</Text>
      <TextInput
        style={styles.input}
        placeholder="Qual data você que reservar?"
        placeholderTextColor="#eee"
        autoCapitalize="words"
        autoCorrect={false}
        value={date}
        onChangeText={setDate}
      />
      <TouchableOpacity onPress={handlerSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Solicitar reserva</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleCancel}
        style={[styles.button, styles.cancelButton]}
      >
        <Text style={styles.buttonText}>Cancelar reserva</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#44475a"
  },
  label: {
    fontWeight: "bold",
    color: "#ddd",
    marginHorizontal: 10,
    marginBottom: 8,
    marginTop: 50
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#ddd",
    height: 44,
    marginHorizontal: 10,
    marginBottom: 20,
    borderRadius: 2
  },
  button: {
    height: 42,
    marginHorizontal: 10,
    backgroundColor: "#f05a5d",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2
  },
  cancelButton: {
    backgroundColor: "#ccc",
    marginTop: 10
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  }
});
