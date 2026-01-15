import { View, StyleSheet, Image, Text, ScrollView } from "react-native"
import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { Link } from "expo-router"

export default function Signup() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    source={require("../assets/logoInstramed.png")}
                    style={styles.illustration}
                />

                <Text style={styles.title}>Cadastrar</Text>
                <Text style={styles.subtitle}>Crie sua conta aqui e agora.</Text>

                <View style={styles.form}>
                    <Input placeholder="Nome" />
                    <Input placeholder="E-mail" />
                    <Input placeholder="Senha" secureTextEntry />
                    <Input placeholder="Confirmar Senha" secureTextEntry />
                    <Button label="Cadastrar" />
                </View>

                <Text style={styles.footerText}>Possuí conta? <Link href="/" style={styles.footerLink}> Entre aqui.</Link></Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fdfdfd",
        padding: 32,
    },
    illustration: {
        width: "100%",
        height: 150,
        resizeMode: "contain",
        marginTop: 85, 
        marginBottom: 95,
    },
    title: {
        fontSize: 32,
        fontWeight: 900,
    },
    subtitle: {
        fontSize: 16,
    },
    form: {
        marginTop: 24,
        gap: 12,
    },
    footerText: {
        textAlign: "center",
        marginTop: 24,
        color: "#585860",
    },
    footerLink: {
        color: "#032ad7"
    }
})







// <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}> ou