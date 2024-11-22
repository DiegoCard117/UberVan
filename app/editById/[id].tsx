import Banner from "@/components/Banner";
import { FormInput } from "@/components/FormInput";
import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView, ImageSourcePropType, TouchableOpacity } from "react-native";
import { doc, getDoc, updateDoc } from "firebase/firestore";

import perfil from "@/image/login/perfil.png";
import { db } from "@/firebaseConfig";

export default function editById() {
  const [type, setType] = useState('');
  interface UserData {
    name?: string;
    type?: string;
    phone?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    address?: string;
    number?: string;
    complement?: string;
  }

  const [fetchData, setFetchData] = useState<UserData>({});
  const { id } = useLocalSearchParams();
  const ref = doc(db, 'users', Array.isArray(id) ? id[0] : id);

  useEffect(() => {
    const fetchData = async () => {
      const docSnap = await getDoc(ref);
      if (docSnap.exists()) {
        setType(docSnap.data().type);
        setFetchData(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };
    fetchData();
  }, []);

  const updateData = async (data: UserData) => {
    await updateDoc(ref, {
      name: data.name,
      phone: data.phone,
      address: data.address,
      number: data.number,
      complement: data.complement,
    });
  };

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

  console.log(fetchData?.name);

  const fields: { name: string; key: string; image: ImageSourcePropType; }[] = [
    { name: "Nome Completo", key: "name", image: perfil },
    { name: "Telefone", key: "phone", image: perfil },
  ];

  if (type === 'aluno') {
    fields.push(
      { name: "Endereço", key: "address", image: perfil },
      { name: "Número", key: "number", image: perfil },
      { name: "Complemento", key: "complement", image: perfil },
    );
  }

  return (
    <ScrollView
      style={{
        width: "100%",
      }}
    >
      <Stack.Screen
        options={{
          title: `Editar o ${type} ${fetchData?.name?.substring(0, 15)}`,
        }}
      />
      <Banner />
      <View style={[styles.box]}>
        <Text style={{ fontSize: 22, textAlign: 'center', fontWeight: 'bold' }}>
          Edite os campos do {type}.
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
        {(data.name == '' || data.address == '') ?
          <View style={[styles.boxBtn, { backgroundColor: "#A6A6A6" }]}>
            <TouchableOpacity onPress={() => alert('Senhas não Correspondentes')}>
              <Text style={styles.btnText}>
                Editar
              </Text>
            </TouchableOpacity>
          </View>
          :
          <View style={[styles.boxBtn]}>
            <TouchableOpacity onPress={() => updateData(data)}>
              <Text style={styles.btnText}>
                Editar
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
    width: '100%',
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

