import { auth } from "@/firebaseConfig";
import { Link, Stack, useLocalSearchParams } from "expo-router";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import Banner from "@/components/Banner";

export default function motorista() {
  const { type } = useLocalSearchParams();
  return (
    <ScrollView
      style={{
        width: "100%",
        height: "100%",
        paddingTop: 5
      }}
    >
      <Stack.Screen
        options={{
          title: `Editar o ${type} ${'fetchData?.name?.substring(0, 15)'}`,
          headerStyle: { backgroundColor: "#F2CB05" },
        }}
      />
      <View style={{ width: '25%', margin: 5, display: 'flex', alignSelf: 'flex-end' }}>
        <Link style={[styles.logoutBtn]} href={'/'} onPress={() => auth.signOut()}>
          Logout
        </Link>
      </View>
      <Banner />
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  logoutBtn: {
    padding: 5,
    backgroundColor: "#F2CB05",
    borderRadius: 5,
    color: "#FFF",
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  }
});