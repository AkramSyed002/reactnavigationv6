import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Header = ({ goBack = () => {}, title = "fskfjsd" }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={goBack}>
        <Text>{goBack ? "Go Back" : null}</Text>
      </TouchableOpacity>
      <Text>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: { flex: 1, backgroundColor: "red" },
});
