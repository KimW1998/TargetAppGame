import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../screens/constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const devicewidth = Dimensions.get('window').width; //get the screensize of the user without the status bar

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: devicewidth < 380 ? 12 : 24,
    borderRadius: 8,
    margin: devicewidth < 380 ? 12 : 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontFamily: 'open-sans-bold',
    color: Colors.accent500,
    fontSize: devicewidth < 380 ? 28 : 36,
  },
});
