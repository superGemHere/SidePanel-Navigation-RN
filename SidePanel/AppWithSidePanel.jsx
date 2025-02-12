import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="User"
        screenOptions={{
          headerTitleAlign: "center",
          drawerActiveBackgroundColor: "#406590",
          drawerActiveTintColor: "#fff",
          drawerStyle: {
            backgroundColor: "#f0f0f0",
            width: "60%",
          },
        }}
      >
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            drawerLabel: "Welcome Screen",
            drawerIcon: (({color, size}) => <Ionicons name="home" color={color} size={size}/>)
          }}
        />
        <Drawer.Screen name="User" component={UserScreen} options={{
           drawerIcon: (({color, size}) => <Ionicons name="person" color={color} size={size}/>)
        }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
