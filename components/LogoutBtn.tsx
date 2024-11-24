import { auth } from "@/firebaseConfig";
import { Link } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function LogoutBtn() {
  return (
    <View style={{ width: '25%', margin: 5, display: 'flex', alignSelf: 'flex-end' }}>
      <Link style={[styles.logoutBtn]} href={'/'} onPress={() => auth.signOut()}>
        Logout
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  logoutBtn: {
    padding: 5,
    backgroundColor: "#E3371E",
    borderRadius: 5,
    color: "#FFF",
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  }
});