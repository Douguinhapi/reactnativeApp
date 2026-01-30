import { View, StyleSheet, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { useRouter } from "expo-router";

function Lateral() {

    const router = useRouter();

    return (
        <ScrollView>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Image
                        source={require("../assets/down-arrow.png")}
                        style={styles.iconLeft}
                    />
                </TouchableOpacity>


                <Text style={styles.title}>Menu</Text>

                <Image
                    source={require("../assets/search.png")}
                    style={styles.iconRight}
                />
            </View>

            <View style={styles.menu}>

                <Link href="/leitos" style={styles.item}>
                    <Image
                        source={require("../assets/hospital-bed ECG.png")}
                        style={styles.iconMenu}
                    />
                    <Text style={styles.text}>Leitos</Text>
                </Link>

                <Link href="/usuario" style={styles.item}>
                    <Image
                        source={require("../assets/user ECG.png")}
                        style={styles.iconMenu}
                    />
                    <Text style={styles.text}>Usuário</Text>
                </Link>

                <Link href="/home" style={styles.item}>
                    <Image
                        source={require("../assets/computer ECG.png")}
                        style={styles.iconMenu}
                    />
                    <Text style={styles.text}>Equipamentos</Text>
                </Link>

                <Link href="/ecg" style={styles.item}>
                    <Image
                        source={require("../assets/heart ECG.png")}
                        style={styles.iconMenu}
                    />
                    <Text style={styles.text}>ECG</Text>
                </Link>
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
    iconMenu: {
        width: 26,
        height: 24,
        resizeMode: "contain",
        marginRight: 15,
        opacity: 0.95,
    },
    menu: {
        paddingHorizontal: 24,
    },
    item: {
        alignItems: "center",
        paddingVertical: 18,
        borderBottomWidth: 1,
        borderColor: "#c1c1c1",
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
