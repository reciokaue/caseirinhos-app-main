import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 27,
    paddingHorizontal: 32,
  },
  row: {
    width: '100%',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 4
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    color:  theme.colors.text,
  },
  subtitle:{
    fontSize: 14,
    color: theme.colors.text,
  },
});