import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import { Link } from "expo-router";
import { LineChart } from "react-native-chart-kit";
import { useState, useEffect } from "react";
import { useWindowDimensions } from "react-native";

function Ecg() {

    const { width } = useWindowDimensions(); // largura dinâmica da tela

    const [pontos, setPontos] = useState([10, 20, 15, 30, 25, 40]);

    const [pontos2, setPontos2] = useState([13, 215, 105, 30, 249, 85]);

    useEffect(() => {
        const interval = setInterval(() => {
            setPontos((prev) => {
                const novoValor = Math.floor(Math.random() * 100); //gera aleatório de 0 a 100
                const novaLista = [...prev, novoValor];
                novaLista.shift(); // remove o primeiro pra não crescer infinito

                return novaLista;
            });
        }, 300);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setPontos2((prev) => {
                const novoValor = Math.floor(Math.random() * 250); //gera aleatório de 0 a 100
                const novaLista = [...prev, novoValor];
                novaLista.shift(); // remove o primeiro pra não crescer infinito

                return novaLista;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const data = {
        labels: ["1", "2", "3", "4", "5", "6"],
        datasets: [
            {
                data: pontos,
                strokeWidth: 2,
            },
        ],
    };

    const data2 = {
        labels: ["1", "2", "3", "4", "5", "6"],
        datasets: [
            {
                data: pontos2,
                strokeWidth: 2,
            },
        ],
    };

    return (
        <ScrollView>

            <View style={styles.header}>
                <Link href="/lateral">
                    <Image
                        source={require("../assets/menu.png")}
                        style={styles.iconLeft}
                    />
                </Link>

                <Link href="/home">
                    <Text style={styles.title}>ECGs</Text>
                </Link>

                <Image
                    source={require("../assets/search.png")}
                    style={styles.iconRight}
                />
            </View>

            <View>

                <LineChart
                    data={data}
                    width={Math.min(width * 0.90, 1500)} 
                    height={200}
                    chartConfig={{
                        backgroundGradientFrom: "#fff",
                        backgroundGradientTo: "#ffffff",
                        decimalPlaces: 0,
                        color: () => "#E50f37",
                        propsForDots: {
                            r: "4",
                            strokeWidth: "2",
                        },
                    }}
                    bezier
                />

                <LineChart
                    data={data2}
                    width={Math.min(width * 0.90, 1500)} 
                    height={200}
                    chartConfig={{
                        backgroundGradientFrom: "#fff",
                        backgroundGradientTo: "#ffffff",
                        decimalPlaces: 0,
                        color: () => "#E50f37",
                        propsForDots: {
                            r: "4",
                            strokeWidth: "2",
                        },
                    }}
                />

                <LineChart
                    data={data}
                    width={Math.min(width * 0.90, 1500)} 
                    height={200}
                    chartConfig={{
                        backgroundGradientFrom: "#fff",
                        backgroundGradientTo: "#ffffff",
                        decimalPlaces: 0,
                        color: () => "#E50f37",
                        propsForDots: {
                            r: "4",
                            strokeWidth: "2",
                        },
                    }}
                />

                <LineChart
                    data={data2}
                    width={Math.min(width * 0.90, 1500)} 
                    height={200}
                    chartConfig={{
                        backgroundGradientFrom: "#fff",
                        backgroundGradientTo: "#ffffff",
                        decimalPlaces: 0,
                        color: () => "#E50f37",
                        propsForDots: {
                            r: "4",
                            strokeWidth: "2",
                        },
                    }}
                    bezier
                />

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
        marginBottom: 12,
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
});

export default Ecg;
