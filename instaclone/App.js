import React from 'react';
import { StatusBar, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Platform } from 'react-native';

export default function App() {
  return (
    <><><View style={styles.container}>
      <StatusBar backgroundColor={"#fff"} translucent={false}></StatusBar>

      <Image source={require("./src/assets/logoinsta.png")} style={styles.logo} />

      <TextInput placeholder="Nome de usuário, email ou número de celular" style={styles.input} />
      <TextInput placeholder="Senha" style={styles.input} />

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Entrar</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity style={styles.forgotText}>
          <Text style={styles.forgotText}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.criarConta}>
        <Text style={styles.textCriar}>Criar nova conta</Text>
      </TouchableOpacity>
      <Image source={require("./src/assets/metalogo.png")} style={styles.logoMeta}/></View></></>
)}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#edf5ff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginTop: Platform.OS == "android" ? "13%" : "20%",
    marginBottom: Platform.OS == "android" ? "13%" : "15%",
    width: "30%",
    resizeMode: "contain",
  },
  input: {
    width: "90%",
    height: 52,
    backgroundColor: "#fff",
    marginBottom: 20,
    padding: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",

  },
  forgotContainer:{
    width: "90%",
    alignItems: "flex-end",
  },
  forgotText: {
    color: "#000",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#edf5ff",
    marginTop: 5,
  },
  loginButton: {
    marginTop: '0.05%',
    backgroundColor: "#0064e0",
    width: "90%",
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,

  },
  loginText: {
    color: "#fff",
    fontSize: 17,
  },
  criarConta: {
    marginTop: '25%',
    backgroundColor: "#edf5ff",
    width: "90%",
    height: 42,
    borderRadius: 20,
    borderColor: "#0064e0",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  textCriar: {
    color: "#0064e0",
    fontSize: 18,
  },
  logoMeta: {
    marginTop: -70,
    resizeMode: "contain",
    width: 80,
    alignItems: "center",
    justifyContent: "center",
  }
});

