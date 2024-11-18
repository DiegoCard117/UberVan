import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native"

export default function motorista() {
  const { type } = useLocalSearchParams()
  return (
    <Text>{type}</Text>
  )
}