// import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
// import React from "react";
// import Header from "../../component/Header";

// const Profile = ({ navigation, route }) => {
//   let data = route.params;
//   console.log(data);
//   return (
//     <View>
//       <SafeAreaView>
//         <Header
//           goBack={() => navigation.goBack()}
//           title="this is profile screen"
//         />
//         <Text>Profile Screen</Text>
//         <Text>Welcome {data.name} to your profile</Text>
//         <Button
//           title="Go Back"
//           onPress={() =>
//             //  navigation.goBack()
//             navigation.popToTop()
//           }
//         />
//       </SafeAreaView>
//     </View>
//   );
// };

// export default Profile;

// const styles = StyleSheet.create({});
import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MyButton from "../../component/MyButton";
import navigationStrings from "../../constant/navigationStrings";

export default function Profile({ navigation }) {
  return (
    <SafeAreaView>
      <Text>Profile</Text>
      <MyButton
        title={"got to Edit Profile"}
        onPress={() => {
          navigation.navigate(navigationStrings.EDIT_PROFILE);
        }}
      />
    </SafeAreaView>
  );
}
