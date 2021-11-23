import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: "absolute",
    top: getStatusBarHeight(),
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 32,
    paddingLeft: 20,
    zIndex: 10,
  },
  border: {
    borderBottomColor: theme.colors.line,
    borderBottomWidth: 1.5,
    backgroundColor: theme.colors.white,
  },
  buttonWrapper: {
    borderRadius: 1000,
    overflow: "hidden",
    marginVertical: 10,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  title:{
    fontSize: 18,
    fontFamily: theme.fonts.dmBold,
    fontWeight: "bold",
    color: theme.colors.text,
    textAlign: "left",
    marginLeft: 16,
  }
});