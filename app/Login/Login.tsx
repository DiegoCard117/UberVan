import Banner from "@/components/Banner";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";

export default function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  console.log(login);
  return (
    <View
      style={{
        width: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Banner/>
      <View style={[styles.box]}>
        <View style={[styles.boxInside]}>
          <Text>Login</Text>
          <TextInput
            style={[styles.placeholder]}
            onChangeText={text => setLogin({ ...login, email: text })}
            value={login.email}
          />
        </View>
        <View style={[styles.boxInside]}>
          <Text>Senha</Text>
          <TextInput
            style={[styles.placeholder]}
            onChangeText={text => setLogin({ ...login, password: text })}
            value={login.password}
          />
        </View>
        <View style={[styles.boxBtn]}>
          <Pressable  onPress={() => alert('Login')}>
            <Text style={styles.btnText}>Acessar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  box:{
    width: "90%",
    height: "40%",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: 10,
  },
  boxInside: {
    width: "90%",
  },
  placeholder: {
    backgroundColor: "#A6A6A6",
    height: 40,
    borderRadius: 10,
    width: '100%',
    color: '#FFF',
    paddingLeft: 10,
    marginTop: 5,
  },
  boxBtn: {
    display: 'flex',
    width: '100%',
    maxWidth: '80%',
    alignItems: 'center',
    backgroundColor: '#32A62E',
    padding: 10,
    borderRadius: 10,
    marginTop: 5,
    color: '#FFF',
  },
  btnText: {
    color: '#FFF',
  }
});

