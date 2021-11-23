import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../../theme";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop:  getStatusBarHeight(),
    paddingHorizontal: 32,
  },
  header:{
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 45,
  },
  title: {
    color: theme.colors.text,
    width: '100%',
    fontWeight: "700",
    fontSize: 32,
    textAlign: "left",
    fontFamily: theme.fonts.poppins,
  },
  subtitle: {
    color: theme.colors.text,
    fontWeight: "700",
    fontSize: 18,
    textAlign: "center",
    fontFamily: theme.fonts.dmBold,
    marginTop: 150,
    marginBottom: 20,
  },
  image: {
    // flex: 1,
    aspectRatio: 1.5, 
    resizeMode: 'contain'
  },
});