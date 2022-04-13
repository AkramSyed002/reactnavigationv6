import { View, Button } from "react-native";
import React from "react";

const MyButton = ({ title, onPress }) => {
  return (
    <View>
      <Button
        title={title || "default title"}
        onPress={!!onPress ? onPress : () => alert("default function called")}
      >
        MyButton
      </Button>
    </View>
  );
};

export default MyButton;
