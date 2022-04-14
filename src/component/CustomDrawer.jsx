import React from "react";

import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import navigationStrings from "../constant/navigationStrings";

function CustomDrawer(props) {
  let { navigation } = props;
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Home"
        onPress={() => navigation.navigate(navigationStrings.HOME_SCREEN)}
      />
      <DrawerItem
        label="Profile"
        onPress={() => navigation.navigate(navigationStrings.PROFILE_SCREEN)}
      />
    </DrawerContentScrollView>
  );
}
export default CustomDrawer;
