import Banner from "@/components/Banner";
import { FormInput } from "@/components/FormInput";
import { Stack, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView, ImageSourcePropType, TouchableOpacity } from "react-native";
import { auth, firestore } from "@/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { doc, setDoc } from "firebase/firestore";

import perfil from "@/image/login/perfil.png";
import lock from "@/image/login/lock.png";

export default function register() {

  const [data, setData] = useState<{ [key: string]: string; }>({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    phone: "",
    address: "",
    number: "",
    complement: "",
  });

  console.log(data);

  const fields: { name: string; key: string; image: ImageSourcePropType; }[] = [
    { name: "Nome Completo", key: "name", image: perfil },
    { name: "Telefone", key: "phone", image: perfil },
    { name: "E-mail", key: "email", image: perfil },
    { name: "Senha", key: "password", image: lock },
    { name: "Confirme a senha", key: "confirmPassword", image: lock },
  ];

  const { type } = useLocalSearchParams();

  if (type === 'aluno') {
    fields.push(
      { name: "Endereço", key: "address", image: perfil },
      { name: "Número", key: "number", image: perfil },
      { name: "Complemento", key: "complement", image: perfil },
    );
  }

  const registerUser = async (data: { email: string; password: string;[key: string]: string; }) => {
    const { email, password } = data;
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userDocRef = doc(firestore, 'users', user.uid);
      await setDoc(userDocRef, {
        name: data.name,
        phone: data.phone,
        address: data.address,
        number: data.number,
        complement: data.complement,
        type: type
      });

      const tripDocRef = doc(firestore, 'viagens', user.uid);
      await setDoc(tripDocRef, {
        name: data.name,
        type: type,
        value: '',
      });

      alert('registrado com sucesso');

      setData({
        email: '',
        password: '',
        name: '',
        phone: '',
        address: '',
        number: '',
        complement: '',
        confirmPassword: ''
      });

    } catch (error) {
      alert('Erro ao registrar usuário');
    }
  };

  return (
    <ScrollView
      style={{
        width: "100%",
      }}
    >
      <Stack.Screen
        options={{
          title: "Cadastrar " + type,
        }}
      />
      <Banner />
      <View style={[styles.box]}>
        <Text>
          Preencha os campos com as informações do {type}.
        </Text>
        <View>
          {fields.map(({ key, name, image }, index) => (
            <FormInput key={index} name={name} image={image}>
              <TextInput
                style={[styles.placeholder]}
                onChangeText={text => setData({ ...data, [key]: text })}
                value={data[key]}
              />
            </FormInput>
          ))}
        </View>
        {(data.password !== data.confirmPassword || data.confirmPassword == '') ?
          <View style={[styles.boxBtn, { backgroundColor: "#A6A6A6" }]}>
            <TouchableOpacity onPress={() => alert('Senhas não Correspondentes')}>
              <Text style={styles.btnText}>
                Cadastrar
              </Text>
            </TouchableOpacity>
          </View>
          :
          <View style={[styles.boxBtn]}>
            <TouchableOpacity onPress={() => registerUser({ ...data, email: data.email, password: data.password })}>
              <Text style={styles.btnText}>
                Cadastrar
              </Text>
            </TouchableOpacity>
          </View>
        }
      </View>

    </ScrollView >
  );
};

const styles = StyleSheet.create({
  box: {
    marginVertical: 10,
    margin: 'auto',
    maxWidth: '90%',
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
    marginVertical: 20,
    margin: 'auto',
    color: '#FFF',
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  btnText: {
    color: '#FFF',
  },
});

