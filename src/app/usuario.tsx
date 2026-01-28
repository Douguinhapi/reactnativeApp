import { View, StyleSheet, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

function Usuario() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
     <View style={styles.header}>
        <Link href="/lateral" asChild>
          <TouchableOpacity>
            <Image
              source={require("../assets/menu.png")}
              style={styles.iconLeft}
            />
          </TouchableOpacity>
        </Link>
        <Text style={styles.title}>Perfil</Text>
      </View>

      <View style={styles.card}>
        {/* Foto de perfil */}
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={styles.avatar}
        />
        <Text style={styles.nome}>teste da silva</Text>
        <Text style={styles.info}>📧 douglasteste@email.com</Text>
        <Text style={styles.info}>📍 Palhoça - SC</Text>
      </View>

      {/* Link de ajuda */}
      <View style={styles.links}>
        <Link href="/" asChild>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.botaoTexto}>❓ Ajuda</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",          
    justifyContent: "flex-start",  
    marginTop: 26,
    marginBottom: 70,
    width: "100%",
    gap: 12,
  },
  iconLeft: {
    width: 28,
    height: 28,
    resizeMode: "contain",
    marginTop: 2,                  
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    lineHeight: 32,                
    textAlignVertical: "center",   
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    marginBottom: 30,
    width: "100%",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  nome: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  info: {
    fontSize: 16,
    color: "#666",
    marginBottom: 4,
  },
  links: {
    width: "100%",
    gap: 15,
  },
  botao: {
    backgroundColor: "#E50f37",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  botaoTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Usuario;