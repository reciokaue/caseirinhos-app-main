import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../../theme";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // width: '100%',
    // height: '100%',
    paddingTop: 16 + getStatusBarHeight(),
    // alignItems: 'center',
    // justifyContent: "flex-start",
    backgroundColor: '#fff',
  },
  title: {
    color: theme.colors.text,
    width: '100%',
    fontWeight: "700",
    fontSize: 32,
    textAlign: "left",
    paddingHorizontal: 32,
    marginTop: 50,
    marginBottom: 16,
    fontFamily: theme.fonts.poppins,
  },
  subtitle:{
    color: theme.colors.text,
    width: '100%',
    fontWeight: "700",
    fontSize: 18,
    textAlign: "left",
    paddingHorizontal: 32,
    marginBottom: 16,
    fontFamily: theme.fonts.dmRegular,
  }
});