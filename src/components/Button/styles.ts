import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: theme.colors.gold,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
  },
  outlined:{
    width: '100%',
    backgroundColor: '#0000',
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    flexDirection: "row"
  },
  border:{
    borderWidth: 1.5,
    borderColor: theme.colors.line,
    borderRadius: 8,
    overflow: "hidden",
  },
  redFit: {
    backgroundColor: theme.colors.red,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    paddingHorizontal: 30,
  },
  title:{
    fontSize: 16,
    color: theme.colors.white,
    fontFamily: theme.fonts.jost,
  },
  titleOutlined: {
    fontSize: 16,
    color: '#29292E',
    fontFamily: theme.fonts.jost,
  },
  titleRed: {
    fontSize: 12,
    color:  theme.colors.white,
    fontFamily: theme.fonts.jost,
  }
});