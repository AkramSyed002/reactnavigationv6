import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import React from "react";
import { styles } from "./style";
import navigationStrings from "../../constant/navigationStrings";
import { useNavigation } from "@react-navigation/native";
import Header from "../../component/Header";

const Home = ({ navigation }) => {
  //use this hook to navigate to other screens when navigation props is'nt available
  // const navigation = useNavigation();

  let tempObject = { name: "akram syed", age: 24, role: "developer" };
  const handleNavigate = () => {
    navigation.navigate(navigationStrings.PROFILE_SCREEN, tempObject);
  };
  return (
    <View style={styles.homeContainer}>
      <SafeAreaView>
        <Header title="Home " />
        <Text>Home Screen</Text>
        <Button title="go to Profile Screen" onPress={handleNavigate} />
        <View style={{ paddingTop: 20 }}>
          <Button
            title="go to Explore Screen"
            color={"tomato"}
            onPress={() =>
              navigation.navigate(navigationStrings.EXPLORE_SCREEN)
            }
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;
