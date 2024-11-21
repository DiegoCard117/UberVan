import Banner from "@/components/Banner";
import { View, Text, TextInput, StyleSheet, Pressable, Image } from "react-native";
import React, { useState } from "react";

import lock from "@/image/login/lock.png";
import perfil from "@/image/login/perfil.png";
import { useLocalSearchParams, Stack, useRouter } from "expo-router";

import { auth } from "@/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const { type } = useLocalSearchParams();
  const router = useRouter();

  const route = type === "admin" ? "/auth/admin" : type === "alunos" ? "/auth/aluno" : "/auth/motorista";

  function handleLogin() {
    if (type === 'admin' && login.password == 'admin@') {
      login.password = 'admin@admin';
    }

    console.log(login);
    signInWithEmailAndPassword(auth, 'admin@admin.com', 'admin@admin')
      .then(() => {
        router.push({
          pathname: route,
        });
      })
      .catch(() => {
        alert('Usuário ou senha inválidos');
      });
  }

  return (
    <View
      style={{
        width: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack.Screen
        options={{
          title: "Login de " + type,
        }}
      />
      <Banner />
      <View style={[styles.box]}>
        <View style={[styles.boxInside]}>
          <Text style={[styles.textPlaceholder]}>Login</Text>
          <View style={[styles.boxPlaceholder]}>
            <Image source={perfil} style={[styles.icon]} />
            <TextInput
              style={[styles.placeholder]}
              onChangeText={text => setLogin({ ...login, email: text })}
              value={login.email}
            />
          </View>
        </View>
        <View style={[styles.boxInside]}>
          <Text style={[styles.textPlaceholder]}>Senha</Text>
          <View style={[styles.boxPlaceholder]}>
            <Image source={lock} style={[styles.icon]} />
            <TextInput
              style={[styles.placeholder]}
              onChangeText={text => setLogin({ ...login, password: text })}
              value={login.password}
            />
          </View>
        </View>
        <View style={[styles.boxBtn]}>
          <Pressable onPress={handleLogin}>
            <Text style={styles.btnText}>
              Acessar
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
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
    width: '90%',
    color: '#FFF',
    paddingLeft: 10,
  },
  boxBtn: {
    display: 'flex',
    width: '60%',
    maxWidth: '80%',
    alignItems: 'center',
    backgroundColor: '#32A62E',
    padding: 10,
    borderRadius: 10,
    marginTop: 5,
    color: '#FFF',
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  btnText: {
    color: '#FFF',
  },
  boxPlaceholder: {
    marginTop: 5,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textPlaceholder: {
    marginLeft: 30,
  },
  icon: {
    width: 25,
    height: 25,
  }
});

