import { StyleSheet } from "react-native";
import { theme } from "../../../theme";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  header: {
    paddingTop: 10 + 16 + getStatusBarHeight(),
    backgroundColor: theme.colors.white,
    paddingVertical: 10,
  },
  title: {
    fontSize: 32,
    fontFamily: theme.fonts.poppins,
    color: theme.colors.text,
    textAlign: "left",
    paddingHorizontal: 32,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: theme.fonts.dmBold,
    color: theme.colors.text,
    textAlign: "left",
    marginVertical: 6,
    paddingHorizontal: 32,
  },
  side: {
    flexGrow: 1,
    paddingVertical: 16,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  containerButton: {
    paddingHorizontal: 32,
    paddingTop: 16,
    width: '100%',
  },
  cardContainer: {
    width: '100%',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 32,
    paddingVertical: 10,
  },
  cardImage:{
    width: 67,
    height: 49,
    borderRadius: 8,
    backgroundColor: '#c4c4c4',
  },
  cardText:{
    fontSize: 15.27,
    fontFamily: theme.fonts.jost,
    color: theme.colors.text,
    textAlign: "left",
    marginLeft: 16,
  },
  indicator: {
    backgroundColor: '#E83F5B',
    height: 3,
    borderRadius: 20,
    width: '50%',
    borderLeftColor: '#0000',
    borderRightColor: '#0000',
    borderRightWidth: 33,
    borderLeftWidth: 33,
  },
  tabBar: {
    backgroundColor: '#fff',
    height: 50,
    elevation: 0 
  },
  label: {
    fontSize: 15.27,
    fontFamily: theme.fonts.jost,
    textAlign: "center",
  },
  modalCardFlag: {
    width: 101,
    height: 63,
    backgroundColor: '#c4c4c4',
    marginRight: 16,
    borderRadius: 8,
  },
  modalTitle: {
    fontSize: 33,
    fontFamily: theme.fonts.jost,
    textAlign: "left",
  },
  modalSubtitle: {
    fontSize: 15,
    fontFamily: theme.fonts.dmBold,
    textAlign: "left",
  },
});