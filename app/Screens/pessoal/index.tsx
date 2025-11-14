
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,

} from "react-native";

import { Ionicons } from "@expo/vector-icons";
//https://images.pexels.com/photos/1853542/pexels-photo-1853542.jpeg?_gl=1*1ptcsd4*_ga*ODMxNjgzNDgzLjE3NjI5NzU1MjQ.*_ga_8JE65Q40S6*czE3NjMxNDA4MTEkbzIkZzEkdDE3NjMxNDA4NDgkajIzJGwwJGgw
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


     <ImageBackground
      source={{ uri: 'https://images.pexels.com/photos/1853542/pexels-photo-1853542.jpeg' }}
      style={ estilos.fundo}
    >
      <View style={estilos.ahh}>
        <TouchableOpacity style={estilos.imgs}>
           <Image
           source={{ uri: "" }}
         
         />
        </TouchableOpacity>
        <TextInput placeholder="Seu Nome" style={estilos.br}/>
        <TextInput/>

        
      </View>
      </ImageBackground>

      <View style={{display:"flex", top:50,paddingLeft:30,paddingBottom:10,paddingRight:30}}>
        <View style={{display:"flex", flexDirection:"row", gap:5}}>
         
          <Text style={{color:"white", fontSize:20,}}>
            Seus Favoritos
          </Text>
           <Ionicons name="heart" size={29} color="#474646" />
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
    padding:12,
    paddingLeft:30,
    paddingRight:30
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
    height:180,

 paddingTop:10,
 paddingLeft:30,
 paddingBottom:10,
 paddingRight:30


  },
  imgs:{
    width:80,
    height:80,
    backgroundColor:"white",
    borderRadius:100
    
  },
  br:{
    color:"white",
    fontSize:22,
    

  },
  ahh:{
 display:"flex",
 flexDirection:"column",
 gap:10
  }





});
