import { View, StyleSheet, Image, Text, ScrollView, Alert } from "react-native"
import { Button } from "@/components/Button"
import { useState } from "react"
import { Input } from "@/components/Input"
import { Link } from "expo-router"
import { router } from "expo-router";


export default function Index() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function getLogin(){
        try{
            if(!email || !password){
                return Alert.alert("Atenção, informe os campos obrigatórios!")
            }
            else{
                Alert.alert("Sucesso", "Logado com sucesso!!!",      
                    [        
                        {          
                            text: "OK", onPress: () => router.replace("/home"),
                        },
                    ],      
                    { cancelable: true });
            }
        }
        catch(error){
            console.log(error)
        }
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    source={require("../assets/logoInstramed.png")}
                    style={styles.illustration}
                />

                <Text style={styles.title}>Entrar</Text>
                <Text style={styles.subtitle}>Acesse seu conta com e-mail e senha.</Text>

                <View style={styles.form}>
                    <Input placeholder="E-mail" value={email} onChangeText={(e) => setEmail(e)} />
                    <Input placeholder="Senha" value={password} onChangeText={(e) => setPassword(e)} secureTextEntry />
                    <Button  label="Entrar" onPress={getLogin} />
                </View>

                <Text style={styles.footerText}>Não possuí conta? <Link href="/signup" style={styles.footerLink}>Cadastra-se aqui</Link></Text>
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
        color: "#032ad7",
    },
})







// <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}> ou