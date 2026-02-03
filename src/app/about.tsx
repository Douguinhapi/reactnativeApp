import { View, StyleSheet, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import { Link, useRouter } from "expo-router";

function About() {

    return (
        <ScrollView>
            <View style={styles.header}>
                <Link href="/lateral">
                    <Image
                        source={require("../assets/menu.png")}
                        style={styles.iconLeft}
                    />
                </Link>


                <Text style={styles.title}>Sobre</Text>

                <Image
                    source={require("../assets/search.png")}
                    style={styles.iconRight}
                />
            </View>
            <View>
                <Text style={styles.textoSobre}>
                    Sobre o Aplicativo

                    Este aplicativo foi desenvolvido com o propósito de modernizar, agilizar e otimizar o fluxo de trabalho de profissionais da saúde que utilizam equipamentos Instramed em sua rotina clínica e hospitalar.

                    A plataforma possibilita a conexão segura via internet com os dispositivos Instramed, permitindo o envio, recebimento e sincronização de dados em tempo real diretamente no dispositivo móvel. O usuário pode conectar múltiplos aparelhos simultaneamente, centralizando informações críticas em um único ambiente digital organizado e confiável.

                    Por meio do aplicativo, o profissional tem acesso à visualização de exames, armazenamento de registros clínicos, acompanhamento de métricas e histórico de dados médicos, oferecendo suporte eficiente à análise técnica e à tomada de decisões com maior precisão.

                    O sistema foi projetado com foco em mobilidade, segurança da informação, usabilidade intuitiva e alto desempenho, garantindo praticidade no uso diário sem abrir mão da confiabilidade e do padrão de excelência associado aos equipamentos Instramed.

                    Nossa missão é integrar tecnologia e saúde, proporcionando ferramentas digitais inteligentes que auxiliem no cuidado ao paciente e na eficiência do atendimento médico.
                </Text>

            </View>
        </ScrollView>
    )
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
    textoSobre: {
        textAlign: "justify",
        fontSize: 20,
        lineHeight: 24,
        marginHorizontal: 28,
        color: "#333",
    }
});

export default About