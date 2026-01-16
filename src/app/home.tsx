 import { View, StyleSheet, Image, Text, ScrollView, Alert } from "react-native"
import { Link } from "expo-router"
import Leitorios from "@/components/Leitorios"

function Home(){
    return(
        <ScrollView>
            <View style={styles.header}>
                <Link href="/lateral">
                <Image
                    source={require("../assets/menu.png")}
                    style={styles.iconLeft}/>   
                </Link>       
                <Link href="/">      
                    <Text style={styles.title}>Leitos</Text>
                </Link>       
                <Image
                    source={require("../assets/search.png")}
                    style={styles.iconRight}/>     
            </View>
            <View>
                <Leitorios />
                <Leitorios />
                <Leitorios />
                <Leitorios />
                <Leitorios />
                <Leitorios />
                <Leitorios />
            </View>
            <Text>Teste HOME</Text>
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
    fontSize: 36,
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
})

export default Home