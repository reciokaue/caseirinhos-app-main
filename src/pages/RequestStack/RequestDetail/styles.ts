import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

export const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    backgroundColor: theme.colors.white,
    justifyContent: "space-between",
    marginTop: 100,
  },
  container: {
    width: '100%',
    padding: 32,
  },
  title: {
    fontSize: 32,
    color: theme.colors.text,
    textAlign: "left",
    fontFamily: theme.fonts.poppins,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  time: {
    fontSize: 14,
    color: theme.colors.text,
    textAlign: "left",
    fontFamily: theme.fonts.dmRegular,
  },
  date: {
    fontSize: 18,
    color: theme.colors.text,
    textAlign: "left",
    fontFamily: theme.fonts.dmBold,
  },
  listItems:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
  },
  bulletWrapper: {
    width: 'auto',
    borderRadius: 50, 
    overflow: "hidden",
  },
  bulletTitle: {
    fontSize: 20,
    color: theme.colors.text,
    fontFamily: theme.fonts.jost,
    textAlign: "center",
    marginBottom: 5,
  },
  bulletImage: {
    width: 37,
    height: 37,
    backgroundColor: '#c4c4c4',
    borderRadius: 80
  },
  dateInfo: {
    fontSize: 14,
    color: theme.colors.text,
    fontFamily: theme.fonts.dmRegular,
    textAlign: "left",
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    color: theme.colors.text,
    fontWeight: "bold",
    fontFamily: theme.fonts.dmBold,
    textAlign: "left",
    marginTop: 15,
    marginBottom: 32,
  },
});