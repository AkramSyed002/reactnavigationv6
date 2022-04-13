import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../component/Header";

export default function EditProfile({ navigation }) {
  return (
    <SafeAreaView>
      <Header title={"Edit Profile "} goBack={() => navigation.goBack()} />
      <Text>EditProfile</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
