import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../Utils/Colors";

export default function LoginScreen() {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
      }}
    >
      <Image
        style={styles.logoImage}
        source={require("../../../assets/images/ev-logo.png")}
      />
      <Image
        style={styles.bgImage}
        source={require("../../../assets/images/images.png")}
      />
      <View style={{ padding: 20 }}>
        <Text style={styles.heading}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
        <Text style={styles.desc}>Lorem ipsum dolor sit amet.</Text>
        <TouchableOpacity onPress={()=>console.log("clicked")} style={styles.button} >
          <Text style={{
            color:Colors.WHITE,
            textAlign:"center",
            fontFamily:"outfit",
            fontSize:17
          }} >Login with google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoImage: {
    width: 200,
    height: 60,
    objectFit: "contain",
  },
  bgImage: {
    width: "100%",
    height: 260,
    marginTop: 20,
    objectFit: "cover",
  },
  heading: {
    fontSize: 25,
    fontFamily: "outfit-bold",
    textAlign: "center",
    marginTop: 20,
  },
  desc: {
    textAlign: "center",
    fontSize: 17,
    fontFamily: "outfit",
    marginTop: 15,
    color: Colors.GRAY,
  },
  button:{
    backgroundColor:Colors.PRIMARY,
    display:"flex",
    marginTop:70,
    borderRadius:99,
    padding:16
  }
});
