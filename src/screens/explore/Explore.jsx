import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../component/Header";
import MyButton from "../../component/MyButton";
import navigationStrings from "../../constant/navigationStrings";

const Explore = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Header title="Explore" goBack={() => navigation.goBack()} />
      <Text>Explore</Text>
      <MyButton
        title="Go to Search"
        onPress={() => navigation.navigate(navigationStrings.SEARCH)}
      />
    </SafeAreaView>
  );
};

export default Explore;
