import { useState } from "react";
import { View, StyleSheet, Image, Text, ScrollView, Modal, TouchableOpacity, TextInput } from "react-native"

function LeitosMed({ id, onRemove }: { id: number; onRemove: (id: number) => void }) {

    const [modalVisible, setModalVisible] = useState(false);

    const [texto, setTexto] = useState("");
    const [nomeAparelho, setNomeAparelho] = useState("Leito");

    const [textoDescricao1, setTextoDescricao1] = useState("");
    const [nomeDescricao1, setNomeDescricao1] = useState("SPO²");

    const [textoDescricao2, setTextoDescricao2] = useState("");
    const [nomeDescricao2, setNomeDescricao2] = useState("Sala");

    const [textoDescricao3, setTextoDescricao3] = useState("");
    const [nomeDescricao3, setNomeDescricao3] = useState("HR");

    return (
        <ScrollView>

            <Modal
                transparent
                animationType="fade"
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}>

                <View style={styles.overlay}>

                    <View style={styles.modalBox}>

                        <Text style={styles.modalTitle}>Editar aparelho</Text>
                        <TextInput
                            style={styles.input1}
                            placeholder="Número do leito..."
                            value={texto}
                            onChangeText={setTexto} />
                        <TextInput
                            style={styles.input2}
                            placeholder="SPO²"
                            value={textoDescricao1}
                            onChangeText={setTextoDescricao1} />
                        <TextInput
                            style={styles.input2}
                            placeholder="Sala"
                            value={textoDescricao2}
                            onChangeText={setTextoDescricao2} />
                        <TextInput
                            style={styles.input2}
                            placeholder="HR"
                            value={textoDescricao3}
                            onChangeText={setTextoDescricao3} />

                        <View style={styles.modalButtons}>

                            <TouchableOpacity
                                style={styles.cancelButton}
                                onPress={() => setModalVisible(false)}>
                                <Text style={styles.cancelText}>Cancelar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.confirmButton}
                                onPress={() => {
                                    setNomeAparelho(texto);
                                    setNomeDescricao1(textoDescricao1);
                                    setNomeDescricao2(textoDescricao2);
                                    setNomeDescricao3(textoDescricao3);
                                    setModalVisible(false);
                                }}>
                                <Text style={styles.confirmText}>Editar</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </Modal>


            <View style={styles.all}>
                <View style={styles.up}>
                    <View style={styles.up1}>
                        <Image
                            source={require("../assets/logoInstramed.png")}
                            style={styles.instraImg} />
                        <Text style={styles.titleDea}>{nomeAparelho}</Text>
                    </View>

                    <View style={styles.iconsContainer}>

                        <TouchableOpacity onPress={() => setModalVisible(true)}>
                            <Image source={require("../assets/edit.png")} style={styles.icon} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => onRemove(id)}>
                            <Image source={require("../assets/delete.png")} style={styles.icon} />
                        </TouchableOpacity>
                        
                    </View>
                </View>

                <View style={styles.low}>

                    <View style={styles.textosContainer}>
                        <Text style={styles.textosInputs}>{nomeDescricao2}</Text>
                        <Text style={styles.textosInputs}>{nomeDescricao3}</Text>
                    </View>

                    <View>
                        <Text style={styles.redondoVermelho}>{nomeDescricao1}</Text>
                    </View>

                </View>

            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    all: {
        flex: 1,
        padding: 12,
        backgroundColor: "#fff",
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#bdbdbd",
        marginBottom: 10,
    },
    up: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    up1: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    instraImg: {
        width: 48,
        height: 48,
        resizeMode: "contain",
        marginRight: 10,
    },
    titleDea: {
        fontSize: 26,
        fontWeight: "800",
    },
    iconsContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    icon: {
        width: 22,
        height: 22,
        resizeMode: "contain",
    },
    low: {
        padding: 4,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    redondoVermelho: {
        backgroundColor: "# ",
        color: "#FFFFFF",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 999,
        fontWeight: "bold",
    },
    textosContainer: {
        flexDirection: "column",
    },
    textosInputs: {
        backgroundColor: "#dddde4",
        color: "#221F1F",
        paddingVertical: 2,
        paddingHorizontal: 10,
        borderRadius: 5,
        fontWeight: "bold",
        fontSize: 10,
        marginTop: 7,
        textAlign: "center",
    },

    // modal abaixo:
    input1: {
        marginTop: 15,
        height: 40,
        borderColor: '#888',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        marginBottom: 25,
    },
    input2: {
        marginTop: -15,
        height: 40,
        borderColor: '#888',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        marginBottom: 25,
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalBox: {
        width: "85%",
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 20,
        elevation: 5, // Android
        shadowColor: "#000", // iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 10,
        textAlign: "center",
    },
    modalText: {
        fontSize: 16,
        color: "#555",
        textAlign: "center",
        marginBottom: 20,
    },
    modalButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    cancelButton: {
        flex: 1,
        padding: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        marginRight: 10,
        alignItems: "center",
    },
    cancelText: {
        color: "#333",
        fontWeight: "600",
    },
    confirmButton: {
        flex: 1,
        padding: 12,
        borderRadius: 10,
        backgroundColor: "#E50f37",
        alignItems: "center",
    },
    confirmText: {
        color: "#fff",
        fontWeight: "600",
    },
});

export default LeitosMed