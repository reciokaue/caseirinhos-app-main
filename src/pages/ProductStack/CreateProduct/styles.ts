import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingTop: 16 + getStatusBarHeight(),
    alignItems: 'center',
    justifyContent: "flex-start",
    backgroundColor: '#fff',
  },
  title: {
    color: theme.colors.text,
    width: '100%',
    fontWeight: "700",
    fontSize: 32,
    marginTop: 100,
    marginBottom: 36,
    textAlign: "left",
    fontFamily: theme.fonts.poppins,
  },
  subtitle:{
    color: theme.colors.text,
    width: '100%',
    fontWeight: "700",
    fontSize: 18,
    textAlign: "left",
    marginBottom: 16,
    marginTop: 16,
    fontFamily: theme.fonts.dmRegular,
  },
  button: {
    width: '100%',
    backgroundColor: theme.colors.gold,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    justifyContent: "space-between",
  },
  close: {
    width: 46,
    height: 46,
    justifyContent: "center",
    alignItems: "center",
  },
  textWrapper:{
    height: 46,
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
    paddingRight: '25%',
  },
  buttonText: {
    fontSize: 16,
    color: theme.colors.white,
    fontFamily: theme.fonts.jost,
  },
  imageContainer: {
    flex: 1,
    paddingLeft: 32,
    paddingRight: 16,
    flexDirection: "row",
    flexWrap: "wrap"
  }
});