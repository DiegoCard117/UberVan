import { Text, View, Image, StyleSheet } from "react-native";
import Banner from "@/components/Banner";
import { Button } from "react-native";

const buttons = [
  { text: "Alunos", image: require("@/image/login/aluno.png"), color: "#F2CB05" },
  { text: "Motorista", image: require("@/image/login/motorista.png"), color: "#32A62E"  },
  { text: "Admin", image: require("@/image/login/config.png"), color: "#0DC4D9"  },
];

export default function Home({navigation}: any) {
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
      <View style={styles.box}>
        <View>
          <Image></Image>
        </View>

        <Text style={styles.title}>
          Selecione o Ambiente em que Deseja Fazer o Login
        </Text>
        {buttons.map(({image, text, color }, index) => (
          <View key={index} style={styles.arrButton}>
            <Image source={image} />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Button title={text} color={color} onPress={() => navigation.navigate('Login')} />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: "90%",
    height: "60%",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#A6A6A6",
    margin: 10,
  },
  title: {
    width: "90%",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  arrButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "80%",
  }
});
