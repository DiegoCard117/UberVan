import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native"

export default function admin() {
  const { type } = useLocalSearchParams()
  return (
    <Text>{type}</Text>
  )
}