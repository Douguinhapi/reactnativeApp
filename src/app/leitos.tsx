import { View, StyleSheet, Image, Text, ScrollView, Alert, TouchableOpacity } from "react-native"
import { Link } from "expo-router"
import { Input } from "@/components/Input"
import ButtonLeitoEqui from "@/components/ButtonLeitoEqui"
import LeitosMed from "@/components/LeitosMed"
import { useState } from "react";

function Leitos() {

    const [leitosMed, setLeitosMed] = useState<number[]>([]);

    const [textoInput, setTextoInput] = useState("");

    function adicionarLeitorio() {
        setLeitosMed([...leitosMed, leitosMed.length + 1]);
    }

    function removerLeitorio(id: number) {
        setLeitosMed(prev => prev.filter(item => item !== id));
    }

    return (
        <ScrollView>
            <View style={styles.header}>
                <Link href="/lateral">
                    <Image
                        source={require("../assets/menu.png")}
                        style={styles.iconLeft} />
                </Link>
                <Link href="/">
                    <Text style={styles.title}>Leitos</Text>
                </Link>

            </View>

            <View style={styles.buttonEL}>
                <ButtonLeitoEqui />
            </View>

            <View style={styles.searchContainer}>
                <Image
                    source={require("../assets/search.png")}
                    style={styles.searchIcon}
                />

                <Input
                    placeholder="Buscar leito ou equipamento"
                    value={textoInput}
                    onChangeText={setTextoInput}
                />
            </View>

            <TouchableOpacity
                style={styles.adicionarEquipamentosUp}
                onPress={adicionarLeitorio}>
                <View style={styles.adicionarEquipamentos}>
                    +
                </View>
            </TouchableOpacity>

            {leitosMed.length == 0 && (
                <View style={styles.semLeitorio}>Não há nenhum aparelho cadastrado!!!</View>
            )}

            <View>
                {leitosMed.map((id) => (
                    <LeitosMed
                        key={id}
                        id={id}
                        onRemove={removerLeitorio}
                    />
                ))}
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
        paddingHorizontal: 25,
        marginBottom: 12,
    },
    title: {
        fontSize: 30,
        fontWeight: "900",
    },
    iconLeft: {
        width: 28,
        height: 28,
        resizeMode: "contain",
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#dddde4",
        marginHorizontal: 15,
        borderRadius: 10,
        paddingHorizontal: 12,
        minHeight: 40,
        marginBottom: 10,
    },
    searchIcon: {
        width: 18,
        height: 18,
        resizeMode: "contain",
        marginRight: 8,
        opacity: 0.6,
    },
    buttonEL: {
        marginBottom: 17,
    },
    semLeitorio: {
        color: "#424242",
        fontWeight: "bold",
        alignItems: "center",
        marginTop: 150,
    },
    adicionarEquipamentosUp: {
        backgroundColor: "#dddde4",
        padding: 5,
        borderRadius: 999,
        alignSelf: "flex-end",
        marginLeft: 16,
        marginBottom: 10,
        marginHorizontal: 15,
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
})

export default Leitos