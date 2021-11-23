import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

export const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    backgroundColor: theme.colors.white,
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 32,
    marginTop: 25
  },
  content: {
    flex: 1,
    width: '100%',
    height: '100%',
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
  subtitle: {
    color: theme.colors.text,
    fontSize: 18,
    textAlign: "left",
    fontFamily: theme.fonts.dmBold,
    marginTop: 32,
  },
  switch: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
  },
  card: {
    width: '47.5%',
    height: 78,
    borderRadius: 10,
    backgroundColor: theme.colors.shape,
    borderColor: theme.colors.line,
    borderWidth: 3,
    overflow: "hidden",
  },
  cardInside: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    flex: 1,
    
  },
  cardText: {
    color: theme.colors.text,
    fontSize: 19,
    textAlign: "center",
    fontFamily: theme.fonts.jost,
    marginRight: 10,
  },
  borderEffect: {
    borderWidth: 3,
    borderColor: '#E83F5B80'
  }
});