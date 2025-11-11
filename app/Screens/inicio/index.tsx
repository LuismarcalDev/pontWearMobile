import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Inicio() {
  const [coluna1, setColuna1] = useState([]);
  const [coluna2, setColuna2] = useState([]);

  useEffect(() => {
    async function carregar() {
      const res = await fetch(
        "https://api.unsplash.com/photos?page=5&per_page=30&client_id=n716mTyoxj5RTGdu0b3V0yX9RLpIlIEsHhhmEE1Znjo"
      );
      const data = await res.json();

      const esquerda: string[] = [];
      const direita: string[] = [];
      data.forEach((img, i) => {
        if (i % 2 === 0) esquerda.push(img);
        else direita.push(img);
      });

      setColuna1(esquerda);
      setColuna2(direita);
    }

    carregar();
  }, []);

  const largura = Dimensions.get("window").width / 2 - 9;

  return (
    <View style={estilos.geral}>
      <View style={estilos.header}>
        <Text style={estilos.title}>WIKI | FILMES</Text>
        <Ionicons name="search" size={25} color="#ffffff" />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={estilos.containerColunas}>
          {/* Coluna esquerda */}
          <View style={estilos.coluna}>
            {coluna1.map((item, i) => (
              <TouchableOpacity key={i} activeOpacity={0.8}>
                <Image
                  source={{ uri: item.urls.small }}
                  style={[
                    estilos.image,
                    { width: largura, height: 210 + (i % 2) * 90 },
                  ]}
                />
              </TouchableOpacity>
            ))}
          </View>

          {/* Coluna direita */}
          <View style={estilos.coluna}>
            {coluna2.map((item, i) => (
              <TouchableOpacity key={i} activeOpacity={0.8}>
                <Image
                  source={{ uri: item.urls.small }}
                  style={[
                    estilos.image,
                    { width: largura, height: 220 + ((i + 1) % 2) * 80 },
                  ]}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={estilos.sr}>
            <View style={estilos.cr}>
                <View></View>
            </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  geral: {
    flex: 1,
    backgroundColor: "#111010",
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
  containerColunas: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 2,
    paddingTop: 10,
  },
  coluna: {
    flexDirection: "column",
    gap: 30, // espaçamento entre imagens
  },
  image: {
    borderRadius: 10,
    resizeMode: "cover",
  },
  sr:{
    position:"absolute",
    width:"100%",
    height:"100%",
    backgroundColor:"#0f0f0f46",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    

  },
  cr:{
    width:300,
    height:370,
    backgroundColor:"white",
    top:100,
    borderRadius:5

  }

});
