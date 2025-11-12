
import {
  View,
  Text,
  StyleSheet,
  TextInput

} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function Pessoal() {


  return (

      

    <View style={estilos.geral}>

  

      <View style={estilos.header}>

        <Text style={estilos.title}>PONT | WEAR</Text>
        <View style={{display:"flex", flexDirection:"row", gap:10 }}>
          <Ionicons name="person-circle-sharp" size={28} color="#ffffff" />
          <Ionicons name="search" size={28} color="#ffffff" />
        </View>
      </View>


    <View style={estilos.fundo}>

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
    padding:12
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
  headers:{

  },
  fundo:{
    width:"100%",
    height:200,
    backgroundColor:"red"
  }


});
