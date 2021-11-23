import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: "relative",
    flexDirection: "row",
    borderWidth: 1.5,
    borderColor: theme.colors.line,
    borderRadius: 8,
    marginVertical: 8,
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    paddingRight: 35,
    paddingVertical: 12,
  },
  input: {
    width: '100%',
    height: '100%',
    color: theme.colors.input,
    fontFamily: theme.fonts.dmRegular,
    backgroundColor: '#0000',
    fontSize: 16,
    zIndex: 2,
  },
  placeholder: {
    position: "absolute",
    paddingHorizontal: 5,
    paddingVertical: 2,
    backgroundColor: theme.colors.white,
    top: 13,
    left: 12,
    fontFamily: theme.fonts.dmRegular,
    zIndex: 1,
  },
  text:{
    color: theme.colors.line,
    fontSize: 16,
    fontFamily: theme.fonts.dmRegular,
  },
  removeText:{
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    paddingRight: 5,
    paddingLeft: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#fff',
    borderRadius: 100,
    zIndex: 3,
  },
  required: {
    position: "absolute",
    right: 0,
    top: -5,
    color: theme.colors.red,
    fontSize: 22,
    fontFamily: theme.fonts.poppins,
    zIndex: 10,
  }
});