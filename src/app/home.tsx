import { View, StyleSheet, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";
import Leitorios from "@/components/Leitorios";
import ButtonLeitoEqui from "@/components/ButtonLeitoEqui";

function Home() {

  const [leitorios, setLeitorios] = useState<number[]>([]);

  function adicionarLeitorio() {
    setLeitorios([...leitorios, leitorios.length + 1]);
  }

  function removerLeitorio(id: number) {
    setLeitorios(prev => prev.filter(item => item !== id));
  }

  return (
    <ScrollView>
      <View style={styles.header}>
        <Link href="/lateral">
          <Image
            source={require("../assets/menu.png")}
            style={styles.iconLeft}
          />
        </Link>

        <Link href="/">
          <Text style={styles.title}>Equipamentos</Text>
        </Link>

        <Image
          source={require("../assets/search.png")}
          style={styles.iconRight}
        />
      </View>

      <View style={styles.buttonEL}>
        <ButtonLeitoEqui />
      </View>

      <TouchableOpacity
        style={styles.adicionarEquipamentosUp}
        onPress={adicionarLeitorio}>
        <View style={styles.adicionarEquipamentos}>
          +
        </View>
      </TouchableOpacity>

      {leitorios.length == 0 && (
        <View style={styles.semLeitorio}>Não há nenhum aparelho cadastrado!!!</View>
      )}

      <View>
        {leitorios.map((id) => (
          <Leitorios
            key={id}
            id={id}
            onRemove={removerLeitorio}
          />
        ))}
      </View>

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
    marginBottom: 12,
  },
  semLeitorio: {
    color: "#424242",
    fontWeight: "bold",
    alignItems: "center",
    marginTop: 150,
  },
  title: {
    fontSize: 28,
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
  buttonEL: {
    marginBottom: 17,
  },
  adicionarEquipamentosUp: {
    backgroundColor: "#dddde4",
    padding: 5,
    borderRadius: 999,
    alignSelf: "flex-end",
    marginLeft: 16,
    marginBottom: 5,
  },
  adicionarEquipamentos: {
    backgroundColor: "#E50f37",
    paddingVertical: 0,
    paddingHorizontal: 10,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: 36,
    fontWeight: "bold",
  },
});

export default Home;
