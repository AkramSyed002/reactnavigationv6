import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const Profile = ({ navigation, route }) => {
  let data = route.params;
  console.log(data);
  return (
    <View>
      <Text>Profile Screen</Text>
      <Text>Welcome {data.name} to your profile</Text>
      <Button
        title="Go Back"
        onPress={() =>
          //  navigation.goBack()
          navigation.popToTop()
        }
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
