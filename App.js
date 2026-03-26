import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export default function Tela() {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text>👤</Text>
          <Text style={styles.headerText}>Arthur de Souza Linsingen Vieira{'\n'}28/11/2006{'\n'}Curitiba/Paraná/Brasil</Text>
          <Text>🧑‍⚕️</Text>
        </View>
      </View>

      {/* PARTE FIXA */}
      <View style={styles.fixedArea}>
        
        <TouchableOpacity style={styles.greycard}>
          <Text>📄 Ver carteirinha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bluecard}>
          <Text>👥 Rede Amiga</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.yellowCard}>
          <Text>⭐ DarLife Plus (Em breve)</Text>
        </TouchableOpacity>
      </View>

      {/* SCROLL (COMEÇA DEPOIS DO AMARELO) */}
      <Animated.ScrollView
        style={styles.scroll}
        contentContainerStyle={{ paddingBottom: 120 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
      >
        <View style={styles.card}>
          <Text style={styles.title}>🙎 Medidas</Text>
          <Text>Peso: 75 kg</Text>
          <Text>Altura: 1.81 m</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>❓ Já fez Cirurgia Bariátrica</Text>
          <Text>não</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>❓ Já fez alguma cirurgia</Text>
          <Text>Sim</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>❓ Conheçe alguem que já fez Cirurgia Bariátrica</Text>
          <Text>Sim</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>🥼 Sua Cirurgia</Text>
          <Text>Retirada de Carne Esponjosa/ Desvio de Septo</Text>
          <Text>02/2020</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>🥼 Cirurgia Bariatrica</Text>
          <Text>Bypass / Gastroplastia</Text>
          <Text>07/2017</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>🏥 Seu Hospital</Text>
          <Text>Hospital IPO</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>🏥 Hospital que fizeram a Bariatrica</Text>
          <Text>Hospital Marcelino</Text>
        </View>
      </Animated.ScrollView>

      {/* MENU */}
      <View style={styles.bottomMenu}>
        <TouchableOpacity style={styles.menuItem}>
          <Text>🏠</Text>
          <Text>Início</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text>📍</Text>
          <Text>Locais</Text>
        </TouchableOpacity>

        {/* BOTÃO CENTRAL */}
        <View style={styles.centerWrapper}>
          <TouchableOpacity style={styles.centerButton}>
            <Image
              source={{ uri: "https://media-gru1-2.cdn.whatsapp.net/v/t61.24694-24/455197972_831713419105618_1089387044800261594_n.jpg?ccb=11-4&oh=01_Q5Aa4AEsIVL9Bh68krF7acw4x-SXGaRZBlrU6ohfJqpd5l5Ulg&oe=69D2C31B&_nc_sid=5e03e0&_nc_cat=107" }}
              style={styles.avatar}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.menuItem}>
          <Text>📅</Text>
          <Text>Agenda</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text>☰</Text>
          <Text>Menu</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },

  header: {
    backgroundColor: "#e6e6e6",
    padding: 10,
  },

  headerContent: {
    flexDirection: "row",
    alignItems: "center",
  },

  headerText: {
    marginLeft: 10,
    fontWeight: "bold",
  },

  fixedArea: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },

  scroll: {
    flex: 1,
    paddingHorizontal: 10,
  },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },

  yellowCard: {
    backgroundColor: "#f7e7a9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },

  title: {
    fontWeight: "bold",
    marginBottom: 5,
  },

  bottomMenu: {
    height: 70,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#ddd",
  },

  menuItem: {
    alignItems: "center",
  },

  centerWrapper: {
    position: "absolute",
    top: -25,
    alignSelf: "center",
  },

  centerButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 30,
  },
});
