import { View, StyleSheet, Image, Text, ScrollView, Alert } from "react-native"

// agora tem que fazer as outras cores e outros equipamentos
//amarelo, verde. cerdiomax dualM etc...

function Leitorios(){
    return(
        <ScrollView>
            <View style={styles.all}>
                <View style={styles.up}>
                    <Image
                        source={require("../assets/logoInstramed.png")}
                        style={styles.instraImg}/>                     
                    <Text style={styles.titleDea}>Dea</Text>
                    <Image
                        source={require("../assets/down-arrow.png")}
                        style={styles.setaImg}/>                            
                </View>
                <View style={styles.low}>
                    <Text>123 BPM</Text>
                    <View>
                        <Text style={styles.redondoVermelho}>180/110</Text>
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
        backgroundColor: "#f5f4f4",
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#bdbdbd",
        marginBottom: 10,
    },
    up: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 3,
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
    setaImg: {
        width: 22,
        height: 22,
        resizeMode: "contain",
        marginLeft: "auto",
    },
    low: {
        padding: 4,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    redondoVermelho: {
        backgroundColor: "#E50f37",
        color: "#FFFFFF",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 999,
        fontWeight: "bold",
    },
});

export default Leitorios