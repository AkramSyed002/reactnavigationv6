import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import React from "react";

const Header = ({ goBack, title }) => {
  return (
    <View style={styles.headerContainer}>
      {goBack && (
        <TouchableOpacity
          onPress={
            !!goBack
              ? goBack
              : () => Alert.alert("fsfsdfsd", "default function hit")
          }
        >
          <Text>GoBack</Text>
        </TouchableOpacity>
      )}
      <Text style={{ marginHorizontal: "auto" }}>
        {title || "Default Title"}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    height: 42,
    flex: 1,
    backgroundColor: "red",
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
  },
});
