import { ActivityIndicator, View } from "react-native";
import AppStack from "../components/AppStack";
import AuthStack from "../components/AuthStack";
import { AuthContext } from "../components/context/AuthContext";
import { useContext } from "react";

export default function Index() {
  const { userToken } = useContext(AuthContext);

  return (
    <View>
      {userToken != null ? <AppStack /> : <AuthStack />}
    </View>
  );
}
