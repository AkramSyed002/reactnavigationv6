import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../component/Header";

const ProductDetails = ({ navigation }) => {
  return (
    <View>
      <Header title="Product Details" goBack={() => navigation.goBack()} />
      <Text>ProductDetails</Text>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});
