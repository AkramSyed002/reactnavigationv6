import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../component/Header";

const Search = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Header title="Search" goBack={() => navigation.goBack()} />
      <Text>Search</Text>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({});
