import { View, StyleSheet, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

function Notificacao() {

    const notificacoes = [
        {
            id: 1,
            titulo: "Novo aviso",
            descricao: "Seu pagamento foi confirmado com sucesso.",
            hora: "Agora",
            nova: true,
        },
        {
            id: 2,
            titulo: "Atualização disponível",
            descricao: "Uma nova versão do app está disponível.",
            hora: "Há 2h",
            nova: true,
        },
        {
            id: 3,
            titulo: "Lembrete",
            descricao: "Não esqueça de concluir sua tarefa hoje.",
            hora: "Ontem",
            nova: false,
        },
        {
            id: 4,
            titulo: "Bateria",
            descricao: "Não esqueça de trocar a bateria 25%.",
            hora: "Ontem",
            nova: false,
        },
        {
            id: 5,
            titulo: "Bateria",
            descricao: "Não esqueça de trocar a bateria 15%.",
            hora: "Ontem",
            nova: false,
        },
        {
            id: 6,
            titulo: "Bateria",
            descricao: "Não esqueça de trocar a bateria 10%.",
            hora: "Ontem",
            nova: false,
        },
        {
            id: 7,
            titulo: "Conexão",
            descricao: "Mais uma conexão dos seus amigos.",
            hora: "Há 16h",
            nova: true,
        },
    ];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Link href="/lateral">
                    <Image
                        source={require("../assets/menu.png")}
                        style={styles.iconLeft}
                    />
                </Link>

                <Text style={styles.title}>Notificações</Text>

                <Image
                    source={require("../assets/search.png")}
                    style={styles.iconRight}
                />
            </View>

            <View style={styles.list}>
                {notificacoes.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        style={[
                            styles.card,
                            item.nova && styles.cardNova
                        ]}
                        activeOpacity={0.8}
                    >
                        <View style={styles.iconBox}>
                            <Text style={styles.iconText}>
                                {item.nova ? "🔔" : "📩"}
                            </Text>
                        </View>

                        <View style={styles.content}>
                            <View style={styles.row}>
                                <Text style={styles.cardTitle}>{item.titulo}</Text>
                                <Text style={styles.time}>{item.hora}</Text>
                            </View>

                            <Text style={styles.cardText}>
                                {item.descricao}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F6F8",
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 40,
        paddingHorizontal: 16,
        marginBottom: 50,
    },

    title: {
        fontSize: 28,
        fontWeight: "900",
    },

    iconLeft: {
        width: 34,
        height: 34,
        resizeMode: "contain",
    },

    iconRight: {
        width: 32,
        height: 32,
        resizeMode: "contain",
    },

    list: {
        paddingHorizontal: 16,
        gap: 14,
        paddingBottom: 30,
    },

    card: {
        flexDirection: "row",
        backgroundColor: "#FFF",
        borderRadius: 14,
        padding: 14,
        alignItems: "center",
        elevation: 3,
    },

    cardNova: {
        borderLeftWidth: 5,
        borderLeftColor: "#FF3D00",
        backgroundColor: "#FFF5F2",
    },

    iconBox: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: "#EEE",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
    },

    iconText: {
        fontSize: 20,
    },

    content: {
        flex: 1,
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 4,
    },

    cardTitle: {
        fontSize: 16,
        fontWeight: "700",
        color: "#111",
    },

    time: {
        fontSize: 12,
        color: "#888",
    },

    cardText: {
        fontSize: 14,
        color: "#555",
    },
});

export default Notificacao;
