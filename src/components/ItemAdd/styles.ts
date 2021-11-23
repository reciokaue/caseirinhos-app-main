import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container:{
    position: "relative",
    overflow: "hidden",
    borderRadius: 15,
    marginRight: 4,
  },
  add: {
    width: 31,
    height: 31,
    backgroundColor: '#E83F5B',
    borderRadius: 99,
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 82,
    height: 111,
    backgroundColor: '#c4c4c4',
    marginBottom: 3,
    borderRadius: 8,
  },
  title: {
    color: theme.colors.text,
    fontSize: 14,
  },
  price: {
    color: theme.colors.text,
    fontWeight: "500",
    fontSize: 15,
  },
});