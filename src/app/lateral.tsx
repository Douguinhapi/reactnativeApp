import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import { Link } from "expo-router";

function Lateral() {
  return (
    <ScrollView>
      <View style={styles.header}>
        <Link href="/home">
          <Image
            source={require("../assets/menu.png")}
            style={styles.iconLeft}
          />
        </Link>

        <Text style={styles.title}>Menu</Text>

        <Image
          source={require("../assets/search.png")}
          style={styles.iconRight}
        />
      </View>

      <View style={styles.menu}>
        <Link href="/home" style={styles.item}>
          <Text style={styles.text}>Leitos</Text>
        </Link>

        {/* <Link href="/pacientes" style={styles.item}>
          <Text style={styles.text}>Pacientes</Text>
        </Link>

        <Link href="/relatorios" style={styles.item}>
          <Text style={styles.text}>Relatórios</Text>
        </Link>

        <Link href="/configuracoes" style={styles.item}>
          <Text style={styles.text}>Configurações</Text>
        </Link> */}
      </View>

      <Text style={styles.footer}>TESTE GIGANTESCO</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 40,
    paddingHorizontal: 16,
    marginBottom: 52,
  },
  title: {
    fontSize: 36,
    fontWeight: "900",
  },
  iconLeft: {
    width: 28,
    height: 28,
    resizeMode: "contain",
  },
  iconRight: {
    width: 32,
    height: 32,
    resizeMode: "contain",
  },
  menu: {
    paddingHorizontal: 24,
  },
  item: {
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  text: {
    fontSize: 22,
    fontWeight: "600",
  },
  footer: {
    marginTop: 40,
    textAlign: "center",
  },
});

export default Lateral;
