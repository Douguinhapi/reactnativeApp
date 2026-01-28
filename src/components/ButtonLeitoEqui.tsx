import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
import { Link, usePathname } from "expo-router"

function ButtonLeitoEqui() {

    const pathname = usePathname(); // 👈 rota atual

    const isEquipamentos = pathname === "/home";
    const isLeitos = pathname === "/leitos";


    return (
        <View style={styles.up}>

            <Link href="/home" asChild>
                <TouchableOpacity style={isEquipamentos ? styles.active : styles.inactive}>
                    <Text
                        style={isEquipamentos ? styles.textActive : styles.textInactive}>
                        Equipamentos
                    </Text>
                </TouchableOpacity>
            </Link>

            <Link href="/leitos" asChild>
                <TouchableOpacity style={isLeitos ? styles.active : styles.inactive}>
                    <Text
                        style={isLeitos ? styles.textActive : styles.textInactive}>
                        Leitos
                    </Text>
                </TouchableOpacity>
            </Link>
            
        </View>
    );
}

const styles = StyleSheet.create({
  up: {
    flexDirection: "row",
    backgroundColor: "#dddde4",
    padding: 5,
    borderRadius: 999,
    alignSelf: "center",
  },

  active: {
    backgroundColor: "#E50f37",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 999,
  },

  inactive: {
    backgroundColor: "#dddde4",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 999,
  },

  textActive: {
    color: "#fff",
    fontWeight: "bold",
  },

  textInactive: {
    color: "rgb(116,116,116)",
    fontWeight: "bold",
  },
});

export default ButtonLeitoEqui