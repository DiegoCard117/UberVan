import Banner from "@/components/Banner";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");	
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
            onChangeText={text => setEmail(text)}
            value={email}
          />
        </View>
        <View style={[styles.boxInside]}>
          <Text>Senha</Text>
          <TextInput
            style={[styles.placeholder]}
            onChangeText={text => setPassword(text)}
            value={password}
          />
        </View>
        <Button title="Acessar" onPress={() => alert('Login')} />
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
  },
});

