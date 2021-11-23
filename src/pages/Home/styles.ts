import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 16+ 50 + getStatusBarHeight(),
  },
  title: {
    color: theme.colors.text,
    width: '100%',
    fontWeight: "700",
    fontSize: 32,
    marginBottom: 15,
    textAlign: "left",
    fontFamily: theme.fonts.poppins,
  },
  scrollContainer:{
    flexGrow: 1,
    width: "100%",
    paddingHorizontal: 32,
  }
});