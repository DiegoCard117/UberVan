import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";

import { ImageSourcePropType } from "react-native";

interface ButtonProps {
  text: string;
  image: ImageSourcePropType;
}

const Button: React.FC<ButtonProps> = ({ text, image }) => {
  return (
    <TouchableOpacity style={[styles.button]}>
      <Image source={image} />
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#D99B29",
    width: "80%",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  buttonText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Button;
