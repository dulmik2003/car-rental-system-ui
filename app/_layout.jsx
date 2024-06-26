import { Stack } from "expo-router";
import { Authprovider } from "../components/context/AuthContext";

export default function RootLayout() {
  return (
    <Authprovider>
      <Stack screenOptions={{ statusBarStyle: "light", statusBarColor: '#151718' }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
    </Authprovider>
  );
}
