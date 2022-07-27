import { Text, View, StyleSheet } from "react-native";
import Title from "../components/Title";
import Colors from "./constants/colors";

function GameScreen() {
  return(
  <View style={styles.screen}>
    <Title>Opponent's Guess</Title>

    <View>
        <Text>Higher or lower?</Text>
    </View>
    <View>

    </View>
  </View>
  )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
flex: 1,
padding: 24,
    },
    title: {
       fontSize: 24,
       fontWeight: "bold",
       color: Colors.accent500,
       textAlign: 'center',
       borderWidth: 2,
       borderColor: Colors.accent500,
       padding: 12,
    },
});