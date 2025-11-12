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
import * as MediaLibrary from 'expo-media-library';

import * as FileSystem from 'expo-file-system/legacy';


export default function Inicio() {

  const [coluna1, setColuna1] = useState([]);
  const [coluna2, setColuna2] = useState([]);
  const [dados, setDados] = useState<any | null>(null);

  useEffect(() => {
    async function carregar() {
      const res = await fetch(
        "https://api.unsplash.com/photos?page=5&per_page=30&client_id=n716mTyoxj5RTGdu0b3V0yX9RLpIlIEsHhhmEE1Znjo"
      );
      const data = await res.json();

      const esquerda: any[] = [];
      const direita: any[] = [];
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

  function pegar(id: string) {
    solo(id);
    console.log(id);
  }

  async function solo(id: string) {
    const res = await fetch(
      `https://api.unsplash.com/photos/${id}?client_id=n716mTyoxj5RTGdu0b3V0yX9RLpIlIEsHhhmEE1Znjo`
    );
    const data = await res.json();
    setDados(data);
  }

async function baixar(url) {
  const { uri } = await FileSystem.downloadAsync(url, FileSystem.documentDirectory + 'foto.jpg');
  await MediaLibrary.saveToLibraryAsync(uri);
  console.log('Salvo na galeria!');
}
  return (
    <View style={estilos.geral}>
      <View style={estilos.header}>
        <Text style={estilos.title}>PONT | WEAR</Text>
        <Ionicons name="search" size={25} color="#ffffff" />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={estilos.containerColunas}>
          {/* Coluna esquerda */}
          <View style={estilos.coluna}>
            {coluna1.map((item, i) => (
              <TouchableOpacity
                key={i}
                activeOpacity={0.8}
                onPress={() => pegar(item.id)}
              >
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
              <TouchableOpacity
                key={i}
                activeOpacity={0.8}
                onPress={() => pegar(item.id)}
              >
                <Image
                  source={{ uri: item.urls.full }}
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

      {dados && (
        <TouchableOpacity
          style={estilos.sr}
          activeOpacity={1}
          onPress={() => setDados(null)}
        >
          <View style={estilos.cr}>
            <Image
              source={{
                uri: dados.urls?.small,
              }}
              style={estilos.kr}
            />

            <View style={estilos.sqr}>
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  flexDirection: "row",
                  paddingBottom: 20,
                }}
              >
                <View
                  style={{
                    width: 15,
                    height: 15,
                    backgroundColor: "#c40c0c",
                    borderRadius: "100px",
                  }}
                ></View>
                <View
                  style={{
                    width: 15,
                    height: 15,
                    backgroundColor: "#0cc40c",
                    borderRadius: "100px",
                  }}
                ></View>
              </View>

              <TouchableOpacity onPress={() => baixar(dados.urls.small)}>
                <Ionicons
                  name="cloud-download-outline"
                  size={29}
                  color="black"
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Ionicons name="heart" size={29} color="#494949" />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      )}
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
    gap: 30,
  },
  image: {
    borderRadius: 10,
    resizeMode: "cover",
  },
  sr: {
    position: "absolute",
    width: "100%",
    height: "110%",
    backgroundColor: "#0f0f0f46",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    top:-50
  },
  cr: {
    width: 320,
    height: 370,
    backgroundColor: "white",
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
  },
  kr: {
    width: "85%",
    height: "100%",
  },
  sqr: {
    width: "15%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: 10,
    gap: 10,
  },
});
