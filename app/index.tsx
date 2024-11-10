import { Text, View, Image } from "react-native";
import Button from "@/components/Button";
import { StyleSheet } from "react-native";

const buttons = [
  { text: "Alunos", image: require("@/image/login/aluno.png") },
  { text: "Motorista", image: require("@/image/login/motorista.png") },
  { text: "Admin", image: require("@/image/login/config.png") },
];

export default function Index() {
  return (
    <View
      style={{
        width: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={styles.imageBox}>
        <Image
          style={styles.imageHeader}
          source={require("@/image/login/logo.png")}
        />
        <Image
          style={styles.imageHeader}
          source={require("@/image/login/van.png")}
        />
      </View>
      <View style={styles.box}>
        <View>
          <Image></Image>
        </View>

        <Text style={styles.title}>
          Selecione o Ambiente em que Deseja Fazer o Login
        </Text>

        {buttons.map((button, index) => (
          <Button key={index} {...button} />
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
    backgroundColor: "#F2E3D5",
    margin: 10,
  },
  title: {
    width: "90%",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  imageBox: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  imageHeader: {
    width: 120,
    height: 120,
  },
});
