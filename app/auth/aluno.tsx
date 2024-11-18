import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native"

export default function aluno() {
  const { type } = useLocalSearchParams()
  return (
    <Text>{type}</Text>
  )
}